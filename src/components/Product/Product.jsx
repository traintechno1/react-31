
import './Product.css';

export default function Product({product,purchaseProduct}){

    function purchase(product){
        purchaseProduct(product);
    }
    return(
        <>
           <div className='product-wrapper'>
                <h4 title="">Title: {product?.name}</h4>
                <div>Price: {product?.price || product.optionalPrice }</div>
                <div>Storage: {product?.storage}</div>
                <div>Count: {product?.count}</div>
                <button onClick={()=>purchase(product)}>purchase</button>
            </div>
        </>
    )
}