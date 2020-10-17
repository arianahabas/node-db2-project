
exports.seed = async function(knex) {

  await knex('cars').truncate()

  await knex('cars').insert([
    {VIN: "4Y1SL65848Z411439", make: "Lincoln", model: 'MKS', mileage: 50000, transmissionType: 'automatic', currentLien: true },
    {VIN: "JH4TB2H26CC000000", make: "Acura", model: 'MDX', mileage: 33443, transmissionType: 'automatic', currentLien: false },
    {VIN: "WAUFFAFM3CA000000", make: "Audi", model: 'A3', mileage: 34, transmissionType: 'automatic', currentLien: false },
    {VIN: "WBAUP7C57CV000000", make: "BMW", model: '335is', mileage: 34535, transmissionType: 'automatic', currentLien: true }
  ])
};
