const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateToken = (userPayload) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    const options = { expiresIn: "1h" };

    return jwt.sign(userPayload, secretKey, options);
};

const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

const comparePasswords = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
};

module.exports = {
    generateToken,
    hashPassword,
    comparePasswords,
};
