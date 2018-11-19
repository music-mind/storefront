import React from 'react';
import { Subscribe } from 'unstated';
import StoreContainer from './storeContainer.js';
import Button from '@material-ui/core/Button';
import Image from 'react-image-resizer';
import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Maximize from '@material-ui/icons/Maximize';

const style = {
	cart: {
		width: '16%',
		height: '100%',
		minHeight: '100vh',
		display: "inline-block",
		backgroundColor: '#34C896',
		verticalAlign: 'top',
		color: 'white'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	total: {
		marginRight: 10,
		fontWeight: 'bold'
	},
	separator: {
		borderBottom: '1px solid white',
		paddingTop: 10,
		paddingBottom: 10,
		marginBottom: 10,
		marginLeft: 20
	},
	empty: {
		backgroundColor: '#34C896', 
		textTransform: 'capitalize',
		color: 'white'
	},
	confirm: {
		textTransform: 'capitalize',
		backgroundColor: '#BEF0E0',
		marginRight: 10,
		fontWeight: 'bolder'
	},
	purchase: {
		textAlign: 'right'
	},
	cart_item: {
		backgroundColor: '#6EDAB6',
		color: 'black',
		textAlign: 'left'
	},
	cart_background: {
		marginLeft: 15
	},
	delete: {
		backgroundColor: '#6EDAB6',
		textTransform: 'capitalize',
		color: 'white',
		textAlign: 'right',
		display: 'inline-block',
		fontSize: 12,
		paddingRight: 0,
		paddingLeft: 0
	},
	math: {
		minHeight: 10,
		minWidth: 10,
		backgroundColor: 'white',
		padding: 0
	},
	count: {
		display: 'inline-block',
		marginLeft: 10,
		marginTop: 10
	},
	calculation: {
		fontSize: 12,
		width: '50%',
		marginLeft: 15,
		display: 'inline-block'
	}
}

class Cart extends React.Component {

  render() {
  	const { store } = this.props;

  	let total = 0;
  	// Calculate total
  	store.state.cart.forEach(item => {
  		total += item.quantity * item.price;
  	});

  	let cart_items = store.state.cart.map(item => {
  		let subTotal = item.price * item.quantity;
  		return (<div style={style.cart_item}>
  				<span style={style.cart_background}>
  				<Image src={item.imgSrc} width={50} height={50} style={style.count}/>
  				<div style={style.count}>
  				<Button size="small" style={style.math}
  				onClick={() => store.decrement(item.name)}>-</Button>
  				  {" " + item.quantity + " "} 
  				<Button size="small" style={style.math}
  				onClick={() => store.increment(item.name)}>+</Button>
  				</div>
  				</span>
  				<div style={style.calculation}> @ ${item.price}each = ${subTotal.toFixed(2)} </div>
  				<Button style={style.delete} onClick={() => store.delete(item.name)}>Delete</Button>
  			</div>
  			)
  	});


    return (
    	<Subscribe to={[StoreContainer]}>
	    	{store => (
		      <div style={style.cart}>
		      	<div style={style.title}>Shopping Cart</div>
		      	<div>{store.state.cart.length} items</div>
		      	{cart_items}
		      	<div style={style.separator}> </div>
		      	<div style={style.purchase}>
			      	<div style={style.total}> Total: ${total.toFixed(2)}</div>
			      	<Button style={style.empty} onClick={() => store.empty()}
	  						>Empty Cart
	  					</Button>
	  					<Button style={style.confirm} onClick={() => store.confirm()}
	  						>Confirm Purchase
	  					</Button>	
  					</div>
		      </div>
		    )}
	    </Subscribe>
    );
  }
}

export default Cart;
