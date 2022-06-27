import axios from "axios"
import {FETCH_BOOK_LOADING,FETCH_BOOK_SUCCESS,FETCH_BOOK_BY_ID,FETCH_BOOK_FAIL, SET_SUB_TITLE,} from './type';

const fetchBookLoading = () => {
    return{
        type:FETCH_BOOK_LOADING
    }
}

const fetchBookSucess = (data:any) => {
    return {
        type:FETCH_BOOK_SUCCESS,
        payload:data
    }
}

const fetchBookFail = () => {
    return {
        type:FETCH_BOOK_FAIL
    }
}

const fetchSubTitle = (data:any) => {
    return {
        type:SET_SUB_TITLE,
        payload:data
    }
}

export const fetchBooks = () => async (dispatch:any) => {
    
    try{
        dispatch(fetchBookLoading());
        const response = await axios.get("http://localhost:3000/books");
        console.log("in books.tsx",response.data);
        dispatch(fetchBookSucess(response.data))
    }catch(ex){
        dispatch(fetchBookFail())
    }
;}

const fetchBookByIdSuccess=(book:any)=>{
    return {
        type: FETCH_BOOK_BY_ID,
        payload: book
    }
}
export const fetchBookById = (id:string) => async(dispatch:any) => {
    try{
        dispatch(fetchBookLoading());
        const response = await axios.get(`http://localhost:3000/books/${id}`);
        console.log("in books.tsx",response.data);
        dispatch(fetchBookByIdSuccess(response.data))
        dispatch(fetchSubTitle(response.data.title));
    }catch(ex){
        dispatch(fetchBookFail());
    }
}

export const setSubTitle = (subtitle:string) =>async (dispatch:any) => {
    dispatch(fetchSubTitle(subtitle))
}