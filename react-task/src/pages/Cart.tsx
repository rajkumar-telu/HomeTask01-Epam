import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setSubTitle } from '../redux/actions/books';
import { addToOrders, emptyCart, setAddress } from '../redux/actions/store';

const Cart = () => {
  const {cart,address} = useSelector((state:any) => state.store)

  const [cartDetails,setCart] = useState([]);
  const [edit,setEdit] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToOrders = useCallback(()=>navigate('/orders/',{replace:false}),[navigate]);
  
  useEffect(()=>{
    dispatch(setSubTitle('Cart') as any)
    const tempCart = cart.reduce((acc:any,curr:any) => {
      if(acc[curr.id]) 
        acc[curr.id] = {...curr, count:acc[curr.id].count + 1};
      else 
        acc[curr.id] = {...curr,count:1};
      return acc;
    },{});
    setCart(Object.values(tempCart));    
  },[dispatch,cart]);

  const saveAddress = (e:any) => {
    e.preventDefault();
    if(!edit) return
    const newAddressForm = new FormData(document.getElementById('address') as HTMLFormElement);
    const newAddress = {
      HNo: newAddressForm.get('hno') as string || address.Hno,
      Street: newAddressForm.get('street') as string || address.Street,
      City: newAddressForm.get('city') as string || address.City,
      State: newAddressForm.get('state') as string || address.State
    }
    console.log(newAddress);
    dispatch(setAddress(newAddress) as any);
    setEdit(false);
  }

  const editAddress = () => {
    setEdit(true);
    console.log(('Editing Address'));
  }
  
  const clearCart = () => {
    dispatch(emptyCart()  as any)
  }

  const checkout = () => {
    console.log(cartDetails);
    
    const orders = cartDetails.map((book:any) => ({
      ...book,
      date: new Date().toDateString()
    }));
    dispatch(addToOrders(orders) as any);
    navigateToOrders();
  }

  const price: number = cart.reduce(function (sum:any, obj: any) { return sum+parseFloat(obj.price)},0);
  const tax: number = Number((price * 0.05).toFixed(2))
  const shippingCharges:number = 50
  const total: number = Number(price) + Number(tax) + Number(shippingCharges)

  return (
    <div className="cart">
      <div className="shipping">
        <h4>Shipping Address</h4>
        <div className="address">
          <form id="address">
            <div>
              <label>House No:</label>
              <input type="text" className={edit ? '' : 'input-disabled'} disabled={!edit} name='hno' defaultValue={address.HNo} required/>
            </div>
            <div>
              <label>Street</label>
              <input type="text" className={edit ? '' : 'input-disabled'} disabled={!edit} name='street' defaultValue={address.Street} required/>
            </div>
            <div>
              <label>City</label>
              <input type="text" className={edit ? '' : 'input-disabled'} disabled={!edit} name='city' defaultValue={address.City} required/>
            </div>
            <div>
              <label>State</label>
              <input type="text" className={edit ? '' : 'input-disabled'} disabled={!edit} name='state' defaultValue={address.State} required/>
            </div>
            <div className='options'>
              <button className="btn" onClick={saveAddress} disabled={!edit}>Save Address</button>
              <button type="button" className="btn" onClick={editAddress} disabled={edit}>Edit Address</button>
            </div>
          </form>
        </div>
      </div>
      <div className="shopping">
        {price!== 0 ?
        <>
        <div className="shoppingBag">
          <h4>Shopping Bag</h4>
          <ol>
            {cartDetails.map((book:any) => (<li key={book.id}> <b>{book.title}</b> X {book.count}</li>))}
          </ol>
        </div>
        <div className="paymentInfo">
          <h4>Payment Info</h4>
          <table>
            <tbody>
              <tr>
                <td>Items Price:</td>
                <td>₹ {price}</td>
              </tr>
              <tr>
                <td>Tax:</td>
                <td>₹ {tax}</td>
              </tr>
              <tr>
                <td>Shipping Charges</td>
                <td>₹ {shippingCharges}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td>₹ {total}</td>
              </tr>
              <tr>
                <td className="options">
                <button className="btn" onClick={checkout}>Checkout</button>
                <button className="btn" onClick={clearCart}>Cancel</button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        </>
        : <h4>🛒 Your cart is empty</h4>}
      </div>
    </div>
  )
}

export default Cart