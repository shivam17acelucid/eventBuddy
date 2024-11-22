import Event from "./event.js";
import Feedback from "./feedback.js";

Feedback.belongsTo(Event, { foreignKey: 'eventId' });
Event.hasMany(Feedback, { foreignKey: 'eventId' });

export {
    Event, Feedback
}