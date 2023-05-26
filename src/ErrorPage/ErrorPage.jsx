import { useRouteError } from "react-router-dom";
import { FaSadCry } from 'react-icons/fa';
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="text-center">

            <h1>Oops!<FaSadCry className="fa-md"></FaSadCry></h1>
            <h1>404 <small>Error</small></h1>
            <i> <p>Sorry, an unexpected error has occurred.</p>
                <p>Page not found!</p></i>

            <img style={{ width: 150 }} src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/45668/slightly-smiling-face-emoji-clipart-sm.png" alt="" />

        </div>
    );
}