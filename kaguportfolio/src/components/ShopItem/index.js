import "./index.css"

function ShopItem(){
    const title = "Upgrade!"
    return (
        <li id="title">{title}
            <p id="message">A brief overview of
            asdjasdasduihasdiuhsadasuhasuidauisdhuhsda
            asduihasdiuhasduihasduihasdiuhasdiuh what the upgrade will do goes here
                <div>
                    </div>
            <p className="resourceshop" id="woodshop">Wood <span>20</span></p>
            <p className="resourceshop" id="rockshop">Rock <span>50</span></p>
            </p>
        </li>
    );
}

export default ShopItem;