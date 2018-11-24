import { REQUEST, SUC_FILMS , ERROR} from '../../constants';

const filmsInitialState = {
  loading: false,
  loaded: false,
  data: [],
  errors: []
};

const films = ( state = filmsInitialState, action) => {
  switch( action.type ){
    case REQUEST:
      return {
        ...state,
        loading: true
      }

    case ERROR:
      return {
        ...state,
        errors: action.error
      }


      case SUC_FILMS:
      return {
        ...state,
        data: action.data,
        loading: false,
        loaded: true
      }


    default:
      return state;
  }
}
export default films;
