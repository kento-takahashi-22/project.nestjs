import { AllowNull, Column, Default, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {

  @AllowNull(false)
  @Default('')
  @Column
  name: string;

}