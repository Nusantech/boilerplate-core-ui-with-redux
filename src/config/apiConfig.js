const BASE_URL = {
  production: 'http://localhost:8000',
  staging: 'http://localhost:8000',
  development: 'http://localhost:8000',
}

const ENV = process.env.REACT_APP_BUILD_ENV || 'development'

export const API_URL = `${BASE_URL[ENV]}/v1`
export const API_FILE = BASE_URL[ENV]
