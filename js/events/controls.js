export default function Controls({
    homeMenu,
    theUniverseMenu,
    theExplorerMenu,

}) {
    function clickHome() {
        homeMenu.classList.add("navClick")

        theUniverseMenu.classList.remove("navClick")
        theExplorerMenu.classList.remove("navClick")
    }

    function clickTheUniverse() {
        theUniverseMenu.classList.add("navClick")

        homeMenu.classList.remove("navClick")
        theExplorerMenu.classList.remove("navClick")
    }

    function clickExplorer() {
        theExplorerMenu.classList.add("navClick")

        homeMenu.classList.remove("navClick")
        theUniverseMenu.classList.remove("navClick")
    }
}

