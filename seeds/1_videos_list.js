exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      // Inserts seed entries
      return knex('videos').insert([
        {name: 'Wow, it\'s made', src:'dMapmlUwerw'},
        {name: 'Wow, it\'s made: Revelations', src:'QjwTRt582Hs'},
        {name: 'Wow, It\'s made: I\'m Hungry! ', src:'kiZN8MNWtOo'},
        {name: 'The Mythsters', src:'0u3jY-nzUiU'},

      ]);
    });
};
