import ShopItem from "../ShopItem";
import "./index.css"
import {useState} from "react";



function Shop(){

    const [shopSlider, setShopSlider] = useState(false);

    function handleClick(){
        setShopSlider(!shopSlider)
        if(shopSlider){
        }
    }

return (
    <div className="theshop" onClick={handleClick}>
    <h1>The Shop</h1>
    <div className="shop-background">
    <ul className="items">
    </ul>
    </div>
    </div>
)
}
export default Shop;

