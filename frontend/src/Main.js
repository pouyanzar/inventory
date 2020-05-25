
//KEEPING THIS FILE FOR NOW, 
//WE CAN DELETE WHEN WE ARE SURE THE ROUTES ARE WORKING PROPERLY


// import React, { Component } from 'react';
// import InventoryList from './InventoryList';
// import Warehouses from './Warehouses';
// import WarehouseDetail from './WarehouseDetail';
// import ProductDetail from './ProductDetail';
// import { BrowserRouter as Router, Route, Switch, Redirect,} from 'react-router-dom';


// export default class Main extends Component {
//     render() {
//          return (
//             <div className="main">
//                 <Router>
//                     <div>
//                         <Switch>
//                             <Route path="/warehouses" exact component={Warehouses}  />
//                             <Route path="/inventory" exact component={InventoryList} />
//                             <Route path="/warehouses/:id" exact render={ (props) => { return <WarehouseDetail warehouseId={props.match.params.id} />}} />
//                             <Route path="/inventory/:id" exact render={ (props) => { return <ProductDetail productId={props.match.params.id} />}} />
//                             <Route exact path="/" render={() =><Redirect to='/warehouses'/>} />
//                         </Switch>
//                     </div>
//                 </Router>
//             </div>
//          )
//     }
// }
