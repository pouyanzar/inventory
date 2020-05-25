import React from 'react';

export default class WarehouseChild extends React.Component {

    render() {
        return (
        <div className="warehouseBox">
            <h3 className="warehouseBox__upper">
            {'Warehouse Number '}
            {this.props.wareId}
            </h3>
            <div className="warehouseBox__lower">
                <div className="warehouseBox__lower--leftContainer">
                    <h4 className="warehouseBox__lower--header">ADDRESS</h4>

                    <div>
                        {this.props.wareAddress}
                    </div>
                    <div>
                        {this.props.wareCity} {', '} {this.props.wareCountry}
                    </div>
                    <div>
                        {this.props.warePostalCode}
                    </div>
                    
                </div>
                <div className="warehouseBox__lower--centralContainer">
                    <h4 className="warehouseBox__lower--header">CONTACT</h4>

                    <div>
                    {this.props.wareManager}{', Warehouse Manager'}
                    </div>
                    <div> {this.props.warePhone} </div>
                    <div> {this.props.wareMail} </div>
                    
                </div>
                <div className="warehouseBox__lower--rightContainer">
                    <h4 className="warehouseBox__lower--header">INVENTORY TYPE:</h4>

                    <div>
                    {this.props.wareType}
                    </div>

                </div>
            </div>
        </div>
        )
    }
}