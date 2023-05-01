import {Link} from "react-router-dom"

export default function Notfound() {
    return (
        <div className="unknow">
            <h1>404 not found</h1>
            <p>It seems the page your looking for does not exist, please enter the right page adress</p>
            <p>Go back to the <Link to="/">Homepage</Link></p>
        </div>
    )
}