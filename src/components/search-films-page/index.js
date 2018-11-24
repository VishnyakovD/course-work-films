import React, { Component } from "react";
import { connect } from "react-redux";
import myAction from "../../actions/myaction";
import { REQUEST, SUC_FILMS, ERROR } from "../../constants";
import List from "../common/list";
import config from '../../config';

class Search extends Component {
  componentDidMount() {
    let { query } = this.props.match.params;
    let { getFilms } = this.props;
    getFilms(query);
  }

  render() {
    let { films } = this.props;
    let { query } = this.props.match.params;
    console.log("films.data", films.data);
    return (
      <div>
        <h1 className="text-center">Search films</h1>
        {films.loading === true ? (
          <h1>Loading...</h1>
        ) : films.data.results.length > 0 ? (
          <List films={films.data.results} />
        ) : (
          <h2 className="text-center">
            film <i>"{query}"</i> not found
          </h2>
        )}
      </div>
    );
  }
}

/*
  Redux
*/
//const apiKey = "10105980af98fcd649928d4431bd7801";
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${config.apiKey}&query={0}&language=en-US&page=1&include_adult=false`;

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
    getFilms: query => {
      dispatch(
        myAction.getRequestDATA(apiUrl.format(query), [
          REQUEST,
          SUC_FILMS,
          ERROR
        ])
      );
    }
  };
};

const ConnectedSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);

export default ConnectedSearch;
