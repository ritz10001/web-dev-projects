const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    const authHeader = req.headers["authorization"];
    console.log("started");
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_SECRET_KEY, (err, decoded) => {
            if(err){
                console.log("error");
                res.status(401);
                throw new Error("User not authorized");
            }
            console.log("success");
            req.user = decoded.user;
            next();
        });

        if(!token){
            res.status(401);
            throw new Error("User not authorized or token is missing");
        }
    }


}); 
module.exports = validateToken;