import React, { Component } from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class InfoPage extends Component {

  componentDidMount() {
    // WILL MAKE DISPATCH TO HIT OUR APIS!!!!
    this.props.dispatch({type: 'GET_SCOTT'});
  }

  render() {
    return (
      <div>
          <p>
            Info Page
          </p>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    store
  }
}

export default connect(mapStateToProps)(InfoPage);
