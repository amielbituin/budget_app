import React, { Component } from 'react';
class incomeStatement extends Component {
    state = {  
        
    } 
    render() { 
        return (
            <div className = 'container'>
                <div className='row border fw-semibold'>
                    <div className='col'>{this.props.dataHeader.h1}</div>
                    <div className='col'>{this.props.dataHeader.h2}</div>
                    <div className='col'>{this.props.dataHeader.h3}</div>
                    <div className='col'>{this.props.dataHeader.h4}</div>
                    <div className='col'>{this.props.dataHeader.h5}</div>
                </div>
                {this.props.data.map(obj => 
                    <div className='row border'> 
                        <div className='col'> {obj.id}</div>
                        <div className='col'> {obj.category}</div>
                        <div className='col'> {obj.item}</div>
                        <div className='col'> {obj.amount}</div>
                        <div className='col'> {obj.notes}</div>
                        
                    </div>
                )}
            </div>
        );
    }
}
 
export default incomeStatement;