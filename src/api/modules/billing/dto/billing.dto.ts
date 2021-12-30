/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Billing extends Model<Billing> {
  @ApiProperty({ description: 'subscription_id', example: '1' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: 'Subscriptions',
      key: 'id'
    }
  })
  subscription_id: number;

  @ApiProperty({ description: 'installment', example: '1' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  installment: number;

  @ApiProperty({ description: 'value', example: '19.99' })
  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  value: number;

  @ApiProperty({ description: 'due_date', example: '2021-10-01' })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  due_date: number;

  @ApiProperty({ description: 'status_id', example: '1' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  status_id: number;
}
