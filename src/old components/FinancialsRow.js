import React, { Compoment } from 'react';


class FinancialsRow extends React.Component {

    render() {

    const { financials } = this.props.data;
    
    return(
        financials.map(obj => {
            const { reportDate, currentAssets, currentCash, currentDebt, totalRevenue } = obj
            return(
            <tr>
                <td>{reportDate}</td>
                <td>${(currentAssets/1000000).toFixed(2)}M</td>
                <td>${(currentCash/1000000).toFixed(2)}M</td>
                <td>${(currentDebt/1000000).toFixed(2)}M</td>
                <td>${(totalRevenue/1000000).toFixed(2)}M</td>
                <td>{(currentDebt/currentAssets).toFixed(2)}</td>
            </tr>
            ) 
        })) 
    } 
} 


export default FinancialsRow;