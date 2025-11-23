import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="app-shell" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="button" style={{ marginTop: '1rem', display: 'inline-block' }}>
                Return to Dashboard
            </Link>
        </div>
    );
}

export default NotFound;
