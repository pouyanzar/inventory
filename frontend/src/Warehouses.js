import React from "react";
import WarehouseChild from "./WarehouseChild";
import { Link } from "react-router-dom";
import Modal from "./Modal";
const baseUrl = "https://inv-backend6858.herokuapp.com";
const warehousesPath = "/warehouses";

export default class Warehouses extends React.Component {
  constructor() {
    super();

    this.state = {
      warehouses: [],
      isOpen: false,
    };

    this.handleClose = this.handleClose.bind(this);
    this.idMaker = this.idMaker.bind(this);
    this.fetchRequest = this.fetchRequest.bind(this);
  }

  handleClose = (e) => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  idMaker = (e) => {
    return this.state.warehouses.length + 1;
  };

  fetchRequest = (e) => {
    fetch(baseUrl + warehousesPath)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return this.setState({ warehouses: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount(prevProps, prevState) {
    this.fetchRequest();
    this.idMaker();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.warehouses !== this.state.warehouses) {
      this.fetchRequest();
    }
  }

  render() {
    let warehouseList = this.state.warehouses;

    return (
      <div className="warehouses">
        <div className="warehouses__header">
          <h3 className="warehouses__header--upperLeft">Locations</h3>
          <div className="warehouses__header--lowerRight">Filter</div>
        </div>
        <div className="warehouses__grid">
          {warehouseList.map((warehouses, index) => {
            return (
              <Link key={index} to={`/warehouses/${warehouses.warehouse_id}`}>
                <WarehouseChild
                  wareState={this.state.warehouses}
                  key={index}
                  wareId={warehouses.warehouse_id}
                  wareCity={warehouses.city}
                  wareCountry={warehouses.country}
                  wareAddress={warehouses.address_street}
                  warePostalCode={warehouses.postal_code}
                  wareManager={warehouses.manager_name}
                  warePhone={warehouses.phone_num}
                  wareType={warehouses.type}
                  wareMail={warehouses.email}
                />
              </Link>
            );
          })}
        </div>

        <Modal
          handleClose={this.handleClose}
          isOpen={this.state.isOpen}
          idMaker={this.idMaker()}
          // warehouse_id = {this.id}
          fetchRequest={this.fetchRequest}
        />

        <div className="warehouses__addButton">
          <img
            src="/Assets/Icons/add.svg"
            alt="Add button"
            onClick={this.handleClose}
          />
        </div>
      </div>
    );
  }
}
