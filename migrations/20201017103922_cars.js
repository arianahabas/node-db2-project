
//The critical information for each car is the 
//VIN - TEXT , NOT NULL, UNIQUE
//make - TEXT, NOT NULL
//model - TEXT, NOT NULL
//mileage - INTEGER, NOT NULL
//They also track 
//transmission type - TEXT
//lien - BOOLEAN
//(clean, salvage, etc.), but this information is not always immediately known.

exports.up = async function(knex) {
  await knex.schema.createTable('cars', (table)=>{
      table.increments('id')
      table.text('VIN').notNull().unique()
      table.text('make').notNull()
      table.text('model').notNull()
      table.integer('mileage').notNull()
      table.text('transmissionType')
      table.boolean('currentLien')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cars')
};
