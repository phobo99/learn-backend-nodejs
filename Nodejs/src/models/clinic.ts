'use strict';
import {
    Model
} from 'sequelize';

interface ClinicAttributes {
    id: number;
    name: number;
    address: string;
    description: string;
    image: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Clinic extends Model<ClinicAttributes>
        implements ClinicAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        id!: number;
        name!: number;
        address!: string;
        description!: string;
        image!: string;

        static associate(models: any) {
            // define association here: Định danh các mối quan hệ
        }
    }
    Clinic.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
        image: {
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'Clinic',
    });
    return Clinic;
};