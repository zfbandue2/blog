import index from "@pages/index/index"
import detail from "@pages/detail/detail"
import about from "@pages/about/about"
import notFount from "@pages/notFount/notFount"
export default [{
    path: "/",
    component: index
}, {
    path: "/detail",
    component: detail
}, {
    path: "/about",
    component: about
}, {
    path: "/notFount",
    component: notFount
}];