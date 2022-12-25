import React from "react";
import { Link } from "react-router-dom";

export default class ProductDetail extends React.Component {
  // Monitor State
  state = {
    inventoryObject: {},
  };

  componentDidMount(prevProps, prevState) {
    const targetId = this.props.productId;
    let baseURL = "https://inv-backend6858.herokuapp.com/";
    let prodData = "/inventory";

    fetch(baseURL + prodData + "/" + targetId)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        this.setState({
          inventoryObject: data,
        });
      })
      .catch((err) => {
        console.error("You've encountered an error with the fetch: ", err);
      });
  }

  render() {
    let prodObj = this.state.inventoryObject;
    // console.log(prodObj);

    return (
      <div className="productDetail">
        <div className="invRecordsNav">
          <div className="backLink">
            <Link to={"/inventory"}>
              <img src="../Assets/Icons/Back Arrow.svg" alt="back arrow" />
              Back to All Inventory
            </Link>
          </div>
        </div>
        <div className="invRecords">
          <div className="invRecordsBox">
            <div className="invRecordsBox__names">
              <div className="name">{prodObj.name}</div>
              <div className="buttonBox">
                <span>New Order</span>
              </div>
            </div>
            <div className="invRecordsBox__items">
              <span>DESCRIPTION:</span> {prodObj.description}
            </div>
            <div className="invRecordsBox__items">
              <span>LAST ORDERED:</span> {prodObj.last_ordered}
            </div>
            <div className="invRecordsBox__items">
              <span>ORDERED BY:</span> {prodObj.ordered_by}
            </div>
            <div className="invRecordsBox__items">
              <span>REFERENCE NUMBER:</span> {prodObj.refNum}
            </div>
            <div className="invRecordsBox__items">
              <span>PRODUCT CATEGORY:</span> {prodObj.category}
            </div>
            <div className="invRecordsBox__items">
              <span>QUANTITY:</span> {prodObj.quantity}
            </div>
            <div className="invRecordsBox__items">
              <span>LOCATION:</span> {prodObj.location}
            </div>
            <div className="invRecordsBox__items">
              <span>STATUS:</span> {prodObj.status}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
