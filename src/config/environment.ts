import env from "env-var"

export const DATABASE_URL = env.get("DATABASE_URL").required().asString()

export const ADMINJS_COOKIE_PASS = env.get("ADMINJS_COOKIE_PASS").required().asString()

export const JWT_KEY = env.get("JWT_KEY").required().asString()

export const EMAIL_USER = env.get("EMAIL_USER").required().asString()

export const EMAIL_PASS = env.get("EMAIL_PASS").required().asString()