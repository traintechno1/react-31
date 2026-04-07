import { useState } from "react";
import Product from "../Product/Product"

export default function Products(){
    let [products, setProducts] = useState([
        {
            id: 1,
            name: "Apple iPhone 16",
            price: 106000,
            storage: '128GB',
            count: 0
        },
        {
            id: 2,
            name: "Apple iPhone 16 PRO",
            price: 126000,
            storage: '256GB',
            count: 0
        },
        {
            id: 3,
            name: "Apple iPhone 17",
            storage: '256GB',
            optionalPrice: 100000,
            count: 0
        },
    ]);

    function purchaseProduct(product){
        setProducts(preProduct=> (preProduct.map(p=> p.id === product.id ? {...p, count : p.count++ }: p)));
    }
    return(
        <> 
            {
                products.map((p)=>(
                    <Product key={p.id}
                        purchaseProduct={purchaseProduct}
                        product={p}/>
                ))
            }   
        </>
    )
}