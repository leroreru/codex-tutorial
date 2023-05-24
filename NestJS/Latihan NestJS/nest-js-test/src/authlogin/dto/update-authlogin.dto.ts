import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthloginDto } from './create-authlogin.dto';

export class UpdateAuthloginDto extends PartialType(CreateAuthloginDto) {}
