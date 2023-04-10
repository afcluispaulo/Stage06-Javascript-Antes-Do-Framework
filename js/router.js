export class Router {
    router = {} 

    add(routeName, page) {
        this.routes[routeName] = page
    }

     route(event) {
        event = event || window.event
        event.preventDefault()

        window.history.pushState({}, "", event.target.href)

        this.handle
     }
}