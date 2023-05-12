import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Sequelize } from 'sequelize-typescript';
import { order_detail, orders, product } from 'models';

@Injectable()
export class OrdersService {
  constructor(private readonly sequelize: Sequelize) {}
  async create(createOrderDto: CreateOrderDto) {
    try {
      let totalprice = 0;
      let totalproduct = 0;
      let user_id = 0;

      console.log(createOrderDto);
      const datas = [createOrderDto];

      datas.forEach((data) => {
        user_id = data.user_id;
        totalprice += data.quantity * data.price;
        totalproduct += data.quantity;
      });

      const dataJson = {
        user_id: user_id,
        totalproduct: totalproduct,
        totalprice: totalprice,
      };

      const data = `[${JSON.stringify(dataJson)}]`;
      const data2 = `${JSON.stringify(datas)}`;

      const query = `CALL InsertOrders('${data}','${data2}')`;
      await this.sequelize.query(query);

      return ['data berhasil dibuat'];
    } catch (error) {
      return error.message;
    }
  }

  // async findAll() {
  //   try {
  //     const result = await orders.findAll({
  //       attributes: ['id', 'user_id', 'totalproduct', 'totalprice'],
  //       include: [
  //         {
  //           model: order_detail,
  //           as: 'order_detail',
  //           attributes: ['order_id', 'product_id', 'quantity'],
  //           include: [
  //             {
  //               model: product,
  //               as: 'product',
  //               attributes: ['name'],
  //             },
  //           ],
  //         },
  //       ],
  //     });
  //     return [result];
  //   } catch (error) {
  //     return error.message;
  //   }
  // }

  // findOne(id: number) {
  // }

  update(id: number, updateOrderDto: CreateOrderDto) {
    return `This action updates a #${id} order`;
  }

  async remove(id: number) {
    try {
      await order_detail.destroy({
        where: { order_id: id },
      });
      await orders.destroy({
        where: { id: id },
      });
      return ['data berhasil dihapus'];
    } catch (error) {
      return error.message;
    }
  }
}
