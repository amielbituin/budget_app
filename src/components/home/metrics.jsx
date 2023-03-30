import React, { Component } from 'react';
import {PieChart,Pie} from 'recharts'
class metrics extends Component {
    state = { 

     } 
    render() { 
        return (
            <div className='container bg-primary'>
                <div className='row'>
                    <PieChart width={730} height={250}>
                        <Pie data={this.props.data} dataKey="amount" nameKey="category" cx="25%" cy="50%" outerRadius={100} fill="#8884d8" label />
                    </PieChart>
                </div>
            </div>
        );
    }
}
 
export default metrics;