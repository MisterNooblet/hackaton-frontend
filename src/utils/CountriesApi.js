import axios from "axios"

const CountriesApi = {
    countries: axios.create({
        baseURL: 'https://weary-pear-beaver.cyclic.app/api/v1/countries'
    }),

    async fetchCountries() {
        const result = await this.countries.get('/')
        return result.data
    },
    async fetchCountry(country) {
        const result = await this.countries.get(`/${country}`)
        return result.data
    }
}

export default CountriesApi