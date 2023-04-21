export default function Controls({
    bodyTheme,
    homeMenu,
    theUniverseMenu,
    theExplorerMenu,

}) {
    function clickHome() {
        bodyTheme.classList.add("homeTheme")

        homeMenu.classList.add("navClick")

        theUniverseMenu.classList.remove("navClick")
        theExplorerMenu.classList.remove("navClick")
    }

    function clickTheUniverse() {
        bodyTheme.classList.remove("homeTheme")
        bodyTheme.classList.add("theUniverseTheme")
        theUniverseMenu.classList.add("navClick")

        homeMenu.classList.remove("navClick")
        theExplorerMenu.classList.remove("navClick")
    }

    function clickExplorer() {
        bodyTheme.classList.remove("theUniverseTheme")
        bodyTheme.classList.add("explorerTheme")
        theExplorerMenu.classList.add("navClick")

        homeMenu.classList.remove("navClick")
        theUniverseMenu.classList.remove("navClick")
    }

    return {
        clickHome,
        clickTheUniverse,
        clickExplorer,
    }
}

