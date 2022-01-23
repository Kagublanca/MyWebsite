import ShopItem from "../ShopItem";
import "./index.css"
function Shop(){
return (
    <div>
    <div className="shop-background">
    <h1>The Shop</h1>
    </div>
    <ul className="items">
    <ShopItem />
    </ul>
    </div>
)
}

export default Shop;