import axios from 'axios'

const baseURL = process.env.BASE_URL || 'http://206.189.255.152/api'

const instance = axios.create({
  baseURL: baseURL
});

export default instance;