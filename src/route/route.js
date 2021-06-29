import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About/about';
import Beranda from '../pages/home/beranda';
import Pokemon from '../pages/pokemon/pokemon';

export default function Router(){
        return (
            <Switch>
                <Route exact path='/' component={Beranda} />
                <Route path='/beranda' component={Beranda} />
                <Route path='/about' component={About} />
                <Route path='/pokemon' component={Pokemon} />
            </Switch>
        )
}
