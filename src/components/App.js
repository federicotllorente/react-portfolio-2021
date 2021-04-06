import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Homepage from '../pages/Homepage';
import Portfolio from '../pages/Portfolio';
import ProjectDetails from '../pages/ProjectDetails';
import About from '../pages/About';
import Contact from '../pages/Contact';
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';
import '../styles/main.scss';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/portfolio/:projUrl" component={ProjectDetails} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/sign-in" component={SignIn} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;