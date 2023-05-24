import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  // @IsNotEmpty()
  name: string;

  // @IsNotEmpty({ message: 'a' })
  description: string;

  // @IsNotEmpty()
  category_id: number;

  // @IsNotEmpty()
  price: string;

  image: string;
}
