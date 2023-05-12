import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserDtoService } from './user-dto.service';
import { CreateUserDtoDto } from './dto/create-user-dto.dto';

@Controller('user-dto')
export class UserDtoController {
  constructor(private readonly userDtoService: UserDtoService) {}

  @Post('create')
  create(@Body() createUserDtoDto: CreateUserDtoDto) {
    return this.userDtoService.create(createUserDtoDto);
  }

  @Get('findall')
  findAll() {
    return this.userDtoService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: string) {
    return this.userDtoService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateUserDtoDto: CreateUserDtoDto) {
    return this.userDtoService.update(+id, updateUserDtoDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.userDtoService.remove(+id);
  }
}
