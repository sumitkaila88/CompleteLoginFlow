import { Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const ProtectedRoute = props => {
    
    const Component = props.component;
    const Token = localStorage.getItem('Token') || false;
    const isAuthenticated = Token || false;
    const isTokenExpired = Token ? jwt_decode(Token).exp < (Date.now() / 1000) : true;
    
    return isAuthenticated && !isTokenExpired ? (<Component />) : <Redirect to="/login"/>

}

export default ProtectedRoute;