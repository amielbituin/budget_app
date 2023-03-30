import React, { Component } from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis,Tooltip,Legend,Bar } from 'recharts';
import IncomeStatement from './incomeStatement';
class primaryPage extends Component {
    state = { 
        charts: [
            {
                month:"December",
                expense:9094.12,
                income:16478.64
            },
            {
                month:"January",
                expense:2561.00,
                income:10208.00
            },
            {
                month:"February",
                expense:2752,
                income:10078.00
            },
            {
                month:"March",
                expense:1805.00,
                income:12377.00
            }
        ],
        
     } 
    render() { 
        return (
            <div className='col-8 border '>
                <div className='container'>
                    <div className='row' style={{paddingTop: 20}}>
                        <h4>Progress Chart:</h4>
                        <BarChart width={750} height={250} data={this.state.charts}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="income" fill="#82ca9d" />
                            <Bar dataKey="expense" fill="#8884d8" />
                        </BarChart>
                    </div>
                    <div className='row mt-2 mb-2'>
                        <div className='col'>
                            Income: {this.state.charts[0].income}
                        </div>                        
                        <div className='col'>
                            Expense: {this.state.charts[0].expense}
                        </div>                        
                        <div className='col'>
                            Saved: {(this.state.charts[0].income - this.state.charts[0].expense).toFixed(2)}
                        </div>
                    </div>
                    <div className = 'row border pt-2 ps-2 mt-2'>
                        Recent History    
                    </div>
                    <div className = 'row'>
                        <IncomeStatement
                            data={this.props.data}
                            dataHeader={this.props.dataHeader}
                        />
                    </div>
                    <div className = 'row justify-content-end'>
                        <div className = 'col-3 position-relative'>
                            <button className='position-absolute end-0 btn btn-primary mt-2'> Add New Items</button>
                        </div>    
                    </div>
                </div>
            </div>
        );
    }
}
 
export default primaryPage;