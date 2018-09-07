import React, { Compoment } from 'react';
import 'react-table/react-table.css';

class Company_Report extends React.Component {


    render() {
    const { symbol, companyName, industry, CEO, sector, } = this.props.data
    
            return(
                <div>
                <h4 id="companystyle">{companyName} Info</h4>
                
                <table>
                <tbody>
                    <tr>
                        <th>Symbol</th>
                        <th>Company Name</th>
                        <th>CEO</th>
                        <th>Sector</th>
                        <th>Industry</th>
                    </tr>
                    <tr id="coRow">
                        <td>{symbol}</td>
                        <td>{companyName}</td>
                        <td>{CEO}</td>
                        <td>{sector}</td>
                        <td>{industry}</td>
                    </tr>
                </tbody>
                </table>
                </div>  
            );
        }
}

export default Company_Report;