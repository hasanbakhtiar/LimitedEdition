// type ProdTypes={
//     title:string,
//     price:number
// }

type ProdTypes = {
  prodData: { 
    title: string; 
    price: number 
}[]
};
const ProductItem = (props: ProdTypes) => {
  return (
   <>
   {props.prodData.map((fd)=>{
    return(
        <div className="card col">
        <div className="card-body">
          <h5 className="card-title">{fd.title}</h5>
          <p className="card-text">{fd.price}$</p>
        </div>
      </div>
    )
   })}
   </>
  );
};

export default ProductItem;
