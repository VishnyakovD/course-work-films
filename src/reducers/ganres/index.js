import { REQUEST, SUC_GANRES , ERROR} from '../../constants';

const ganresInitialState = {
  loading: false,
  loaded: false,
  data: {},
  errors: []
};

const ganres = ( state = ganresInitialState, action) => {
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


      case SUC_GANRES:
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
export default ganres;
