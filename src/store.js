import React from 'react';
import Display from './display.js';
import Cart from './cart.js';
import { Subscribe } from 'unstated';
import StoreContainer from './storeContainer.js';

const style = {
	store: {
	  display: 'inline-block',
	  width: '100%',
	  height: '100%'
	},
	display: {
		width: '80%'
	},
	cart: {
		width: '20%'
	}
};

class StoreFront extends React.Component {

  render() {
    return (
    	<Subscribe to={[StoreContainer]}>
	    	{store => (
		      <div style={style.store}>
		      	<Display style={style.display} store={store} />
		      	<Cart style={style.cart} store={store} />
		      </div>
		    )}
	    </Subscribe>
    );
  }
}

export default StoreFront;
