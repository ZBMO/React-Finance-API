import React, { Compoment } from 'react';
import 'react-table/react-table.css';
import ReactTable from 'react-table';




class News_Report extends React.Component{
    
    render() {   
        console.log(this.props.news);
        const columns=[
            {
            Header: this.props.company + " News",
            columns: [
                {
                Header: 'Date',
                accessor: 'date', 
                }, 
                {
                Header: 'Headline',
                accessor: 'headline',
                }, 
                {
                Header: 'Source',
                accessor: 'source'
                }, 
            ] 
        }];

        const data = this.props.news.map(obj => {
            const { datetime, headline, source, url } = obj
            return(
                {
                date: datetime.slice(0, 10),
                headline: <p><a href={url}>{headline}</a></p>,
                source: source,
                }
            ) 
        })

        return( 
        <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={this.props.news.length}
        />)
    }
}
export default News_Report;