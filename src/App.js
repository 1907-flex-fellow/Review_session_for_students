import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux'

import Nav from './Nav';
import Note from './Note';
import { fetchNotes } from './store/actions';

class App extends Component{
    constructor(){
        super()
        this.state = {

        }
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
                    <Route exact path='/notes' component={Note} />
                </Switch>
            </HashRouter>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchNotes: () => dispatch(fetchNotes())
    }
}

export default connect(null, mapDispatchToProps)(App);