import { DataTypes } from "sequelize";
import { sequelize } from '../configs/sequelize.js';


const Feedback = sequelize.define('Feedback', {
    feedbackId: {
        type: DataTypes.INTEGER,
        primaryKey: true, // Specify this as the primary key
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    feedback: {
        type: DataTypes.TEXT, // Additional field for description
        allowNull: true,
    },
    createdBy: {
        type: DataTypes.STRING, // Additional field for the HR who created the Feedback
        allowNull: false,
    },
    eventId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isActive: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
}, {
    tableName: 'feedback',
    timestamps: true
});

export default Feedback;