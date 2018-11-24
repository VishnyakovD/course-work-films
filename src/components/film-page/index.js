import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import myAction from "../../actions/myaction";
import { REQUEST, SUC_FILM, ERROR } from "../../constants";
import FilmFullInfo from "../common/film";
import config from '../../config';

String.prototype.format = function() {
  var a = this;
  for (var k in arguments) {
    a = a.replace(new RegExp("\\{" + k + "\\}", "g"), arguments[k]);
  }
  return a;
};

class Film extends Component {
  componentDidMount() {
    let { id } = this.props.match.params;
    let { getFilm } = this.props;
    getFilm(id);
  }

  render() {
    let { film } = this.props;
    return (
      <>
        {film.loading === true ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <br />
            <FilmFullInfo film={film.data} />
            <Link className="badge-pill badge-info text-monospace" to={`/list/similar/${film.data.id}`}>Similar films...</Link>
          </>
        )}
      </>
    );
  }
}

/*
  Redux
*/
//const apiKey = "10105980af98fcd649928d4431bd7801";
const apiUrl = `https://api.themoviedb.org/3/movie/{0}?api_key=${config.apiKey}&language=en-US`;
const mapStateToProps = state => {
  return {
    film: state.film
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch({ type: REQUEST });

  return {
    getFilm: id => {
      dispatch(
        myAction.getRequestDATA(apiUrl.format(id), [REQUEST, SUC_FILM, ERROR])
      );
    }
  };
};

const ConnectedFilm = connect(
  mapStateToProps,
  mapDispatchToProps
)(Film);

export default ConnectedFilm;
