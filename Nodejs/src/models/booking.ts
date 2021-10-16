'use strict';
import {
    Model
} from 'sequelize';

interface BookAttributes {
    id: number;
    statusId: string;
    doctorID: number;
    patientId: number;
    date: Date;
    timeType: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
    class Booking extends Model<BookAttributes>
        implements BookAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

        id!: number;
        statusId!: string;
        doctorID!: number;
        patientId!: number;
        date!: Date;
        timeType!: string;
        static associate(models: any) {
            // define association here: Định danh các mối quan hệ
        }
    }
    Booking.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        statusId: {
            type: DataTypes.STRING,
        },
        doctorID: {
            type: DataTypes.INTEGER,
        },
        patientId: {
            type: DataTypes.INTEGER,
        },
        date: {
            type: DataTypes.DATE,
        },
        timeType: {
            type: DataTypes.STRING,
        }
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};