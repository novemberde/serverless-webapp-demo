import {Table, Column, Model, HasMany, AutoIncrement, PrimaryKey} from 'sequelize-typescript';
 
@Table
export default class User extends Model<User> {
  
  @Column
  @AutoIncrement
  @PrimaryKey
  id: number;

  @Column
  name: string;
 
  @Column
  email: string;

  @Column
  password: string;
}