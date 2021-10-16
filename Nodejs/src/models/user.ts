'use strict';
import {
    Model
} from 'sequelize';

interface UserAttributes {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    phonenumber: string;
    gender: string;
    image: string;
    roleId: string;
    positionId: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
    class User extends Model<UserAttributes>
        implements UserAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        id!: number;
        email!: string;
        password!: string;
        firstName!: string;
        lastName!: string;
        address!: string;
        phonenumber!: string;
        gender!: string;
        image!: string;
        roleId!: string;
        positionId!: string;

        static associate(models: any) {
            // define association here: Định danh các mối quan hệ
            User.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' })
            User.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' })
            User.hasOne(models.Markdown, { foreignKey: 'doctorId' })
        }
    }
    User.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        phonenumber: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
        roleId: {
            type: DataTypes.STRING,
        },
        positionId: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};