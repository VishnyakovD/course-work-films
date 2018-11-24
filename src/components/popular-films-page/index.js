import React, { Component } from "react";
import { connect } from "react-redux";
import  myAction  from "../../actions/myaction";
import {  REQUEST, SUC_FILMS , ERROR } from '../../constants';
import List from "../common/list"
import config from '../../config';

class Popular extends Component {
  
  componentDidMount() {
    let { getFilms } = this.props;
    getFilms();
  }  

    render() {   
      let { films} = this.props;
      return (
        <div>
          <h1 className="text-center">Popular films</h1>
          {
            films.loading===true?
            (<h1>Loading...</h1>):
            (<List films={films.data.results} />)
          } 
        </div>
      );
    }
  }

  
/*
  Redux
*/
//const apiKey="10105980af98fcd649928d4431bd7801";
const apiUrl=`https://api.themoviedb.org/3/movie/popular?api_key=${config.apiKey}&language=en-US&page=1`;

const mapStateToProps = state => {
    return { 
      films:state.films
    };
  };
  
  const mapDispatchToProps=(dispatch, ownProps)=>{
    dispatch({
      type:REQUEST
    })
    return {
      getFilms:()=>{
        dispatch(myAction.getRequestDATA(apiUrl,[ REQUEST, SUC_FILMS , ERROR ]))
      }
    }
  };
  
  const ConnectedPopular = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Popular);
  
  export default ConnectedPopular;
  