import {useCart} from 'react-use-cart';
const ProductItems = ({sekil,basliq,aciqlama,qiymet,mehsul}) => {
  const {addItem} = useCart();
  
  return (
    
    <div className="card col-12 col-sm-12 col-md-4">
    <img src={sekil} height="300" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{basliq}</h5>
      <p className="card-text">{aciqlama}</p>
      <p className="card-text">{qiymet}$</p>
      <button className="btn btn-primary" onClick={()=>addItem(mehsul)}>Add To Cart</button>
    </div>
  </div>
  )
}

export default ProductItems