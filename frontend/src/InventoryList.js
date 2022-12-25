import React from "react";
import InventoryListChild from "./InventoryListChild";

/* setup const for baseUrl and inventory path */
const baseUrl = "https://inv-backend6858.herokuapp.com";
const inventoryListPath = "/inventory";

export default class InventoryList extends React.Component {
  // Monitor State
  state = {
    inventory: [],
  };

  // Fetch all inventory list once component mounts:
  componentDidMount() {
    const warehouseId = this.props.warehouseId;
    if (warehouseId) {
      fetch(`${baseUrl}/warehouses/${warehouseId}`)
        .then((response) => response.json())
        .then((data) => this.setState({ inventory: data }))
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch(baseUrl + inventoryListPath)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return this.setState({ inventory: data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  // Function that sends DELETE to the backend, and receives an updated inventory list in json, and then updates state
  delInvItemFunction = (currentId) => {
    const init = {
      method: "DELETE",
    };

    fetch(baseUrl + inventoryListPath + "/" + currentId, init)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return this.setState({ inventory: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let inventoryArray = this.state.inventory;

    return (
      <div className="inventoryList__container">
        <div className="inventoryList--heading-container">
          <div className="inventoryList--heading">
            <h1>Inventory</h1>
          </div>
          <div className="inventoryList--filter">
            <h2>Filter</h2>
          </div>
        </div>
        <div className="inventoryList--main-container">
          <div className="inventoryList__form--product-heading">
            <div className="inventoryList__form--product-heading-group">
              <div className="inventoryList__form--item">
                <h3>ITEM</h3>
              </div>
              <div className="inventoryList__form--lastOrdered">
                <h3>LAST ORDERED</h3>
              </div>
              <div className="inventoryList__form--location">
                <h3>LOCATION</h3>
              </div>
              <div className="inventoryList__form--quantity">
                <h3>QUANTITY</h3>
              </div>
              <div className="inventoryList__form--status">
                <h3>STATUS</h3>
              </div>
            </div>
            <div className="spaceBlock"></div>
          </div>
          {/* PRODUCT DETAILS RECEIVED AS PROPS FROM PARENT */}
          {inventoryArray.map((inventory, index) => {
            return (
              <InventoryListChild
                productId={inventory.id}
                inventoryState={this.state.inventory}
                key={index}
                className={index % 2 === 1 ? "white" : "grey"}
                productName={inventory.name}
                productWarehouseId={inventory.warehouse_id}
                productDesc={inventory.short_description}
                productLastOrdered={inventory.last_ordered}
                productOrderedBy={inventory["ordered by"]}
                productRefNum={inventory.refNum}
                productCategory={inventory.category}
                productQuantity={inventory.quantity}
                productLocation={inventory.location}
                productStatus={inventory.status}
                delInvItemFunction={this.delInvItemFunction}
                delInvItem={inventory.id}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
