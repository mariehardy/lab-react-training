import React, { Component } from 'react';

class LikeButton extends Component {

state = {
    numberOfLikes: 0
} 

onClickHandler = () => {
this.setState({
    numberOfLikes: this.state.numberOfLikes +1
})
}

render(){

    return (
        <div>
            <button onClick={this.onClickHandler}> {this.state.numberOfLikes} Likes </button>
        </div>
    )

}
}

export default LikeButton
