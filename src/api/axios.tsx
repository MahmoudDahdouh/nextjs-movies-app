import axios from 'axios'

const accessToken = process.env.NEXT_PUBLIC_API_TOKEN

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${accessToken}`,
  },
})
export default instance
