import { Controller, Post, Body } from '@nestjs/common';
import { AuthloginService } from './authlogin.service';
import { CreateAuthloginDto } from './dto/create-authlogin.dto';

@Controller('authlogin')
export class AuthloginController {
  constructor(private readonly authloginService: AuthloginService) {}

  @Post()
  create(@Body() createAuthloginDto: CreateAuthloginDto) {
    return this.authloginService.login(createAuthloginDto);
  }
}
