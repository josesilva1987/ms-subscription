import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class Subscription extends Model<Subscription> {
  @ApiProperty({ description: 'service_id', example: '1' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  service_id: number;

  @ApiProperty({ description: 'customer_id', example: '10' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;

  @ApiProperty({ description: 'purchase_date', example: '2021-10-01' })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  purchase_date: Date;

  @ApiProperty({ description: 'start_date', example: '2021-10-01' })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  start_date: Date;

  @ApiProperty({ description: 'end_date', example: '2022-09-30' })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_date: Date;

  @ApiProperty({ description: 'value', example: '99.99' })
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  value: number;

  @ApiProperty({ description: 'payment_method', example: 'credit-card' })
  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  payment_method: string;

  @ApiProperty({ description: 'numInstallments', example: '12' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  numInstallments: number;
}
