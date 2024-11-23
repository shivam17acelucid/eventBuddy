import Event from "./event.js";
import Feedback from "./feedback.js";
import User from './user.js';
import Project from './project.js';
import ProjectUser from './projectUser.js';

Feedback.belongsTo(Event, { foreignKey: 'eventId' });
Event.hasMany(Feedback, { foreignKey: 'eventId' });

ProjectUser.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(ProjectUser, { foreignKey: 'userId' });

ProjectUser.belongsTo(Project, { foreignKey: 'projectId' });
Project.hasMany(ProjectUser, { foreignKey: 'projectId' });

export {
    Event, Feedback, Project,
    ProjectUser, User
}