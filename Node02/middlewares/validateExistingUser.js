import users from '../db/data';
import userSchema from '../schema/userSchema';

const validateExistingUser = (req, res, next) => {
    const userToValidate = req.body;
    const { error } = userSchema.validate(userToValidate);
    if (error) {
        res.status(400).json({ message: error.details[0].message });
    }
    const userIndex = users.findIndex(user => user.id === userToValidate.id);
    if (userIndex === -1 || users[userIndex].isDeleted) {
        res.status(400).json({ message: 'User does not exist' });
    }
    userToValidate.isDeleted = false;
    userToValidate.age = parseInt(userToValidate.age, 10);
    next();
};

export default validateExistingUser;
