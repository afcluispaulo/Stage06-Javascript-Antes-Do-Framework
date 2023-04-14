import { Router } from './router.js'
const btnHome = document.getElementById("home")
const homeMenu = document.querySelector(".homeMenu")

const btnTheUnverse = document.getElementById("theuniverse")
const theUniverseMenu = document.querySelector(".theUniverseMenu")

const btnTheExplorer = document.getElementById("theexplorer")
const theExplorerMenu = document.querySelector(".theExplorerMenu")

btnHome.addEventListener('click', function() {
    homeMenu.classList.add("navClick")

    theUniverseMenu.classList.remove("navClick")
    theExplorerMenu.classList.remove("navClick")
})

btnTheUnverse.addEventListener('click', function() {
    theUniverseMenu.classList.add("navClick")

    homeMenu.classList.remove("navClick")
    theExplorerMenu.classList.remove("navClick")
})

btnTheExplorer.addEventListener('click', function() {
    theExplorerMenu.classList.add("navClick")

    homeMenu.classList.remove("navClick")
    theUniverseMenu.classList.remove("navClick")
})
const router = new Router()
router.add('/', "pages/home.html")
router.add("/theuniverse", "/pages/theuniverse.html")
router.add("/explorer", "/pages/explorer.html")
router.add(404, "/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()