import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import Nav from './Nav';

class App extends Component{
    constructor(){
        super()
        this.state = {}
    }

    render(){
        return(
            // <div>Starting My App</div>
            <HashRouter>
                <Route component={Nav}/>
            </HashRouter>
        )
    }

}

export default App;