exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      // Inserts seed entries
      return knex('videos').insert([
        {name: 'Wow, it\'s made', src:'https://www.youtube.com/embed/dMapmlUwerw'},
        {name: 'Wow, it\'s made: Revelations', src:'https://www.youtube.com/embed/QjwTRt582Hs'},
        {name: 'Wow, It\'s made: I\'m Hungry! ', src:'https://www.youtube.com/embed/kiZN8MNWtOo'},
        {name: 'The Mythsters', src:'https://www.youtube.com/embed/0u3jY-nzUiU'},

      ]);
    });
};
