/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserNotificationPreferenceWhereInput } from "./UserNotificationPreferenceWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class UserNotificationPreferenceCountArgs {
  @ApiProperty({
    required: false,
    type: () => UserNotificationPreferenceWhereInput,
  })
  @Field(() => UserNotificationPreferenceWhereInput, { nullable: true })
  @Type(() => UserNotificationPreferenceWhereInput)
  where?: UserNotificationPreferenceWhereInput;
}

export { UserNotificationPreferenceCountArgs as UserNotificationPreferenceCountArgs };
