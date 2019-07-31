import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview}/>
        <Reviews reviews={this.props.reviews} deleteRestaurant={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReview: (review) => dispatch({ type: 'ADD_REVIEW', text: review}),
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
