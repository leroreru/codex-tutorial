import { IsNotEmpty } from 'class-validator';

export class CreateProdCatDtoDto {
  @IsNotEmpty({ message: 'data name product tidak boleh kosong' })
  name: string;

  @IsNotEmpty({ message: 'description product tidak boleh kosong' })
  description: string;
}
