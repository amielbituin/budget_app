import React, { Component } from 'react';
import PrimaryPage from './primaryPage';
import SidePage from './sidePage';
class homePage extends Component {
    state = { 
        dataHeader:{h1:'ID', h2:'Category',h3:'Item',h4:'Amount',h5:'Notes'},
        data:[
            {
                id: 1,
                category:'Restaurants',
                item:'Ramen',
                amount:10.51,
                notes:'n/a'
            },
            {
                id: 2,
                category:'Travel',
                item:'Luggage',
                amount:30.00,
                notes:'n/a'
            },
            {
                id: 1,
                category:'Coffee',
                item:'Coffee',
                amount:5.45,
                notes:'n/a'
            },
            {
                id: 1,
                category:'Gas',
                item:'Gas',
                amount:57.24,
                notes:'n/a'
            },
            {
                id: 1,
                category:'Groceries',
                item:'Food from Costco',
                amount:124.20,
                notes:'n/a'
            },
            {
                id: 1,
                category:'Groceries',
                item:'Food from Big Save',
                amount:20.00,
                notes:'n/a'
            }
        ]
     } 
    render() { 
        return (
            <div className = 'col-10 '>
                <div className='container m-0'>
                <div className='row'>
                    <PrimaryPage
                        data={this.state.data}
                        dataHeader={this.state.dataHeader}
                    />
                    <SidePage
                        data={this.state.data}
                        dataHeader={this.state.dataHeader}
                    />
                </div>
                </div>
                
            </div>
        );
    }
}
 
export default homePage;