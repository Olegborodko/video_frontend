import React, {Component} from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import P404 from './pages/P404';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
			 <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login/" component={Login} />
        <Route path="/signup/" component={Signup} />
        <Route component={P404} />
    	</Switch>
    	</BrowserRouter>
		)
	}
}

export default App