/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AideWhereUniqueInput } from "../../aide/base/AideWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { DemandeWhereUniqueInput } from "../../demande/base/DemandeWhereUniqueInput";

@InputType()
class DemandeActivityCreateInput {
  @ApiProperty({
    required: false,
    type: () => AideWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AideWhereUniqueInput)
  @IsOptional()
  @Field(() => AideWhereUniqueInput, {
    nullable: true,
  })
  aide?: AideWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: () => DemandeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DemandeWhereUniqueInput)
  @Field(() => DemandeWhereUniqueInput)
  demande!: DemandeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(3560)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  message?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  titre!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  typeField!: string;
}

export { DemandeActivityCreateInput as DemandeActivityCreateInput };
