import { DataTypes } from 'sequelize';
import { sequelize } from '../configs/sequelize.js';

const ProjectUser = sequelize.define('ProjectUser', {
    userId: {
        type: DataTypes.INTEGER
    },
    projectId: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'userProject',
    timestamps: true
});

export default ProjectUser;
