import { Module } from '@nestjs/common';
import { UserDtoService } from './user-dto.service';
import { UserDtoController } from './user-dto.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { customer, users } from 'models';

@Module({
  imports: [SequelizeModule.forFeature([users, customer])],
  controllers: [UserDtoController],
  providers: [UserDtoService],
})
export class UserDtoModule {}
