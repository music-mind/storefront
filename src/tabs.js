import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import StoreFront from './store.js';

function TabContainer(props) {
  return (
    <div style={{width: '100%'}}>
      {props.children}
    </div>
  );
}

const styles = {
  labelContainer: {
    paddingTop: 0,
    paddingBottom: 0,
    textTransform: 'capitalize'
  },
  tabsRoot: {
    borderBottom: '2px solid #34C896',
  },
  tabsIndicator: {
    backgroundColor: '#34C896',
  }
};

const style = {
  appbar: {
    boxShadow: 'none'
  },
  tabs: {
    backgroundColor: 'white',
    borderBottomColor: '#34C896'
  },
  label: {
    backgroundColor: '#34C896',
    color: 'white',
    marginLeft: 50,
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomColor: '#34C896'
  }
};
  

class Store extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <AppBar position="static" style={style.appbar}>
          <Tabs value={value} onChange={this.handleChange} 
          style={style.tabs} classes={{root: classes.tabsRoot, indicator: classes.tabsIndicator}}>
            <Tab label="Fruit" style={style.label} classes={{
              labelContainer: classes.labelContainer,
              root: classes.tabsRoot}}/>
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><StoreFront /></TabContainer>}
      </div>
    );
  }
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withStyles(styles)(Store);
