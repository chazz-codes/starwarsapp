import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Episode1 from './Episode1';
import Episode2 from './Episode2';
import Episode3 from './Episode3';
import Episode4 from './Episode4';
import Episode5 from './Episode5';
import Episode6 from './Episode6';
import Episode7 from './Episode7';
import Episode8 from './Episode8';
import Episode9 from './Episode9';
import Home from './Home';

class DynamicBody extends Component {
    // constructor(){
    //     super()
    //     this.state=({
    //         title: '',
    //         releaseDate: '',
    //         rating: '',
    //         plot: '',
    //         img: '',

    //     })
    // }


    // componentDidMount(){
    //     await fetch
    // }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component ={Home}/>
                    <Route path='/episode1' component ={Episode1}/>
                    <Route path='/episode2' component={Episode2}/>
                    <Route path='/episode3' component={Episode3}/>
                    <Route path='/episode4' component={Episode4}/>
                    <Route path='/episode5' component={Episode5}/>
                    <Route path='/episode6' component={Episode6}/>
                    <Route path='/episode7' component={Episode7}/>
                    <Route path='/episode8' component={Episode8}/>
                    <Route path='/episode9' component={Episode9}/>
                    
                </Switch>
                
            </div>
        );
    }
}

export default DynamicBody;