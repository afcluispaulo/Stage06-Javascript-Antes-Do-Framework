export class Router {
    router = {} 

    add(routeName, page) {
        this.routes[routeName] = page
    }
}