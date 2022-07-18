import {Link} from 'react-router-dom';
import {useCart} from 'react-use-cart';
const Nav = () => {
  const  {totalItems}=useCart();
  
  return (
    
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Cars</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
          </li>
   
        </ul>
        <div className="d-flex">
          <Link className="btn btn-outline-success" to="/cart">Cart({totalItems})</Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Nav