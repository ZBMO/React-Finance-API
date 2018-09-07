import React, { Compoment } from 'react';
import FinancialsRow from './FinancialsRow'

class Financials extends React.Component {
    render() {
    const { data } = this.props;
    const { symbol } = data;
 
 
        return(
            <div>
            <h4>{symbol} Financials: (USD)</h4>
            <table>
            <tbody>
                <tr>
                    <th>Report Date</th>
                    <th>Current Assets</th>
                    <th>Current Cash</th>
                    <th>Current Debt</th>
                    <th>Total Revenue</th>
                    <th>Debt/Asset Ratio</th>
                </tr>

                <FinancialsRow
                data={data}
                />

            </tbody>
            </table>


            <div className="rights">“Data provided for free by IEX. View IEX’s Terms of Use.”</div>
            </div>  


        );


}
}

export default Financials;