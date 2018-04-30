
exports.up = function(knex, Promise) {
  return createVideos()

  function createVideos(){
    return knex.schema.createTable('videos', function(table){
      table.increments();
      table.string('name');
      table.string('src');
    })
  }
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("createVideos")
};
