import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDtoDto } from './create-user-dto.dto';

export class UpdateUserDtoDto extends PartialType(CreateUserDtoDto) {}
