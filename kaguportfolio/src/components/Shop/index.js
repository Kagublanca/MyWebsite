import ShopItem from "../ShopItem";
import "./index.css"
function Shop(){
return (
    <div>
    <h1>The Shop</h1>
    <div className="shop-background">
    <ul className="items">
    <ShopItem />
    </ul>
    </div>
    </div>

)
}

export default Shop;