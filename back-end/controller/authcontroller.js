const authmodel = require('../models/authmodel')

exports.registercontroller = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  
  // Basic validation
  if (!email || !password || !name) {
      return res.status(400).json({
          status: "error",
          message: "Missing required fields"
      });
  }

  authmodel.registermodel(name, email, password)
      .then((user) => {
          return res.status(200).json({
              status: user.status,
              message: user.message,
              name: user.name,
              email: user.email
              // Remove password from response
          });
      })
      .catch((err) => {
          console.error("Registration error:", err);
          return res.status(500).json({
              status: "error",
              message: "Registration failed",
              // For debugging, you can include: error: err.sqlMessage
          });
      });
};


////////// login ::: 

exports.logincontroller = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    
    // Input validation
    if (!email || !password) {
      return res.status(400).json({
        status: "error",
        msg: "Email and password are required"
      });
    }
    
    const result = await authmodel.loginmodel(email, password);
    return res.status(200).json(result);
    
  } catch (err) {
    console.error("Login controller error:", err);
    
    // Handle specific error messages from the model
    if (err.msg) {
      return res.status(401).json({
        status: "error",
        msg: err.msg
      });
    }
    
    // Handle unexpected errors
    return res.status(500).json({
      status: "error",
      msg: "Server error during login"
    });
  }
};