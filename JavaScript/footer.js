// noinspection JSUnusedGlobalSymbols
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <a href="https://kronentroll.de"><img src="../pictures/logo.png" alt="Logo" class="logo-smaller"></a>
                <nav class="footer-links">
                    <a href="https://kronentroll.de">Startseite</a>
                    <a href="https://kronentroll.de/ueber-mich">Über mich</a>
                    <a href="https://kronentroll.de/kontakt">Kontakt</a>
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&copy 2026 KRONENTROLL
                </nav>  
            </footer>
        `;
    }
}
customElements.define('my-footer', MyFooter);