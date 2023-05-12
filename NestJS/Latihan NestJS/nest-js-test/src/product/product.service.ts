import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { product } from 'models';
import * as fs from 'fs';

@Injectable()
export class ProductService {
  async create(createProductDto: CreateProductDto) {
    try {
      if (
        !createProductDto.name ||
        !createProductDto.description ||
        !createProductDto.category_id ||
        !createProductDto.price
      ) {
        throw new Error('Validation failed');
      }
      const result = await product.create({
        name: createProductDto.name,
        description: createProductDto.description,
        category_id: createProductDto.category_id,
        price: createProductDto.price,
        image: createProductDto.image,
      });
      return { message: 'data berhasil diinput', data: result };
    } catch (error) {
      const oldImage = `./uploads/` + createProductDto.image;
      if (fs.existsSync(oldImage)) {
        fs.unlinkSync(oldImage);
      }
      return error.message;
    }
  }

  async findAll() {
    try {
      const result = await product.findAll();
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      const result = await product.findOne({
        where: { id: id },
      });
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateProductDto: CreateProductDto) {
    try {
      const idbody = await product.findByPk(id);
      if (!idbody) throw new Error('ID TIDAK ADA');

      const oldImage = `./uploads/` + idbody.image;
      if (fs.existsSync(oldImage)) {
        fs.unlinkSync(oldImage);
      }

      const result = await product.update(
        {
          name: updateProductDto.name,
          description: updateProductDto.description,
          category_id: updateProductDto.category_id,
          price: updateProductDto.price,
          image: updateProductDto.image,
        },
        {
          where: { id: id },
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
      const idbody = await product.findByPk(id);
      if (!idbody) throw new Error('ID TIDAK ADA');
      console.log(idbody.image);
      const oldImage = `./uploads/` + idbody.image;
      if (fs.existsSync(oldImage)) {
        fs.unlinkSync(oldImage);
      }

      await product.destroy({
        where: { id: id },
      });

      return 'data berhasil dihapus';
    } catch (error) {
      return error.message;
    }
  }
}
