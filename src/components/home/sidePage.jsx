import React, { Component } from 'react';
import GoalSection from './goalSection';
import Metrics from './metrics';
class sidePage extends Component {
    state = {  } 
    render() { 
        return (
            <div className='col-4 border '>
                <GoalSection/>
                <Metrics
                    data={this.props.data}
                    dataHeader={this.props.dataHeader}
                />
            </div>
        );
    }
}
 
export default sidePage;