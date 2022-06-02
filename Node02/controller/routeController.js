import users from '../db/data';


const getUserById = (req, res) => {
    const id = req.params.id;
    const result = users.find((user) => user.id === id);
    if (result || !result.isDeleted) {
        res.send(result);
    } else {
        res.send('User not Found!');
    }
};

const getUsers = (req, res) => {
    const result = users.filter(user => !user.isDeleted);
    // console.log(result);
    res.send(result);
};

const createUser = (req, res, next) => {
    const newUser = req.body;
    newUser.isDeleted = false;
    newUser.age = parseInt(newUser.age, 10);
    console.log(users);
    if (users.find(user => user.id === newUser.id)) {
        res.status(400).json({ message: 'User already exists' });
        return;
    }
    if (users.length === users.push(newUser)) {
        res.json({ message:'Failed to create user' });
        return;
    }
    next();
};

const updateUser = (req, res, next) => {
    const id = req.params.id;
    const data = req.body;
    const position = users.findIndex((user) => user.id === id);

    if (position !== -1) {
        users[position] = data;
        res.statusCode = 200;
        res.send({ message: 'Successfully Updated the user' });
    } else {
        res.statusCode = 404;
        res.send({ message: 'Unable to find the user' });
    }
    next();
};

const deleteUser = (req, res, next) => {
    const id = req.params.id;
    const position = users.findIndex((user) => user.id === id);
    if (position !== -1) {
        users[position].isDeleted = true;
        res.statusCode = 200;
        res.send({ message: 'Successfully Deleted User data' });
    } else {
        res.statusCode = 404;
        res.send({ message: 'Unable to find the user' });
    }
    next();
};

const getAutoSuggestUsers = (req, res) => {
    const loginSubstring = req.params.loginSubstring;
    const limit = req.params.limit;
    const result = users.filter(user => !user.isDeleted)
        .filter(user => user.login.includes(loginSubstring))
        .sort((user1, user2) => user1.login.localeCompare(user2.login))
        .slice(0, limit);

    res.status(200).json(result);
};

export {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getAutoSuggestUsers
};
