const jwt = require("jsonwebtoken");
require('dotenv').config();

const authMiddlwares = (req, res, netx) => {
  let { authorization: token } = req.headers;
  token = token.replace("bearer ", "");
  console.log(token);
  jwt.verify(
    token,
    process.env.JWT_SECRET,
    { algorithms: "HS512" },
    (err, decoded) => {
      if (err) {
        res.status(400).json({
          error: "invalid token",
          message: "El token no es valido, envia el token correcto",
        });
      } else {
        netx();
        console.log(decoded);
      }
    }
  );
};

module.exports = authMiddlwares;
