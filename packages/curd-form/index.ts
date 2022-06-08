import CurdForm from "./src/index"
import { withInstall } from "@vue-curd/utils"

const instance = withInstall(CurdForm)

export default instance
export * from "./src/types"
