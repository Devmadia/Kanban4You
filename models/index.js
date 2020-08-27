const User = require('./User');
const Project = require('./Project');

// require the Post model
const Card = require("./Card");
const Comment = require('./Comments');


User.hasMany(Project);

Project.belongsToMany(User);

User.hasMany(Card);

Card.belongsToMany(User);

User.hasMany(Comment);

Comment.belongsToMany(User);

Card.hasMany(Comment);

Comment.belongsTo(Card);

Project.hasMany(Card);

Card.belongsTo(Project)

// import user model data
module.exports = { User, Comment, Project, Card }; 