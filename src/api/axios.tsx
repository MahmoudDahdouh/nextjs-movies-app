import axios from 'axios'

const accessToken = process.env.API_TOKEN

const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${accessToken}`,
  },
})
export default instance
