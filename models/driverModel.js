const mongoose = require("mongoose");

const driverSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: [true, "Driver name and surname is required"],
  },
  nickname: {
    type: String,
    required: false,
  },
  birthday: {
    type: String,
    required: [true, "Birthday is required in the format 'YYY/MM/DD' "],
  },
  nation: {
    type: String,
    required: [true, "Home nation is required"],
  },
  number_races_won: {
    type: Number,
    required: [true, "Number races won is required"],
  },
  podiums: {
    type: Number,
    required: [true, "Podium count is required"],
  },
  pole_positions: {
    type: Number,
  },
  fastest_laps: {
    type: Number,
    required: [true, "Fastest lap count is required"],
  },
  laps_led: {
    type: Number,
    required: [true, "Number laps led is required"],
  },
  total_distance_in_lead: {
    type: Number,
    required: [true, "Total distance in P1 required"],
  },
  most_points_in_season: {
    type: Number,
    required: [true, "Highest points tally in a season required!"],
  },
  most_wins_in_season: {
    type: Number,
    required: [true, "Highest win tally for season required"],
  },
});
