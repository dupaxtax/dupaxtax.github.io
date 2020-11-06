class Header extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback() {
    this.innerHTML = `
        <style>
        nav{
            margin: 0em;
            padding: 0em;
            width: 100%;
            height: 5vh;
            display: inline-block;
        }

        li{
            list-style: none;
            display: inline-block;
            float: left;
            line-height: 5vh;
        }
        
        li a{
            text-decoration: none;
            padding: 1em;
            color: #3e8eec;
        }
        </style>
        <header>
            <nav>
                <li><a href="index.html">Home</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="#">About Me</a></li>
            </nav>
        </header>
        `;
    }   
}

customElements.define('header-component', Header);