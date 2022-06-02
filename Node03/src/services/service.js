import Db from '../data-access/dbAccess';

export default class Service {
    static getUser(id) {
        return new Promise((resolve, reject) => {
            Db.getUserById(id).then(user => {
                if (user) {
                    resolve(user);
                } else {
                    reject({ 'message': 'User not found' });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    static createUser(user) {
        return new Promise((resolve, reject) => {
            const { login, password, age } = user;
            Db.createUser(login, password, age).then(newUser => {
                if (newUser) {
                    resolve(newUser);
                } else {
                    reject({ 'message': 'Failed to create' });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    static deleteUser(id) {
        return new Promise((resolve, reject) => {
            Db.deleteUser(id).then(result => {
                if (result[0] === 1) {
                    resolve({ 'message': 'Deleted' });
                } else {
                    reject({ 'message': 'Failed to delete' });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    static updateUser(id, user) {
        return new Promise((resolve, reject) => {
            const { login, password, age } = user;
            Db.updateUser(id, login, password, age).then(result => {
                if (result[0] === 1) {
                    resolve({ 'message': 'updated' });
                } else {
                    reject({ 'message' : 'Failed to update' });
                }
            }).catch(err => {
                reject(err);
            });
        });
    }

    static getUsers() {
        return new Promise((resolve, reject) => {
            Db.getUsers().then(users => {
                resolve(users);
            }).catch(err => {
                reject(err);
            });
        });
    }
}
