/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  productName: string;

  @IsNumber()
  discountedPrice: number;

  @IsNumber()
  rawPrice: number;

  @IsNumber()
  reviewCount: number;

  @IsNumber()
  reviewStars: number;

  @IsString()
  miniminiDescription: string;

  @IsString()
  miniDescription: string;

  @IsString()
  fullDescription: string;

  @IsString()
  imgLink: string;

  @IsString()
  additionalInformation: string;
}
