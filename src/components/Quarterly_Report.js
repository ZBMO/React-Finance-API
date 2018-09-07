import React, { Component } from 'react';

import ReactTable from 'react-table';
import 'react-table/react-table.css';



class Quarterly_Report extends React.Component{

    
    render() {   
        const columns=[
            {
            Header: this.props.company + " Quarterly Report (in Millions, USD)",
            columns: [
                {
                Header: 'Date',
                accessor: 'date', 
                }, 
                {
                Header: 'Current Assets',
                accessor: 'currentAssets',
                }, 
                {
                Header: 'Current Cash',
                accessor: 'currentCash'
                }, 
                {
                Header: 'Current Debt',
                accessor: 'currentDebt',
                }, 
                {
                Header: 'Total Revenue',
                accessor: 'totalRevenue',
                },
                {
                Header: 'Debt Ratio',
                accessor: 'debtRatio',
                }, 
            ] 
        }];

        const data = this.props.financials.map(obj => {
            const { reportDate, currentAssets, currentCash, currentDebt, totalRevenue } = obj
            return(
                {
                date: reportDate,
                currentAssets: "$"+(currentAssets/1000000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                currentCash: "$"+(currentCash/1000000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'), 
                currentDebt: "$"+(currentDebt/1000000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                totalRevenue: "$"+(totalRevenue/1000000).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'),
                debtRatio: (currentDebt/currentAssets).toFixed(3),
                }
            ) 
        })

        return( 
        <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={this.props.financials.length}
        />)
    }
}

export default Quarterly_Report;


