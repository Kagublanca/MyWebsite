import OpenShopButton from "../OpenShopButton";
import ShopItem from "../ShopItem";
import "./index.css"
function Shop(){
return (
    <div className="theshop">
    <h1>The Shop</h1>
    <div className="shop-background">
    <ul className="items">
    <ShopItem />
    <ShopItem />
    <ShopItem />
    <ShopItem />

    </ul>
    </div>
    </div>
)
}
export default Shop;

