import { Injectable } from '@nestjs/common';
import { CreateOrderDetailDto } from './dto/create-order_detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order_detail.dto';
import { Sequelize } from 'sequelize-typescript';
import { order_detail, orders } from 'models';

@Injectable()
export class OrderDetailService {
  constructor(private readonly sequelize: Sequelize) {}
  create(createOrderDetailDto: CreateOrderDetailDto) {
    return 'This action adds a new orderDetail';
  }

  async findQuery() {
    try {
      const result = await this.sequelize.query(
        'select order_id,product_id,quantity,totalproduct,totalprice from order_detail join orders on order_detail.order_id = orders.id',
      );

      return { data: result[0] };
    } catch (error) {
      return error.message;
    }
  }

  async findJoin() {
    try {
      const result = await order_detail.findAll({
        attributes: ['order_id', 'product_id', 'quantity'],
        include: [
          {
            model: orders,
            as: 'order',
            attributes: ['id', 'user_id', 'totalproduct', 'totalprice'],
          },
        ],
      });
      return { data: result };
    } catch (error) {
      return error.message;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} orderDetail`;
  }

  update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return `This action updates a #${id} orderDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDetail`;
  }
}
