import "./index.css"

function ShopItem(){
    const title = "Upgrade!"
    return (
        <li>{title}
            <p id="message">This upgrade will do something good, it may increase something.
                You can by this upgrade by clicking the button! OK, I hope This
                is enough text
            </p>
            <p id="gold">Gold: 5</p>
            <p id="xp">XP: 5</p>
        </li>
    );
}

export default ShopItem;