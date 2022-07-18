import { useCart } from "react-use-cart"

const Cart = () => {
  const{
        isEmpty,
        cartTotal,
      totalUniqueItems,
      totalItems,
      items,
      emptyCart,
      removeItem,
      updateItemQuantity
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Your cart is empty</h1>
  return (
    <div>
      <div className="py-4 container">
        <div className="text-center">Total Price:({cartTotal})</div>
        <div className="col-auto ms-auto d-flex align-items-center justify-content-center w-100">
          <div className="row d-flex justify-content-center">
            <h5>
              Cart({totalUniqueItems}) total items:({totalItems})
            </h5>
            <table className="d-flex align-items-center justify-content-center  table table-dark table-hover m-0">
              <tbody>
                {items.map((item,index)=>{
                  return(
                    <tr>
                      <td><img src={item.img} alt="err" width="100" /></td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>
                        Say:({item.quantity})
                        <button className="btn btn-success mx-2" onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
                        <button  className="btn btn-success mx-2" onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
                        <button className="btn btn-danger mx-2" onClick={()=>removeItem(item.id)}>X</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <button className="btn btn-danger" onClick={()=>{emptyCart()}}>Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart