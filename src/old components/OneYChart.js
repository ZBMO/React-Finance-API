import React, { Compoment } from 'react';
import OneYRow from './OneYRow'

class OneYChart extends React.Component {
    render() {
    const { data } = this.props;
    
 
        return(
            
            <div>
            <h4>{this.props.symbol} 1y Chart (USD)</h4>
            <table>
            <tbody>
                <tr>
                    <th>Date</th>
                    <th>Open</th>
                    <th>Close</th>
                    <th>Average</th>
                    <th>Volume</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Change</th>
                </tr>

                <OneYRow
                data={data}
                />

            </tbody>
            </table>


            <div className="rights">“Data provided for free by IEX. View IEX’s Terms of Use.”</div>
            </div>  


        );


}
}

export default OneYChart;