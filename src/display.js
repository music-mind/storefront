import React from 'react';
import storeData from './data.json';
import { Subscribe } from 'unstated';
import StoreContainer from './storeContainer.js';
import Button from '@material-ui/core/Button';
import Image from 'react-image-resizer';

const style = {
	width: '80%',
	display: "inline-block",
	textAlign: "left"
}

class Display extends React.Component {

	componentDidMount() {
		console.log(storeData);
		this.props.store.setData(storeData);
	}

  render() {
  	const { store } = this.props;

  	let items = store.state.data.map(item => {
  		let name = item.itemName.charAt(0).toUpperCase() + item.itemName.slice(1);
  		return (<div style={{border: '1px solid #34C896', width: 210, height: 230, 
  			display: "inline-block", margin: 10, textAlign: "center", verticalAlign: "middle"}}>
  			<Image src={item.imgSrc} width={200} height={110} />
  			<div> {name} </div>
  			<div> $ {item.price} </div>
  			<div> <strong>{item.quantityRemaining}</strong> In Stock </div>
  			<Button style={{backgroundColor: '#34C896', textTransform: 'capitalize'}}
  			onClick={() => store.increment(item.itemName)}>Add to Cart</Button>
  		</div>)
  	})

    return (
    	<Subscribe to={[StoreContainer]}>
	    	{store => (
		      <div style={style}>
		      {items}
		      </div>
		    )}
	    </Subscribe>
    );
  }
}

export default Display;
