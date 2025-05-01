const reclamationmodel = require("../models/reclamationmodel.js");

/////////// add reclamation controller :::

exports.addreclamationcontroller = (req, res) => {
  reclamationmodel
    .addreclamationmodel(req.body.name, req.body.email, req.body.subject)
    .then((result) => {
      res.send(result);
    });
};
