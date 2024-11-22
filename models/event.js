import { DataTypes, DATE } from "sequelize";
import { sequelize } from '../configs/sequelize.js';


const Event = sequelize.define('Event', {
    eventId: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Specify this as the primary key
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT, // Additional field for description
        allowNull: true,
    },
    createdBy: {
        type: DataTypes.STRING, // Additional field for the HR who created the event
        allowNull: false,
    },
    isActive: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
}, {
    tableName: 'event',
    timestamps: true
});

export default Event;