const bcrypt = require('bcrypt');

const encryptPassword = async password => {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    return passwordHash;
};

const comparePasswords = async (password, passwordHash) => {
    const result = await bcrypt.compare(password, passwordHash);
    return result;
}

module.exports = {
    encryptPassword,
    comparePasswords
};