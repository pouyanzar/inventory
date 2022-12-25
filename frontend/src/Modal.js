import React from "react";
import PropTypes from "prop-types";

const countryList = require("country-list");
let countryName = countryList.getNames();

class Modal extends React.Component {
  warehouseName = React.createRef();
  street = React.createRef();
  city = React.createRef();
  country = React.createRef();
  postalCode = React.createRef();
  managerName = React.createRef();
  phone = React.createRef();
  email = React.createRef();
  inventoryType = React.createRef();

  handleClose = (e) => {
    this.props.handleClose();
  };

  idMaker = (e) => {
    this.props.idMaker();
  };

  fetchRequest = (e) => {
    this.props.fetchRequest();
  };

  submitHandler = (e) => {
    let warehouseName,
      street,
      city,
      country,
      postalCode,
      managerName,
      phone,
      email,
      inventoryType;

    e.preventDefault();
    this.warehouseName.current.value.length === 0
      ? alert("Enter warehouse name!")
      : (warehouseName = this.warehouseName.current.value);
    this.street.current.value.length === 0
      ? alert("Enter street name!")
      : (street = this.street.current.value);
    this.city.current.value.length === 0
      ? alert("Enter city name!")
      : (city = this.city.current.value);
    this.country.current.value.length === 0
      ? alert("Select a country!")
      : (country = this.country.current.value);
    this.postalCode.current.value.length === 0
      ? alert("Enter postal code!")
      : (postalCode = this.postalCode.current.value);
    this.managerName.current.value.length === 0
      ? alert("Enter mananger's name")
      : (managerName = this.managerName.current.value);
    this.phone.current.value.length === 0
      ? alert("Enter phone number!")
      : (phone = this.phone.current.value);
    this.email.current.value.length === 0
      ? alert("Enter email address!")
      : (email = this.email.current.value);
    this.inventoryType.current.value.length === 0
      ? alert("Enter inventory type!")
      : (inventoryType = this.inventoryType.current.value);
    const id = this.props.idMaker;

    const body = {
      warehouseName: warehouseName,
      address_street: street,
      city: city,
      country: country,
      postal_code: postalCode,
      manager_name: managerName,
      phone_num: phone,
      email: email,
      type: inventoryType,
      warehouse_id: id,
    };
    const baseUrl = "https://inv-backend6858.herokuapp.com/";

    fetch(`${baseUrl}/warehouses/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    this.props.handleClose();
  };
  render() {
    return (
      <div style={{ ...flex, display: this.props.isOpen ? "flex" : "none" }}>
        <div
          className="modal-layer"
          onClick={this.props.handleClose}
          style={modalLayer}
        >
          <img src="/Assets/Icons/Close.svg" alt="close" />
        </div>
        <div className="form-container" style={formModal}>
          <h1>Add a new storage location</h1>
          <form className="formModal" onSubmit={this.submitHandler}>
            <label className="formModal__label">
              Warehouse Name
              <input
                className="formModal__field"
                type="text"
                name="warehouseNameInput"
                ref={this.warehouseName}
              />
            </label>
            <div className="formModal__wrapper">
              <div className="formModal__address">
                Address
                <label className="formModal__label">
                  Street Number & name
                  <input
                    className="formModal__field"
                    type="text"
                    name="streetInput"
                    ref={this.street}
                  />
                </label>
                <label className="formModal__label">
                  City
                  <input
                    className="formModal__field"
                    type="text"
                    name="cityInput"
                    ref={this.city}
                  />
                </label>
                <label className="formModal__label">
                  Country
                  <select
                    className="formModal__field"
                    name="country"
                    ref={this.country}
                  >
                    {countryName.map((country, i) => {
                      return <option key={i}>{country}</option>;
                    })}
                  </select>
                </label>
                <label className="formModal__label">
                  Postal Code
                  <input
                    className="formModal__field"
                    type="text"
                    name="postalCodeInput"
                    ref={this.postalCode}
                  />
                </label>
              </div>
              <div className="formModal__contactInfo">
                Contact Information
                <label className="formModal__label">
                  Warehouse Manager's Name
                  <input
                    className="formModal__field"
                    type="text"
                    name="managerNameInput"
                    ref={this.managerName}
                  />
                </label>
                <label className="formModal__label">
                  Phone Number
                  <input
                    className="formModal__field"
                    type="text"
                    name="PhoneInput"
                    ref={this.phone}
                  />
                </label>
                <label className="formModal__label">
                  Email Address
                  <input
                    className="formModal__field"
                    type="text"
                    name="emailInput"
                    ref={this.email}
                  />
                </label>
                <label className="formModal__label">
                  Inventory type
                  <input
                    className="formModal__field"
                    type="text"
                    name="InventoryTypeInput"
                    ref={this.inventoryType}
                  />
                </label>
              </div>
            </div>
            <input
              className="formModal__button"
              type="submit"
              value="Save Location"
            />
          </form>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;

const flex = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  zIndex: 1,
  overflow: "hidden",
  backgroundColor: "rgba(57,57,57,0.6)",
  top: "0",
  left: "0",
};

const modalLayer = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  zIndex: 1,
  backgroundColor: "transparent",
  top: "0",
  left: "0",
};

const formModal = {
  position: "absolute",
  color: "rgb(57,57,57)",
  backgroundColor: "#FFFFFF",
  width: "600px",
  maxWidth: "100%",
  height: "600px",
  maxHeight: "100%",
  zIndex: 2,
  borderRadius: "3px",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
};
