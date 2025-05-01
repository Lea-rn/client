const db = require("../database.js");

//// add reservation :::

exports.addreservation = async (
  recipe_id,
  recipe_name,
  user_name,
  user_phone
) => {
  try {
    if ((recipe_id, recipe_name, user_name, user_phone)) {
      const query =
        "INSERT INTO reservation (recipe_id , recipe_name , user_name , user_phone) VALUES (?, ?, ?, ?)";
      const [result] = await db.query(query, [
        recipe_id,
        recipe_name,
        user_name,
        user_phone,
      ]);
      return result;
    } else {
      console.log("please insert data");
    }
  } catch (err) {
    console.log(err);
  }
};
