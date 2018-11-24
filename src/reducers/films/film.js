import { REQUEST, SUC_FILM , ERROR} from '../../constants';

const filmInitialState = {
  loading: false,
  loaded: false,
  data: {},
  errors: []
};

const film = ( state = filmInitialState, action) => {
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


      case SUC_FILM:
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
export default film;
