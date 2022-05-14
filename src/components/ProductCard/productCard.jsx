import './productCard.css';

const ProductCard = ({ product, onAddToCartClicked }) => {
    const { name, price, image } = product;
    return (
        <div className="card productCard m-3 pb-2">
        <div className="card-image productImage">
            <img src={image} alt="product" width='230px'/>
        </div>
        <div className="card-content mx-3 ">
            <h3>{name}</h3>
            <p>${price}.00</p>
        </div>
        {/* <div className="card-action">
            <button className="button" onClick={() => onAddToCartClicked(product)}>
            Add to cart
            </button>
        </div> */}
        </div>
    );
}

export default ProductCard;