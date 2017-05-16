import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';

import './App.css';
import Menu from './Menu';

class App extends Component {
    componentWillMount() {
        //this.restoreFetch = fakeRestServer();
    }

    componentWillUnmount() {
        this.restoreFetch();
    }

    render() {
        return (
            <Admin
                title="unRAID Server"
                menu={Menu}
            >
            </Admin>
        );
    }
}

export default App;
