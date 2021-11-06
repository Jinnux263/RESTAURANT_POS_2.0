import Meal from './Meal';
import '../../CSS/Box.css'

function MenuList(Mlist) {
    return (
        <div className="grid">{Mlist.Mlist.map(Meal)}</div>
    )
}

export default MenuList