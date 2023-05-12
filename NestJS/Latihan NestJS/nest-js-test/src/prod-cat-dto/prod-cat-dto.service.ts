import { Injectable } from '@nestjs/common';
import { CreateProdCatDtoDto } from './dto/create-prod-cat-dto.dto';
import { UpdateProdCatDtoDto } from './dto/update-prod-cat-dto.dto';
import { product_category } from 'models';

@Injectable()
export class ProdCatDtoService {
  async create(createProdCatDtoDto: CreateProdCatDtoDto) {
    try {
      const result = await product_category.create({
        name: createProdCatDtoDto.name,
        description: createProdCatDtoDto.description,
      });
      return ['data berhasil diinput', result];
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      const result = await product_category.findAll();

      return [result];
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      const result = await product_category.findByPk(id);
      if (!result) throw new Error('ID TIDAK DITEMUKAN');

      return [result];
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateProdCatDtoDto: UpdateProdCatDtoDto) {
    try {
      const result = await product_category.update(
        {
          name: updateProdCatDtoDto.name,
          description: updateProdCatDtoDto.description,
        },
        {
          where: {
            id: id,
          },
          returning: true,
        },
      );

      return ['data berhasil di update', result];
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      await product_category.destroy({
        where: { id: id },
      });
      return `data berhasil di hapus`;
    } catch (error) {
      return error.message;
    }
  }
}
