import React, { Component } from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';

class OneYear_Report extends React.Component{

    
    render() {   
        
        function forPercent(val) {
            if (val > 0)
                { return "green";
            } else
                { return "red";
            }
        }


        const columns=[
            {
            Header: this.props.company + " One Year Report (in Millions, USD)",
            columns: [
                {
                Header: 'Date',
                accessor: 'label', 
                }, 
                {
                Header: 'Open',
                accessor: 'open',
                }, 
                {
                Header: 'Close',
                accessor: 'close'
                }, 
                {
                Header: 'Average',
                accessor: 'average',
                }, 
                {
                Header: 'Volume',
                accessor: 'volume',
                },
                {
                Header: 'High',
                accessor: 'high',
                },
                {
                Header: 'Low',
                accessor: 'low',
                }, 
                {
                Header: 'Change',
                accessor: 'changePercent',
                },  
            ] 
        }];

        const data = this.props.data.map(day => {
            const { label, open, close, volume, high, low, changePercent } = day
            return(
                {
                label: label,
                open: "$"+ open.toFixed(2),
                close: "$"+ close.toFixed(2),
                average: "$"+ ((high+low)/2).toFixed(2),
                volume: volume,
                high: "$"+ high.toFixed(2),
                low: "$"+ low.toFixed(2),
                changePercent:<span className={forPercent(changePercent)}>{changePercent}</span>,
                }
            ) 
        })

        return( 
        <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={20}
        />)
    }
}

export default OneYear_Report;


