import Meal from './Meal';
import '../../CSS/Menu.css'

function MenuList(Mlist) {
    return (
        <div className="grid">{Mlist.Mlist.map(Meal)}</div>
    )
}

export default MenuList