/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName: 'todos',
    timestamps: false,
})
export class Todo extends Model {
    @Column({
        type: DataType.STRING(200),
        allowNull: false,

    })
    task: string;

    @Column({
        defaultValue: false,
    })
    isActive: boolean;
}
