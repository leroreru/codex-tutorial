import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { customer } from 'models';

@Injectable()
export class CustomerService {
  async findAll() {
    try {
      const result = await customer.findAll();
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      const result = await customer.findOne({
        where: { id: id },
      });
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateCustomerDto: CreateCustomerDto) {
    try {
      const result = await customer.update(
        {
          firstname: updateCustomerDto.firstname,
          lastname: updateCustomerDto.lastname,
        },
        {
          where: { id: id },
          returning: true,
        },
      );

      return ['data berhasil diupdate', result];
    } catch (error) {
      return error.message;
    }
  }
}
