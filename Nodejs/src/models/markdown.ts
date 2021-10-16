'use strict';
import {
    Model
} from 'sequelize';

interface MarkdownAttributes {
    id: number;
    contentHTML: string;
    contentMarkdown: string;
    description: string;
    doctorId: number;
    specialtyId: string;
    clinicId: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
    class Markdown extends Model<MarkdownAttributes>
        implements MarkdownAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

        id!: number;
        contentHTML!: string;
        contentMarkdown!: string;
        description!: string;
        doctorId!: number;
        specialtyId!: string;
        clinicId!: number;

        static associate(models: any) {
            // define association here: Định danh các mối quan hệ
            Markdown.belongsTo(models.User, { foreignKey: 'doctorId' })
        }
    }
    Markdown.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        contentHTML: {
            type: DataTypes.TEXT('long'),
        },
        contentMarkdown: {
            type: DataTypes.TEXT('long'),
        },
        description: {
            type: DataTypes.TEXT('long'),
        },
        doctorId: {
            type: DataTypes.INTEGER,
        },
        specialtyId: {
            type: DataTypes.INTEGER,
        },
        clinicId: {
            type: DataTypes.INTEGER,
        }
    }, {
        sequelize,
        freezeTableName: true,
        modelName: 'Markdown',
    });
    return Markdown;
};