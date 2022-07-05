const Order = ({order}:any) => {
    const total_cost = Number(order.price) * Number(order.count);
    return (
        <div className="order">
            <div className="order-header">
                <span>Order Placed: {order.date}</span>
                <span>Status: Delivered</span>
            </div>
            <div className="order-body">
                <div className="book-order-img">
                    <img src={order.coverPage} alt="Book Cover Page" />
                </div>
                <div className="book-order-info">
                    <div className="book-order-title">
                        <b>{order.title}</b> X {order.count}
                    </div>
                    <div className="book-order-authors">
                        Author Name: {order.author}
                    </div>
                    <div className="book-order-price">
                        Price: ₹{Number(total_cost).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Order;