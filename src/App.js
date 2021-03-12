import React from 'react';
import './grid.css';
import './App.css';
import { connect } from 'react-redux';

import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
const Home = React.lazy(() => import('./components/pages/Home'));
const ParkList = React.lazy(() => import('./components/pages/Home/ParkList'));

function App() { 
        return (
            <div className="App">
                <React.Suspense fallback={<span>Loading...</span>}>         
                        <Switch>                           
                            <Route exact path="/" component={Home}  />
                             <Route exact path="/parkList/:id" component={ParkList}  />                         
                        </Switch>                 
                </React.Suspense>
            </div>
        );
}
function mapStateToProps(state) {
    return {
        user: state.home.parkList
    };
}
function mapDispatchToProps(dispatch) {
    return {
        //s:(data)=>{dispatch(setLoginUser(data))}
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
