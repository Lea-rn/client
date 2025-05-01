const db = require("../database.js");

//// add reclamation :::

exports.addreclamationmodel = async (
name ,
email ,
subject
) => {
  try {
    if ((name , email , subject)) {
      const query =
        "INSERT INTO reclamation (name , email , subject) VALUES (?, ?, ?)";
      const [result] = await db.query(query, [
        name , email , subject
      ]);
      return result;
    } else {
      console.log("please insert data");
    }
  } catch (err) {
    console.log(err);
  }
};