import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { product } from './product';

export interface product_categoryAttributes {
  id?: number;
  name?: string;
  description?: string;
  createat?: Date;
  updateat?: Date;
  image?: string;
}

@Table({ tableName: 'product_category', schema: 'public', timestamps: false })
export class product_category
  extends Model<product_categoryAttributes, product_categoryAttributes>
  implements product_categoryAttributes
{
  @Column({
    primaryKey: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal(
      "nextval('product_category_id_seq'::regclass)",
    ),
  })
  @Index({ name: 'product_category_pkey', using: 'btree', unique: true })
  id?: number;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING(200) })
  description?: string;

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

  @Column({ allowNull: true, type: DataType.STRING(200) })
  image?: string;

  @HasMany(() => product, { sourceKey: 'id' })
  products?: product[];
}
