import data from "../data/data"
import ProductItems from "./ProductItems"


const Products = () => {
  return (
    <div>
      <div className="row mt-5">
        {data.carData.map((deyer,saygac)=>{
          return(
            <ProductItems
            sekil={deyer.img}
            basliq={deyer.title}
            aciqlama={deyer.desc}
            qiymet={deyer.price}
            key={saygac}
            mehsul = {deyer}
             
             />
          )
        })}
      </div>
    </div>
  )
}

export default Products