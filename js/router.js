import Controls from "./events/controls.js"
import {
    btnHome,
    homeMenu,

    btnTheUnverse,
    theUniverseMenu,
    
    btnTheExplorer,
    theExplorerMenu
} from "./events/elements.js"

const controls = Controls({
    btnHome,
    homeMenu,

    btnTheUnverse,
    theUniverseMenu,
    
    btnTheExplorer,
    theExplorerMenu
})

export class Router {
    
    routes = {} 
    
    add(routeName, page) {
        this.routes[routeName] = page
    }

     route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle()
     }

     handle() {
        const homePage = this.routes["/"]
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        if (this.routes[pathname] == this.routes["/"]) {
            controls.clickHome()
        } else if (this.routes[pathname] == this.routes["/theuniverse"]) {
            controls.clickTheUniverse()
        } else {
            controls.clickExplorer()
        }

        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
        
     }
     
}

