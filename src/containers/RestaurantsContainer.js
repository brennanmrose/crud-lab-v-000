import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants restaurants={this.props.restaurants} deleteRestaurant={this.props.deleteRestaurant}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants
  }
}

// const mapStateToProps = ({ restaurants }) => ({ restaurants })

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (restaurant) => dispatch({ type: 'ADD_RESTAURANT', text: restaurant}),
    deleteRestaurant: id => dispatch({type: "DELETE_RESTAURANT", id})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
