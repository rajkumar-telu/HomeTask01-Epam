import userSchema from '../schema/userSchema';

const validateUser = (req, res, next) => {
    const user = req.body;
    const { error } = userSchema.validate(user);
    if (error) {
        res.status(400).json({ message: error.details[0].message });
        return;
    }
    next();
};

export default validateUser;
