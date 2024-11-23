import { DataTypes } from 'sequelize';
import { sequelize } from '../configs/sequelize.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING, // Example roles: 'admin', 'user'
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING, // Example roles: 'admin', 'user'
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING, // Example roles: 'admin', 'user'
        allowNull: false,
    },
    designation: {
        type: DataTypes.STRING, // Example roles: 'admin', 'user'
        allowNull: false,
    },
    isActive: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false
    }
}, {
    tableName: 'user',
    timestamps: true
});

export default User;
