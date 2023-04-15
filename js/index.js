import { Router } from './router.js'
import {
    btnHome,
    homeMenu,

    btnTheUnverse,
    theUniverseMenu,
    
    btnTheExplorer,
    theExplorerMenu
} from "./events/elements.js"


const router = new Router()
router.add('/', "pages/home.html")
router.add("/theuniverse", "/pages/theuniverse.html")
router.add("/explorer", "/pages/explorer.html")
router.add(404, "/pages/404.html")

router.handle()


window.onpopstate = () => router.handle()
window.route = () => router.route()