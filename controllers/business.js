const { business } = require("../models/business");

exports.createBusiness = (req, res) => {
  req.body.password = md5( req.body.password)
  const bus = new business(req.body);
  bus.save((err, bus) => {
    if (err) {
      return res.status(400).json({
        error: "Failed to save your business in DB"
      });
    }
    res.json(bus);
  });
};

exports.getBusiness = (req, res) => {
  business.findById(req.body.id)
    .exec((err, bus) => {
      if (err) {
        return res.status(400).json({
          error: "No orders found in DB"
        });
      }
      res.json(bus);
    });
};
