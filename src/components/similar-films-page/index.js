import React, { Component } from "react";
import { connect } from "react-redux";
import myAction from "../../actions/myaction";
import { REQUEST, SUC_FILMS, ERROR } from "../../constants";
import List from "../common/list";
import config from '../../config';

class Similar extends Component {
  componentDidMount() {
    let { id } = this.props.match.params;
    let { getFilms } = this.props;
    getFilms(id);
  }

  render() {
    let { films } = this.props;
    return (
      <div>
        <h1 className="text-center">Similar films</h1>
        {films.loading === true ? (
          <h1>Loading...</h1>
        ) : films.data.results.length > 0 ? (
          <List films={films.data.results} />
        ) : (
          <h2 className="text-center">not found</h2>
        )}
      </div>
    );
  }
}

/*
  Redux
*/
//const apiKey = "10105980af98fcd649928d4431bd7801";
const apiUrl = `https://api.themoviedb.org/3/movie/{0}/similar?api_key=${config.apiKey}&language=en-US&page=1`;

const mapStateToProps = state => {
  return {
    films: state.films
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch({
    type: REQUEST
  });
  return {
    getFilms: id => {
      dispatch(
        myAction.getRequestDATA(apiUrl.format(id), [REQUEST, SUC_FILMS, ERROR])
      );
    }
  };
};

const ConnectedSimilar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Similar);

export default ConnectedSimilar;
