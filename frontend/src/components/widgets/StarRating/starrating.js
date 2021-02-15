import React, {Component} from "react";
import StarRatingComponent from 'react-star-rating-component';
import './starrating.css'
class Star extends Component {
    constructor() {
      super();
   
      this.state = {
        rating: 1
      };
    }
   
    onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
    }
   
    render() {
      const { rating } = this.state;
      
      return (                
        <div className="star">
          <h2>GIVE US A REVIEW: {rating}/5</h2>
          <StarRatingComponent 
            name="rate1" 
            starCount={5}
            value={rating}
            renderStarIcon={() => <span><i className="fa fa-star fa-3x" aria-hidden="true"></i></span>}
            onStarClick={this.onStarClick.bind(this)}
          />
        </div>
      );
    }
  }

  export default Star