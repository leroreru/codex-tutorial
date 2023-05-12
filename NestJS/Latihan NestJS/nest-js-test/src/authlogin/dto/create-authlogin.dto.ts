import { IsNotEmpty } from 'class-validator';

export class CreateAuthloginDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}
