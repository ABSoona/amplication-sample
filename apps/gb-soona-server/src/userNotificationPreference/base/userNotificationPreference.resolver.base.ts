/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { UserNotificationPreference } from "./UserNotificationPreference";
import { UserNotificationPreferenceCountArgs } from "./UserNotificationPreferenceCountArgs";
import { UserNotificationPreferenceFindManyArgs } from "./UserNotificationPreferenceFindManyArgs";
import { UserNotificationPreferenceFindUniqueArgs } from "./UserNotificationPreferenceFindUniqueArgs";
import { CreateUserNotificationPreferenceArgs } from "./CreateUserNotificationPreferenceArgs";
import { UpdateUserNotificationPreferenceArgs } from "./UpdateUserNotificationPreferenceArgs";
import { DeleteUserNotificationPreferenceArgs } from "./DeleteUserNotificationPreferenceArgs";
import { User } from "../../user/base/User";
import { UserNotificationPreferenceService } from "../userNotificationPreference.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserNotificationPreference)
export class UserNotificationPreferenceResolverBase {
  constructor(
    protected readonly service: UserNotificationPreferenceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserNotificationPreference",
    action: "read",
    possession: "any",
  })
  async _userNotificationPreferencesMeta(
    @graphql.Args() args: UserNotificationPreferenceCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserNotificationPreference])
  @nestAccessControl.UseRoles({
    resource: "UserNotificationPreference",
    action: "read",
    possession: "any",
  })
  async userNotificationPreferences(
    @graphql.Args() args: UserNotificationPreferenceFindManyArgs
  ): Promise<UserNotificationPreference[]> {
    return this.service.userNotificationPreferences(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserNotificationPreference, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserNotificationPreference",
    action: "read",
    possession: "own",
  })
  async userNotificationPreference(
    @graphql.Args() args: UserNotificationPreferenceFindUniqueArgs
  ): Promise<UserNotificationPreference | null> {
    const result = await this.service.userNotificationPreference(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserNotificationPreference)
  @nestAccessControl.UseRoles({
    resource: "UserNotificationPreference",
    action: "create",
    possession: "any",
  })
  async createUserNotificationPreference(
    @graphql.Args() args: CreateUserNotificationPreferenceArgs
  ): Promise<UserNotificationPreference> {
    return await this.service.createUserNotificationPreference({
      ...args,
      data: {
        ...args.data,

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserNotificationPreference)
  @nestAccessControl.UseRoles({
    resource: "UserNotificationPreference",
    action: "update",
    possession: "any",
  })
  async updateUserNotificationPreference(
    @graphql.Args() args: UpdateUserNotificationPreferenceArgs
  ): Promise<UserNotificationPreference | null> {
    try {
      return await this.service.updateUserNotificationPreference({
        ...args,
        data: {
          ...args.data,

          user: {
            connect: args.data.user,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserNotificationPreference)
  @nestAccessControl.UseRoles({
    resource: "UserNotificationPreference",
    action: "delete",
    possession: "any",
  })
  async deleteUserNotificationPreference(
    @graphql.Args() args: DeleteUserNotificationPreferenceArgs
  ): Promise<UserNotificationPreference | null> {
    try {
      return await this.service.deleteUserNotificationPreference(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(
    @graphql.Parent() parent: UserNotificationPreference
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
