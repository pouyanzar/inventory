import React, { Component } from 'react';
import './css/master.css';
import TopBar from './TopBar';
import Sidebar from './Sidebar';
import InventoryList from './InventoryList';
import Warehouses from './Warehouses';
import ProductDetail from './ProductDetail';
import { BrowserRouter as Router, Route, Switch, Redirect,} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
    <div>
      <Router>
        {/* We should give the Sidebar className sidebar or leftSide */}
          <div className="">
            <Sidebar />
            {/* We should give the right side that holds TopBar & the main routes className rightSide or something similar */}
          <div className=''>
            <TopBar />
            <div className="main">
            <Switch>
                <Route path="/warehouses" exact component={Warehouses}  />
                <Route path="/inventory" exact component={InventoryList} />
                <Route path="/warehouses/:id" exact render={ (props) => { return <InventoryList warehouseId={props.match.params.id} />}} />
                <Route path="/inventory/:id" exact render={ (props) => { return <ProductDetail productId={props.match.params.id} />}} />
                <Route exact path="/" render={() =><Redirect to='/warehouses'/>} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
     </div>
    );
  }
}

