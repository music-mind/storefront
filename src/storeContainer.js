import React from 'react';
import { Provider, Subscribe, Container } from 'unstated';


class StoreContainer extends Container {
	state = {
		"data": [],
		"cart": [], //{name: 'apple', imgSrc: 'https://tinyurl.com/lg5rj5z', quantity: 2, stock: 5, price: 2.50}
		"banana": 0,
		"apple": 0,
		"raspberry": 0,
		"kiwi": 0,
		"very delicious pineapple with a long name": 0,
		"strawberries": 0
	}

	setData(data) {
		this.setState({
			...this.state,
			data: data
		});
	}

	increment(itemName) {
		console.log(itemName);
		let items = [...this.state.cart];
		let data = [...this.state.data];
		data = data.filter(item => {
			return item.itemName == itemName;
		})[0]; // data object
		if (data.quantityRemaining	== 0) return;
		let new_data = {
			name: itemName,
			imgSrc: data.imgSrc,
			stock: data.quantityRemaining,
			price: data.price,
			quantity: 1
		};
		let item_ind = items.findIndex(item => item.name == itemName);
		if (item_ind == -1) {
			// add new item to cart
			this.setState({ 
    	...this.state,
    	cart: [...this.state.cart, new_data]
    	});
		} else {
			let quantity = items[item_ind].quantity;
			if (quantity == data.quantityRemaining) return;
			quantity += 1;
			let item = {...items[item_ind]};
			item.quantity = quantity;
			items[item_ind] = item;
			this.setState({ 
    	...this.state,
    	cart: items 
      });
		}
  }

  decrement(itemName) {
		console.log(itemName);
		let items = [...this.state.cart];
		let item_ind = items.findIndex(item => item.name == itemName);
		if (item_ind == -1) {
			// nothing to do
			return;
		} else {
			let quantity = items[item_ind].quantity;
			if (quantity == 0) return;
			quantity -= 1;
			let item = {...items[item_ind]};
			item.quantity = quantity;
			items[item_ind] = item;
			this.setState({ 
    	...this.state,
    	cart: items 
      });
		}
  }

  delete(itemName) {
  	console.log(itemName);
  	let items = [...this.state.cart];
  	items = items.filter(item => {
  		return item.name != itemName;
  	});
  	this.setState({ 
    	...this.state,
    	cart: items 
     });
  }

  empty() {
  	let items = [];
  	this.setState({ 
    	...this.state,
    	cart: items 
    });
  }

  confirm() {
  	let data = [...this.state.data];
  	let items = [...this.state.cart];
  	this.state.cart.forEach(item => {
  		let item_ind = data.findIndex(cart_item => cart_item.itemName == item.name);
  		let data_item = {...data[item_ind]};
  		data_item.quantityRemaining -= item.quantity;
  		data[item_ind] = data_item;
  		console.log(data_item);
  	})
  	this.setState({ 
    	...this.state,
    	data: data 
    }).then(() => this.empty());
  }
}

export default StoreContainer;
