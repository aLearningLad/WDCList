const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    jwt.sign(token, process.env.TOKEN_SECRET_KEY, (err, decode) => {
      if (err) {
        res.status(401);
        throw new Error("This user is not authorized");
      }
      req.user = decode.user;
    });

    res.status(200).json({ welcome: "Welcome there, authorized user!" });
    next();
  } else {
    res.status(401).json({
      not_allowed_here:
        "You're not authorized to access this route. Contact the developer, please.",
    });
  }
});

module.exports = validateToken;
