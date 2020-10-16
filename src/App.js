import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Switch>
                    <Route path='/' render={props => <h1>Root</h1>}/>
                    <Route path='/login' render={props => <h1>Login</h1>}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

const mapStateToProps = state => ({
    ...state.auth,
    ...state.chat
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
