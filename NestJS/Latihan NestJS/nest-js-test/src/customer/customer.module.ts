import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { customer } from 'models';

@Module({
  imports: [SequelizeModule.forFeature([customer])],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
