'use strict';
import {
    Model
} from 'sequelize';

interface AllcodeAttributes {
    keyMap: string,
    type: string,
    valueEn: string,
    valueVi: string,
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Allcode extends Model<AllcodeAttributes>
        implements AllcodeAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

        keyMap!: string;
        type!: string;
        valueEn!: string;
        valueVi!: string;
        static associate(models: any) {
            // define association here: Định danh các mối quan hệ
            Allcode.hasMany(models.User, { foreignKey: 'positionId', as: 'positionData' })
            Allcode.hasMany(models.User, { foreignKey: 'gender', as: 'genderData' })
        }
    }
    Allcode.init({
        keyMap: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true
        },
        valueEn: {
            type: DataTypes.STRING,
            allowNull: true
        },
        valueVi: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: 'Allcode',
    });
    return Allcode;
};