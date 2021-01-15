import {Route, Switch} from 'react-router-dom';
import Login from './Login';
import Homepage from "./Homepage";
import Register from './Register';
import './App.css';

function App() {
    return ( 
        <div className = "App" >
            <Switch>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/" component={Homepage}/>
            </Switch> 
        </div>
    );
}

export default App;