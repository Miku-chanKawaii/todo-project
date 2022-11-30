import axios from 'axios';
const url = import.meta.env.VITE_APP_API_URL;
class ListService {
    constructor() {
        this.baseUrl = `${url}/todoitem`;
        this.api = axios.create({
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        });
    }
    async get() {
        return (await this.api.get(this.baseUrl)).data;
    }
    async create(item) {
        return (await this.api.post(this.baseUrl, item)).data;
    }
    async delete(id) {
        return (await this.api.delete(`${this.baseUrl}`)).data;
    }
}
export const listService = new ListService();