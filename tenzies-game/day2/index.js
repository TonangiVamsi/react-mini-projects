import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

/*const nav=(
    <div>
        <h1>webiste</h1>
        <ul>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
        </ul>
    </div>
)*/

/*const root= ReactDOM.createRoot(document.getElementById('root'))
root.render(nav) */

/*
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(nav)

*/

/*const page = (
    <div>
        <img src="./R.png" width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(page) */

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
