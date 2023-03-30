import React, { Component } from 'react';

class goalSection extends Component {
    state = { 
        goals:[
            {id:1, goal:'Save for car', goalAmount:20000, currentAmount: 520},
            {id:2, goal:'Monthly Investment', goalAmount:1000, currentAmount: 300},
            {id:3, goal:'Emergeny Fund', goalAmount:6000, currentAmount: 3500},
        ]
     } 
    render() { 
        return (
            <div className='container'>
                <div className='row'>
                {this.state.goals.map(obj => 
                    <div>
                        <p className='fw-semibold'>{obj.goal}</p>
                        <p>Goal: {obj.goalAmount}, Current: {obj.currentAmount}</p>
                    </div>
                )}
                </div>
            </div>
        );
    }
}
 
export default goalSection;