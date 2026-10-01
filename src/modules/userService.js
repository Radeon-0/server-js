export class UserService {

    getUsers() {
        return this.getData('http://localhost:3000/users');
    }

    getData(url) {
        return fetch(url)
            .then(res => res.json())
            .catch(() => {
                throw new Error('Произошла ошибка, данных нет!');
            });
    }


    sendData(url, data) {
        return fetch(url, data)
            .then(res => res.json())
            .catch(() => {
                throw new Error('Произошла ошибка, данных нет!');
            });
    }

    addUser(user) {
        return this.sendData('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
    }

    removeUser(id) {
        return this.sendData(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        });
    }

    changeUser(id, data) {
        return this.sendData(`http://localhost:3000/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    getUser(id) {
        return this.getData(`http://localhost:3000/users/${id}`);
    }

    editUser(id, user) {
        return this.sendData(`http://localhost:3000/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    filterUsers(filterOption) {
        return this.getData(`http://localhost:3000/users?${filterOption}=true`);
    }

    getSortUsers(sortOption) {
        return this.getData(`http://localhost:3000/users?_sort=${sortOption.name}&_order=${sortOption.value}`);
    }

    getSortSearchUsers(str) {
        return this.getData(`http://localhost:3000/users?name_like=${str}`);
    }
}