import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  Response,
  SuccessResponse,
  ValidateError,
} from "tsoa";
import { UserModel } from "../model/user.model";
import { UserService, UserCreationParams } from "../service/user.service";

export interface UserIDValidationError extends ValidateError {
  message: "Validation failed: User ID must be a number";
  details: { [key: string]: unknown }
}

@Route("users")
export class UserController extends Controller {

  @Response<UserIDValidationError>(422, "Validation Failed") // Custom error response
  @Get("{userId}")
  public async getUser(
    @Path() userId: number,
    @Query() name?: string
  ): Promise<UserModel> {
    return new UserService().get(userId, name);
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    new UserService().create(requestBody);
    return;
  }
}