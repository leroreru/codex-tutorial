import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { product } from 'models';
import * as fs from 'fs';
import handleMessage from 'src/mhelper/mhelper';

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

      return handleMessage(result, 'Data Berhasil diInput', 200);
    } catch (error) {
      const oldImage = `./uploads/` + createProductDto.image;
      if (fs.existsSync(oldImage)) {
        fs.unlinkSync(oldImage);
      }
      return handleMessage(error.message, 'Data gagal diInput', 400);
    }
  }

  async findAll() {
    try {
      const result = await product.findAll();
      return handleMessage(result, 'Berhasil', 200);
    } catch (error) {
      return handleMessage(error.message, 'Gagal', 400);
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
      const oldImage = `./uploads/` + idbody.image;
      if (fs.existsSync(oldImage)) {
        fs.unlinkSync(oldImage);
      }
      return handleMessage(result, 'Data Berhasil diUpdate', 200);
    } catch (error) {
      const oldImage = `./uploads/` + updateProductDto.image;
      if (fs.existsSync(oldImage)) {
        fs.unlinkSync(oldImage);
      }
      return handleMessage(error.message, 'Data Gagal diUpdate', 400);
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

      return handleMessage(idbody, 'Data Berhasil diHapus', 200);
    } catch (error) {
      return handleMessage(error.message, 'Data Gagal diHapus', 400);
    }
  }
}
