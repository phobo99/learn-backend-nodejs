'use strict';
import {
    Model
} from 'sequelize';

interface ScheduleAttributes {
    id: number;
    currentNumber: string;
    maxNumber: string;
    date: Date;
    timeType: string;
    doctorId: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
    class Schedule extends Model<ScheduleAttributes>
        implements ScheduleAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

        id!: number;
        currentNumber!: string;
        maxNumber!: string;
        date!: Date;
        timeType!: string;
        doctorId!: number;
        static associate(models: any) {
            // define association here: Định danh các mối quan hệ
        }
    }
    Schedule.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        currentNumber: {
            type: DataTypes.INTEGER,
        },
        maxNumber: {
            type: DataTypes.INTEGER,
        },
        date: {
            type: DataTypes.DATE,
        },
        timeType: {
            type: DataTypes.STRING,
        },
        doctorId: {
            type: DataTypes.INTEGER,
        }
    }, {
        sequelize,
        modelName: 'Schedule',
    });
    return Schedule;
};