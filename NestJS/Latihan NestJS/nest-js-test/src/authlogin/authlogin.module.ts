import { Module } from '@nestjs/common';
import { AuthloginService } from './authlogin.service';
import { AuthloginController } from './authlogin.controller';

@Module({
  controllers: [AuthloginController],
  providers: [AuthloginService],
})
export class AuthloginModule {}
