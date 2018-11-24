import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import myAction from "../../actions/myaction";
import { REQUEST, SUC_GANRES, ERROR } from "../../constants";
import config from '../../config';

class Ganres extends Component {
  componentDidMount() {
    let { getGanres } = this.props;
    getGanres();
  }

  render() {
    let { ganres } = this.props;
    console.log(`ganres.data["genres"]`, ganres.data["genres"]);
    return (
      <div>
        <h1 className="text-center">Ganres</h1>
        {ganres.loading === true
        ? (<h1>Loading...</h1>) 
        : ganres.data["genres"] ? (
                                 ganres.data["genres"].map((ganre, index) => (<Link className="col-3 text-uppercase text-primary h3" key={index} to={`/${ganre.id}`}>#{ganre.name}, </Link>   ))
                                 ) : null}
      </div>
    );
  }
}

/*
  Redux
*/



//const apiKey = "10105980af98fcd649928d4431bd7801";
const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${config.apiKey}&language=en-US`;

const mapStateToProps = state => {
  return {
    ganres: state.ganres
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  dispatch({
    type: REQUEST
  });
  return {
    getGanres: () => {
      dispatch(myAction.getRequestDATA(apiUrl, [REQUEST, SUC_GANRES, ERROR]));
    }
  };
};

const ConnectedGanres = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ganres);

export default ConnectedGanres;
