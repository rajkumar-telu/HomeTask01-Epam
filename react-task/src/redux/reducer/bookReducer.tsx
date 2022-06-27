import {FETCH_BOOK_LOADING,FETCH_BOOK_SUCCESS,FETCH_BOOK_FAIL,FETCH_BOOK_BY_ID, SET_SUB_TITLE} from '../actions/type';

const initialState = {
    isLoading: false,
    books: [],
    book: {},
    subTitle: '',
    isError: false
}

const bookReducer = (state=initialState,action:any) =>{
    switch(action.type){
        case FETCH_BOOK_LOADING:
            return {
                ...state,
                isLoading: true,
                books: [],
                isError: false,
                book:{}
            }
        
        case FETCH_BOOK_SUCCESS:
            return {
                ...state,
                isLoading: false,
                books: action.payload,
                isError: false,
                book:{}
            }
        
        case FETCH_BOOK_FAIL:
            return {
                isLoading: false,
                books: [],
                isError: true
            }
        
        case FETCH_BOOK_BY_ID:
            return {
                ...state,
                isLoading:false,
                isError:false,
                book: action.payload
            }
        
        case SET_SUB_TITLE:
            return {
                ...state,
                subTitle: action.payload
            }

        default: 
            return state;
    }
}

export default bookReducer;

// reducer is pure function 