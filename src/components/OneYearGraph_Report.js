import React, { Component } from 'react';
import {LineChart} from 'react-easy-chart';

class OneYearGraph_Report extends React.Component{




    render () {
        const {data} = this.props


         console.log(data);
         console.log(this.props.graphBool)
         const fixed = [data.map(day => {
            const {date, close} = day
            return(
                {
                x: date,
                y: close,
                }
            )
         })]
         
        return( 
            <div>
            <h4 id="companystyle">{this.props.company} 1y Graph</h4>
            
              <LineChart
              axes
              lineColors={['#6b8ef5']}
              xType={'text'}
              xTicks={3}
              yTicks={5}
             
              axisLabels={ {x: 'My x Axis', y: 'My y Axis'}}
              width={750}
              interpolate={'cardinal'}
              height={500}
                data={fixed}
            />
            </div>)
    }
}


export default OneYearGraph_Report;