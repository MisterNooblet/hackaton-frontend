import axios from "axios"

const userAPI = {
    users: axios.create({
        baseURL: 'https://weary-pear-beaver.cyclic.app/api/v1'
    }),

    register(user) {
        this.users.post('/user/register', user)
    },

    async getUsers() {
        const response = await this.users.get()
        return response.data
    },

    async userCanlog(user, password) {
        try {
            const response = await this.users.post('/user/login', { email: user, password: password })
            return response.data
        } catch (error) {

        }
    },

    async insertFoods(userid, array) {
        try {
            const response = await this.users.put(`/user/${userid}`, { cuisines: array })
            console.log(response);
        } catch (error) {

        }
    },
    async getLeaders() {
        try {
            const response = await this.users.get('/user/leaders')
            return response.data.data
        } catch (error) {

        }
    }

}

export default userAPI