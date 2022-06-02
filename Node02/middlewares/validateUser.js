import userSchema from '../schema/userSchema';

const validateUser = (req, res, next) => {
    const userToValidate = req.body;
    const { error } = userSchema.validate(userToValidate);
    if (error) {
        res.status(400).json({ message: error.details[0].message });
        return;
    }
    next();
};

export default validateUser;
