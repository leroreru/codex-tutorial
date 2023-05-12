import { Injectable } from '@nestjs/common';
import { CreateUserDtoDto } from './dto/create-user-dto.dto';

import * as bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize-typescript';

import { customer, users } from 'models';

@Injectable()
export class UserDtoService {
  constructor(private readonly sequelize: Sequelize) {}
  async create(createUserDtoDto: CreateUserDtoDto) {
    try {
      const salt = await bcrypt.genSalt(10);
      const passHash = await bcrypt.hash(createUserDtoDto.password, salt);

      createUserDtoDto.password = passHash;

      const data = `[${JSON.stringify(createUserDtoDto)}]`;
      const query = `CALL InsertUsersCustomer('${data}')`;
      await this.sequelize.query(query);

      return ['data berhasil di input'];
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      const result = await this.sequelize.query(`SELECT * FROM data_purchase`);

      return [result[0]];
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      const result = await this.sequelize.query(
        `SELECT * FROM data_purchase where id = ${id}`,
      );
      return [result[0]];
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateUserDtoDto: CreateUserDtoDto) {
    try {
      const salt = await bcrypt.genSalt(10);
      const passHash = await bcrypt.hash(updateUserDtoDto.password, salt);
      updateUserDtoDto.password = passHash;

      await customer.update(
        {
          firstname: updateUserDtoDto.firstname,
          lastname: updateUserDtoDto.lastname,
        },
        {
          where: { id: id },
          returning: true,
        },
      );

      await users.update(
        {
          username: updateUserDtoDto.username,
          password: passHash,
        },
        {
          where: {
            id: id,
          },
          returning: true,
        },
      );

      return ['data berhasil di update'];
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      await customer.destroy({
        where: { user_id: id },
      });

      await users.destroy({
        where: { id: id },
      });

      return ['data berhasil di hapus'];
    } catch (error) {
      return error.message;
    }
  }
}
