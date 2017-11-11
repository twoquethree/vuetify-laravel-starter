import auth from "./auth/routes"
import errors from "./errors/routes"
import home from "./home/routes"

export default [...auth, ...errors, ...home]
