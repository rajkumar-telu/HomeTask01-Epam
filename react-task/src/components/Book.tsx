import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/actions/store";

const Book = (props: any) => {
  const { id, title, description, coverPage } = props.book;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToCart = useCallback(
    () => navigate("/cart/", { replace: false }),
    [navigate]
  );
  const navigateToBook = useCallback(
    () => navigate(`/book-detail/${id}`, { replace: false }),
    [id, navigate]
  );

  const buyHandler = (e: any) => {
    e.stopPropagation();
    dispatch(addToCart(props.book) as any);
    navigateToCart();
  };
  return (
    <div className="book" onClick={navigateToBook}>
      <img src={coverPage} alt="Book Cover Page" />
      <div>
        <div className="title">{title}</div>
      </div>
      <div className="desc">{description.slice(0, 75)}...</div>
      <button className="btn btn-primary" onClick={buyHandler}>
        Buy Button
      </button>
    </div>
  );
};

export default Book;
