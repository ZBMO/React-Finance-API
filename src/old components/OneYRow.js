import React, { Compoment } from 'react';


class OneYRow extends React.Component {

    render() {
    const { data } = this.props
        return(
            data.map(day => {
                const { label, open, close, volume, high, low, changePercent } = day
                return(
                <tr>
                    <td>{label}</td>
                    <td>{open.toFixed(3)}</td>
                    <td>{close.toFixed(3)}</td>
                    <td>{((high + low)/2).toFixed(3)}</td>
                    <td>{volume}</td>
                    <td>{high.toFixed(3)}</td>
                    <td>{low.toFixed(3)}</td>
                    <td>{changePercent.toFixed(3)}%</td>
                </tr>
                )
            })

        ) 
    }
}

export default OneYRow;