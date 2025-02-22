import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {
    let restaurants;
    if (this.props.restaurants) {
      restaurants = this.props.restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>)
    }
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
