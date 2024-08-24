const mongoose = require("mongoose");

const driverSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: [true, "Driver name and surname is required"],
  },
  nickname: {
    type: String,
    required: [true, "Add a nickname or add 'Not known'"],
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
    required: [true, "Add number of poles achieved"],
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
  karting_world_champion: {
    type: Boolean,
    required: [
      true,
      "You need to specify whether the driver was a karting champion in their youth",
    ],
  },
  F4_champion: {
    type: Boolean,
    required: [
      true,
      "You need to specify whether the driver was a Formula 4 champion",
    ],
  },
  F3_champion: {
    type: Boolean,
    required: [
      true,
      "You need to specify whether the driver was a Formula 3 champion",
    ],
  },
  F2_champion: {
    type: Boolean,
    required: [
      true,
      "You need to specify whether the driver was a Formula 2 champion",
    ],
  },
  current_status: {
    type: String,
    required: [
      true,
      "Please specify the driver's current status, whether racing or retired",
    ],
  },
  notable_ability: {
    type: String,
    required: [true],
  },
  wet_weather_rating: {
    type: Number,
    required: [true, "Provide a wet weather driving skill rating out of 10"],
  },
  car_balance: {
    type: String,
    required: [true, "Either Oversteer, Understeer or Neutral"],
  },
  years_active_in_f1: {
    type: String,
    required: [true, "Year of debut - year of retirement / present year "],
  },
  teams_driven_for: {
    type: String,
    required: [true, "Which teams did they drive for?"],
  },
  wdc_title_years: {
    type: String,
    required: [true, "Provide years during which WDC was won"],
  },
  notable_rivals: {
    type: String,
    required: [true, "Who were their fiercest rivals?"],
  },
  signature_win: {
    type: String,
    required: [true, "Which win is synonymous with their name?"],
  },
  signature_qualy: {
    type: String,
    required: [true, "Which qualy lap or session was their best?"],
  },
  driving_style: {
    type: String,
    required: [true, "Describe their driving style in detail"],
  },
  injuries: {
    type: String,
    required: [true],
  },
  post_f1_career: {
    type: String,
    required: [true],
  },
  mentors_or_influences: {
    type: String,
    required: [true],
  },
  allies: {
    type: String,
    required: [true],
  },
  controversies: {
    type: String,
    required: [true, "What shady stuff have they been involved in?"],
  },
  avg_qualy: {
    type: Number,
    required: true,
  },
  race_craft_rating: {
    type: Number,
    required: [true, "Give a rating out of 10"],
  },
  historic_milestones_in_f1: {
    type: String,
    required: [true, "Mention milestones they achieved"],
  },
  personality_and_media: {
    type: String,
    required: [true, "What were their media relations like?"],
  },
  hobbies: {
    type: String,
    required: [true],
  },
  pre_race_rituals: {
    type: String,
    required: [true],
  },
  philanthropy: {
    type: String,
    required: [true],
  },
});

module.exports = mongoose.model("Champ", driverSchema);
