import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  user_id: number;

  @IsNotEmpty()
  product_id: number;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  quantity: number;
}
