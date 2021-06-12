module.exports = (sequelize, Sequelize) => {
  const Property = sequelize.define("property", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    active: {
      type: Sequelize.BOOLEAN
    },
    image: {
      type: Sequelize.STRING
    },
    place: {
      type: Sequelize.STRING
    }
  });

  return Property;
};
