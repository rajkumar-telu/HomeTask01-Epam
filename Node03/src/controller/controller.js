import service from '../services/service';

class Controller {
    getUsers(req, res) {
        service.getUsers().then(users => {
            res.json(users);
        }).catch(err => {
            res.status(500).json(err);
        });
    }

    getUserById(req, res) {
        const id = req.params.id;
        service.getUser(id).then(user => {
            res.stauts(200).json(user);
        }).catch(err => {
            res.status(404).json(err);
        });
    }

    createUser(req, res, next) {
        const user = req.body;
        service.createUser(user).then((result) => {
            console.log(result.dataValues);
            next();
        }).catch(err => {
            res.status(404).json(err);
        });
    }

    deleteUser(req, res, next) {
        const id = req.params.id;
        service.deleteUser(id).then(result => {
            console.log(result.dataValues);
            next();
        }).catch(err => {
            res.status(404).json(err);
        });
    }

    updateUser(req, res, next) {
        const id = req.params.id;
        const user = req.body;
        service.updateUser(id, user).then(result => {
            console.log(result.dataValues);
            next();
        }).catch(err => {
            res.status(404).json(err);
        });
    }

    autoSuggest(req, res) {
        const { loginSubstring, limit } = req.params;
        service.autoSuggest(loginSubstring, limit).then(users => {
            res.json(users);
        }).catch(err => {
            res.status(404).json(err);
        });
    }
}

export default new Controller();
