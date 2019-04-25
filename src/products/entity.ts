import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { Url } from 'url';
import { IsEmail } from 'class-validator';

@Entity()
export default class Product extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    title: string

    @Column('text', { nullable: false })
    description: string

    @Column('text', { nullable: false })
    picture: Url

    @Column('text', { nullable: false })
    price: string

    @IsEmail()
    @Column('text', { nullable: false })
    email: string

    @Column('text', { nullable: false })
    phonenumber: number
}