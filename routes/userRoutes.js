const express = require("express");
const router = express.Router();
const connectToDb = require("../lib/utils/connectToDb");
const Champ = require("../models/driverModel");

// add a driver entry
// @POST /api/user
// @private route
router.post("/api/drivers", async (req, res) => {
  const {
    full_name,
    nickname,
    birthday,
    nation,
    number_races_won,
    podiums,
    pole_positions,
    fastest_laps,
    laps_led,
    total_distance_in_lead,
    most_points_in_season,
    most_wins_in_season,
    karting_world_champion,
    F4_champion,
    F3_champion,
    F2_champion,
    current_status,
    notable_ability,
    wet_weather_rating,
    car_balance,
    years_active_in_f1,
    teams_driven_for,
    wdc_title_years,
    notable_rivals,
    signature_qualy,
    driving_style,
    injuries,
    post_f1_career,
    mentors_or_influences,
    allies,
    controversies,
    avg_qualy,
    race_craft_rating,
    historic_milestones_in_f1,
    personality_and_media,
    hobbies,
    pre_race_rituals,
    philanthropy,
  } = req.body;

  if (
    // full_name &&
    // nickname &&
    // birthday &&
    // nation &&
    // number_races_won &&
    // podiums &&
    // pole_positions &&
    // fastest_laps &&
    // laps_led &&
    // total_distance_in_lead &&
    // most_points_in_season &&
    // most_wins_in_season &&
    // karting_world_champion &&
    // F4_champion &&
    // F3_champion &&
    // F2_champion &&
    // current_status &&
    // notable_ability &&
    // wet_weather_rating &&
    // car_balance &&
    // years_active_in_f1 &&
    // teams_driven_for &&
    // wdc_title_years &&
    // notable_rivals &&
    // signature_qualy &&
    // signature_win &&
    // driving_style &&
    // injuries &&
    // post_f1_career &&
    // mentors_or_influences &&
    // allies &&
    // controversies &&
    // avg_qualy &&
    // race_craft_rating &&
    // historic_milestones_in_f1 &&
    // personality_and_media &&
    // hobbies &&
    // pre_race_rituals &&
    philanthropy
  ) {
    // create driver profile here
    const newDriver = await Champ.create(req.body);
    res
      .status(201)
      .json({ message: "New driver details added!", driverDetails: newDriver });
  } else throw new Error("Please double-check that all values are inserted!");
});

// fetch all drivers
// @GET /api/user
// @public route

// fetch a specific driver by id
// @GET /api/user/:id
// @public route

// update a specific driver by id
// @PUT /api/user/:id
// @private route

// delete a specific driver by id
// @DELETE /api/user/:id
// @private route

module.exports = router;
