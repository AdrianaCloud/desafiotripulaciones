const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET_KEY;

const generateToken = (userPayload) => {

    return jwt.sign(userPayload, secretKey, { expiresIn: "1h" });
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

const generateRefreshToken = (token) => {

    return jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            throw err
        }

        const accessToken = jwt.sign({ user_name: user.user_name, email: user.email, role: user.role }, secretKey, { expiresIn: '1h' });
        return accessToken;
    });

};

module.exports = {
    generateToken,
    generateRefreshToken,
    hashPassword,
    comparePasswords,
};
