import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { product_category } from './product_category';
import { order_detail } from './order_detail';

export interface productAttributes {
  id?: number;
  name?: string;
  description?: string;
  category_id?: number;
  price?: string;
  image?: string;
  createat?: Date;
  updateat?: Date;
}

@Table({ tableName: 'product', schema: 'public', timestamps: false })
export class product
  extends Model<productAttributes, productAttributes>
  implements productAttributes
{
  @ForeignKey(() => order_detail)
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('product_id_seq'::regclass)"),
  })
  @Index({ name: 'product_pkey', using: 'btree', unique: true })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING(200) })
  description?: string;

  @ForeignKey(() => product_category)
  @Column({ allowNull: true, type: DataType.INTEGER })
  category_id?: number;

  @Column({ allowNull: true, type: DataType.DECIMAL })
  price?: string;

  @Column({ allowNull: true, type: DataType.STRING(200) })
  image?: string;

  @Column({
    allowNull: true,
    type: DataType.DATE(6),
    defaultValue: Sequelize.literal('now()'),
  })
  createat?: Date;

  @Column({
    allowNull: true,
    type: DataType.DATE(6),
    defaultValue: Sequelize.literal('now()'),
  })
  updateat?: Date;

  @BelongsTo(() => product_category)
  product_category?: product_category;

  @BelongsTo(() => order_detail)
  order_detail?: order_detail;
}
