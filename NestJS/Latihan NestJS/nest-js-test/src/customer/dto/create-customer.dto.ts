import { IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;
}
