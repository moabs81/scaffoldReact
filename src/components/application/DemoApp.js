import React, { Component } from 'react';

import './styles/DemoApp.less';

class TableRows extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.category}</td>
                <td>{this.props.price}</td>
                <td>{this.props.name}</td>
            </tr>
        );
    }
};

class DemoApp extends Component {
    render() {
        console.log(this.props);
        /*const rows = [];
        this.props.products.forEach(element => {
            rows.push(<TableRows category={element.category} price={element.price} name={element.name} />);
        });
        return (
            <div className="tableContainer">
                <table >
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );*/
    }
};

export default DemoApp;