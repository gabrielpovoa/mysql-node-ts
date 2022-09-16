import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface UserInstace extends Model {
    id: number;
    name: string;
    age: number;
}

export const User = sequelize.define<UserInstace>("User", {
    id: {
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    }
}, {
    tableName: 'users',
    timestamps: false
});
