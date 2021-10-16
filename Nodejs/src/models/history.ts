'use strict';
import {
    Model
} from 'sequelize';

interface HistoryAttributes {
    id: number;
    patientId: number;
    doctorId: string;
    description: string;
    files: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
    class History extends Model<HistoryAttributes>
        implements HistoryAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        id!: number;
        patientId!: number;
        doctorId!: string;
        description!: string;
        files!: string;

        static associate(models: any) {
            // define association here: Định danh các mối quan hệ
        }
    };
    History.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        patientId: {
            type: DataTypes.INTEGER,
        },
        doctorId: {
            type: DataTypes.INTEGER,
        },
        description: {
            type: DataTypes.TEXT,
        },
        files: {
            type: DataTypes.TEXT,
        }
    }, {
        sequelize,
        modelName: 'History',
    });
    return History;
};