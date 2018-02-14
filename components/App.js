import React, { Component } from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'

class App extends Component {
    
    render() {
        return (
            <div style={{margin: -10}}>
                <Header />
                <div style={{display: 'flex'}} >
                    <Sidebar />
                    <Content />
                </div>
            </div>
        );
    }
}

export default App;