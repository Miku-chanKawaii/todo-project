const knex = require('../database/knex');

class ListService {
    constructor() {
        this.todolist = knex('item');
    }

    #getItem(payload) {
        const item = { ...payload};
        const itemProperties = [
            "text"
        ];
        return item;
    }

    async create(payload) {
        const item = this.#getItem(payload);
        return item;
    }

    async all() {
        return await this.todolist.select('*');
    }

    async findById(id) {
        return await this.todolist.where('id', id).select('*');
    }

    async update(id, payload) {
        const update = this.#getItem(payload);
        return await this.todolist.where('id', id).update(update);
    }

    async delete(id) {
        return await this.todolist.where('id', id).del();
    }
}

module.exports = ListService;