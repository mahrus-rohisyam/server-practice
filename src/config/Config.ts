require('dotenv').config()

export const Config = {
  port: process.env.PORT || 1338,
  mongourl: process.env.DB_CONNECTION,
  origin: process.env.ORIGIN || 3001
}