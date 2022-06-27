import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import { fetchBooks, setSubTitle } from '../redux/actions/books';

const Home = () => {

  const {isLoading,books,isError} = useSelector((state:any) => state.book);
  const [booksCount,setBooksCount] = useState(10);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks() as any)
    dispatch(setSubTitle('') as any)
  },[dispatch])

  if(isLoading){
    return(
      <i>Loading...</i>
    )
  }

  if(isError){
    return(
      <i>OOPS, There has been an error!</i>
    )
  }

  const showMoreHandler = () => {
    setBooksCount(booksCount+10);
  }

  return (
    <>
      <div className="bookList">
        {books.slice(0,booksCount).map((bookValue: any) => (<Book key={bookValue.id} book={bookValue}/>))}
      </div>
      {
        books.length > booksCount ? 
        <div className="show-more">
          <p className="btn btn-noBg" onClick={showMoreHandler}>Show More</p>
        </div>
        :null
      }
    </>
  )
}

export default Home;
