import React, {useEffect} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import Login from './components/Login';
import Homepage from "./components/Homepage";
import Register from './components/Register';
import ProtectedRoute from './hoc/ProtectedRoute';
import './App.css';

function App() {
    const history = useHistory();
    useEffect(() => {
        return history.listen((location) => { 
            console.log(`You changed the page to: ${location.pathname}`);
            if(location.pathname !== '/') {
                localStorage.clear();
            }
        }) 
     },[history])
    
    return ( 
        <div className = "App" >
            <Switch>
                <Route path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <ProtectedRoute exact path="/" component={Homepage}/>
            </Switch> 
        </div>
    );
}

export default App;