
exports.seed = function(knex) {
        // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: "1GNSKBKC7LR179604",
          Year: 2020,
          Make: "Chevy",
          Model: "Tahoe",
          Trans: "6-spd Auto",
          Price: 59361,
          Condition: "New"
        },
        {
          VIN: "5XYP6DHC8LG051568",
          Year: 2020,
          Make: "Kia",
          Model: "Telluride S",
          Trans: "8-spd Auto",
          Price: 36370,
          Condition: "New"
        },
        {
          VIN: "WBA4W5C51KAE50855",
          Year: 2019,
          Make: "BMW",
          Model: "430i xDrive Coupe",
          Trans: "8-spd Auto",
          Price: 38848,
          Condition: "Ceritifed Pre-Owned"
        },
        {
          VIN: "ZAMGJ45A390047326",
          Year: 2018,
          Make: "Maserati",
          Model: "Gran Turismo MC",
          Trans: "6-spd Auto",
          Price: 124000,
          Condition: "New"
        },
        {
          VIN: "WUAVACFX7H7904748",
          Year: 2017,
          Make: "Audi",
          Model: "R8 V10 Spyder",
          Trans: "7-spd Auto",
          Price: 158000,
          Condition: "Certified Used"
        },
      ]);
    };
