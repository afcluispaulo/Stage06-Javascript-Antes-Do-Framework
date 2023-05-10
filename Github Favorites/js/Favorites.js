import { GithubUser } from "./GithubUser.js"

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)

    }
}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)
        this.tbody = this.root.querySelector('table tbody')
        this.onadd()
    }

    onadd() {
        const addButton = this.root.querySelector('.input-wrapper button')
        addButton.onclick = () => {
            const { value } = this.root.querySelector('.input-wrapper input')

            this.add(value)
        }
    }

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow()
            
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`

            row.querySelector('.user img').alt = `Imagem de ${user.name}`

            row.querySelector('.user a').href = `https://github.com/${user.login}`

            row.querySelector('.user p').textContent = user.name

            row.querySelector('.user span').textContent = user.login 

            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar essa linha?')
                if ( isOk ) {
                    this.delete(user)
                }

            }

            this.tbody.append(row)
        })

        
    }


    createRow() { 

        const tr = document.createElement('tr')

        tr.innerHTML = `
        <tr>
            <td class="user">
                <img src="https://github.com/maykbrito.png" alt="Imagem de maykbrito">
                <a href="https://github.com/maykbrito" target="_blank">
                <p>Mayk Brito</p>
                <span>maykbrito</span>
                </a>
            </td>
            <td class="repositories">
                76
            </td>
            <td class="followers">
            9589  
            </td>
            <td>
                <button class="remove">&times;</button>
            </td>
        </tr>
        `

        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr')
        .forEach((tr) => {
           tr.remove()
        })
    }
}