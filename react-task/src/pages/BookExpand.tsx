import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { fetchBookById } from "../redux/actions/books";
import { addToCart } from "../redux/actions/store";

const BookExpand = (props: any) => {
  const {book} = useSelector((state:any) => state.book);

  const params = useParams();
  const id: string = params.id!;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("ID: ", id);

  const navigateToCart = useCallback(
    () => navigate("/cart/", { replace: false }),
    [navigate]
  );

  useEffect(() => {
    dispatch(fetchBookById(id) as any);
  }, [dispatch, id]);

  const add = () => {
    dispatch(addToCart(book) as any)
    alert("Added to cart")
  }

  const buy = (e: any) => {
    e.stopPropagation();
    dispatch(addToCart(book) as any);
    navigateToCart();
  }

  return (
    <div className="bookInfo">
      <div className="coverPage">
        <img src={book.coverPage} alt="No Cover Page" />
      </div>
      <div className="book-details">
        <div className="title">{book.title}</div>
        <div className="price">Book Price: ₹{parseFloat(book.price).toFixed(2)}</div>
        <div className="authors">Author Name: {book.author}</div>
        <div className="pageCount">Page Count: : {book.pageCount}</div>
        <div className="isbn">ISBN:{book.ISBN}</div>
        <div className="options">
          <button className="btn btn-primary btn-cart" onClick={add}>Add to Cart</button>
          <button className="btn btn-primary" onClick={buy}>Buy Now</button>
        </div>
      </div>
      <p className="desc">{book.description}</p>
    </div>
  );
};

export default BookExpand;

