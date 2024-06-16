/*ReactDOM.render(<h1>hello world</h1>,document.getElementById('root'));

const navtitle = () =>{
    return(
        <h1> Dragon Ball</h1>
    );
};

ReactDOM.render(
    navtitle(),
    document.getElementById('root')
)*/

/*const nav=(
    <div>
        <h1>webiste</h1>
        <ul>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
        </ul>
    </div>
)


ReactDOM.render(
nav , document.getElementById('root')
) */
import React from "react"
import ReactDOM from "react-dom"

function Page(){
    return(
        <div>
            <h1>Why I Liked To Learn React</h1>
            <ul>
                <li>job</li>
                <li>money</li>
                <li>work</li>
                <li>career development</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById('root')) 

