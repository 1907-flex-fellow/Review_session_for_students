import React, { Component } from 'react';
<<<<<<< HEAD
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import Nav from './Nav';
import Note from './Note';
import { fetchNotes } from './store/actions';
=======
import { HashRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { action } from './store';
import { connect } from 'react-redux';

import Nav from './Nav';
import Note from './Note';
>>>>>>> origin/master

class App extends Component{
    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        this.props.fetchNotes();
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
<<<<<<< HEAD
                    <Route exact path='/notes' component={Note} />
=======
                    <Route exact path='/notes' component={Note}/>
>>>>>>> origin/master
                </Switch>
            </HashRouter>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
<<<<<<< HEAD
        fetchNotes: () => dispatch(fetchNotes())
=======
        fetchNotes: () => dispatch(action.fetchNotes())
>>>>>>> origin/master
    }
}

export default connect(null, mapDispatchToProps)(App);