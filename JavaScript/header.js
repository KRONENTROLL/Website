// noinspection JSUnusedGlobalSymbols
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="header">
                <a href="https://kronentroll.de"><img src="../pictures/logo.png" alt="Logo" class="logo-small"></a>
                <h1>KRONENTROLLs Website</h1>
                <nav class="header-links">
                    <a href="https://kronentroll.de">Startseite</a>
                    <a href="https://kronentroll.de/zahlencheck">Zahlencheck</a>
                    <a href="https://kronentroll.de/ueber-mich">Über mich</a>
                    <a href="https://kronentroll.de/kontakt">Kontakt</a>
                </nav>
            </header>
        `;
    }
}
customElements.define('my-header', MyHeader);