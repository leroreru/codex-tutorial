import { Injectable } from '@nestjs/common';
import { CreateUserDtoDto } from './dto/create-user-dto.dto';

import * as bcrypt from 'bcrypt';
import { Sequelize } from 'sequelize-typescript';

import { customer, orders, users } from 'models';
import handleMessage from 'src/mhelper/mhelper';

@Injectable()
export class UserDtoService {
  constructor(private readonly sequelize: Sequelize) {}
  async create(createUserDtoDto: CreateUserDtoDto) {
    try {
      const handleUsername = await users.findOne({
        where: { username: createUserDtoDto.username },
      });

      if (handleUsername) {
        throw new Error('Username Sudah ada');
      }
      const salt = await bcrypt.genSalt(10);
      const passHash = await bcrypt.hash(createUserDtoDto.password, salt);
      createUserDtoDto.password = passHash;

      // console.log(handleUsername);
      const data = `[${JSON.stringify(createUserDtoDto)}]`;
      const query = `CALL InsertUsersCustomer('${data}')`;
      console.log(query);
      const result = await this.sequelize.query(query);

      return handleMessage(result, 'Data Berhasil Dibuat', 200);
    } catch (error) {
      return handleMessage(error.message, 'Data Gagal Dibuat', 400);
    }
  }

  async findAll() {
    try {
      const result = await this.sequelize.query(
        ` SELECT users.id,
        users.username,
        customer.firstname,
        customer.lastname
       FROM users
         JOIN customer ON users.id = customer.user_id`,
      );
      return handleMessage(result, 'Berhasil', 200);
    } catch (error) {
      return handleMessage(error.message, 'Error', 400);
    }
  }

  async findOne(id: number) {
    try {
      const result = await this.sequelize.query(
        `SELECT * FROM view_userxcustomer where id = ${id}`,
      );
      // if (result[0].length < 1) {
      //   throw new Error('ID Tidak Ditemukan');
      // }
      return handleMessage(result[0], 'Berhasil', 200);
    } catch (error) {
      return handleMessage(error.message, 'Gagal', 400);
    }
  }

  async update(id: number, updateUserDtoDto: CreateUserDtoDto) {
    try {
      const handleUsername1 = await users.findByPk(id);
      const handleUsername2 = await users.findAll({
        where: { username: updateUserDtoDto.username },
      });

      // console.log(handleUsername1, handleUsername2);
      if (handleUsername2.length > 0)
        if (handleUsername1.id !== handleUsername2[0].id) {
          throw new Error('Username Sudah ada');
        }

      const salt = await bcrypt.genSalt(10);
      const passHash = await bcrypt.hash(updateUserDtoDto.password, salt);
      updateUserDtoDto.password = passHash;

      await customer.update(
        {
          firstname: updateUserDtoDto.firstname,
          lastname: updateUserDtoDto.lastname,
        },
        {
          where: { user_id: id },
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
      return handleMessage(id, 'Data Berhasil diUpdate', 200);
    } catch (error) {
      return handleMessage(error.message, 'Gagal', 400);
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

      return handleMessage(id, 'Data Berhasil diHapus', 200);
    } catch (error) {
      return handleMessage(id, 'Data Gagal DiUpdate', 400);
    }
  }
}
