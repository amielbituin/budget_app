import React, { Component } from 'react';
class navBar extends Component {
    state = { 
        pages: [
            {id: 1, name: 'Home'},
            {id: 2, name: 'Goals'},
            {id: 3, name: 'Current Month'},
            {id: 4, name: 'Metrics'},
        ]
     } 
    render() { 
        return (
            <div className='col-2 border text-bg-primary' >
                <nav>
                    <ul>
                        {this.state.pages.map(pages => <li key={pages.id}>{pages.name}</li>)}
                    </ul>
                </nav>
            </div>
        );
    }
}
 
export default navBar;