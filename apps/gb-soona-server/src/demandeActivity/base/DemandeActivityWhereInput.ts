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
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { DemandeWhereUniqueInput } from "../../demande/base/DemandeWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class DemandeActivityWhereInput {
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
  aide?: AideWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => DemandeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DemandeWhereUniqueInput)
  @IsOptional()
  @Field(() => DemandeWhereUniqueInput, {
    nullable: true,
  })
  demande?: DemandeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  id?: IntFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  message?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  titre?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  typeField?: StringFilter;
}

export { DemandeActivityWhereInput as DemandeActivityWhereInput };
