const db = require("../database.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registermodel = async (name, email, password) => {
  try {
    console.log("Received inputs:", name, email, password);
    const hashedpassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedpassword);

    const qr = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";

    // Use the promise-based interface correctly
    const [result] = await db.execute(qr, [name, email, hashedpassword]);

    console.log("Query successful, result:", result);

    return {
      status: "success",
      message: "new user is registered !!",
      email: email,
      name: name,
    };
  } catch (err) {
    console.error("DB Error:", err);
    throw err; // Re-throw the error to be caught by the controller
  }
};

/////////// login ////////////////////

const privatekey = "this my private key hahahahahahahaha";

exports.loginmodel = async (email, password) => {
  try {
    // First query to check if email exists
    const [emailCheck] = await db.execute(
      "SELECT email FROM user WHERE email = ?",
      [email]
    );

    if (emailCheck.length === 0) {
      throw {
        msg: "incorrect email or password",
      };
    }

    // Get user details
    const [userResults] = await db.execute(
      "SELECT * FROM user WHERE email = ?",
      [email]
    );
    console.log("model result:", userResults);

    // Compare passwords
    const verif = await bcrypt.compare(password, userResults[0].password);

    if (!verif) {
      throw {
        msg: "wrong email or password !!",
      };
    }

    // Generate JWT token
    const token = await jwt.sign(
      {
        name: userResults[0].name,
        id: userResults[0].id,
      },
      privatekey,
      {
        expiresIn: "1h",
      }
    );

    // Return success response
    return {
      msg: "login successful",
      name: userResults[0].name,
      token: token,
      id: userResults[0].id,
      email: userResults[0].email,
    };
  } catch (err) {
    console.error("Login error:", err);
    throw err; // Re-throw to be caught by controller
  }
};
