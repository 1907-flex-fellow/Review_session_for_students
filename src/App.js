import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { action } from './store';
import { connect } from 'react-redux';

import Nav from './Nav';
import Note from './Note';

class App extends Component{
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        this.props.fetchNotes();
    }

    render(){
        return(
            // <div>Starting My App</div>
            <HashRouter>
                <Route component={Nav}/>
                <Switch>
                    <Route exact path='/notes' component={Note}/>
                </Switch>
            </HashRouter>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotes: () => dispatch(action.fetchNotes())
    }
}

export default connect(null, mapDispatchToProps)(App);