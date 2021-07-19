import {Redirect} from 'react-router-dom';

const ProtectedRoute = (props) => {
    const isAuthenticated = localStorage.getItem('token');
    const Component = props.component;
    return isAuthenticated ? (<Component/>) : (<Redirect to = {{pathname : '/'}}/>)
}

export default ProtectedRoute;