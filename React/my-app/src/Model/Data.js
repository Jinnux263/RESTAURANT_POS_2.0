import chicken from "../Img/Normal/Chicken.jpg"
import chocolate from "../Img/Normal/Chocolate.jpg"
import coca from "../Img/Normal/coca.jpg"
import icecream from "../Img/Normal/Icecream.jpg"
import juice from "../Img/Normal/juice.jpg"
import kiwi from "../Img/Normal/kiwi.jpg"
import lamp from "../Img/Normal/lamp.jpg"
import parfait from "../Img/Normal/Parfait.png"
import risotto from "../Img/Normal/Risotto.jpg"
import salmon from "../Img/Normal/Salmon.jpg"
import sashimi from "../Img/Normal/Sashimi.png"
import spaghetti from "../Img/Normal/Spaghetti.jpg"
import squid from "../Img/Normal/Squid.jpg"
import steak from "../Img/Normal/Steak.jpg"

const Meat = [
    {id: 1, image:chicken, title: 'Chicken', price: 75},
    {id: 1, image:lamp, title: 'Lamp', price: 40},
    {id: 1, image:steak, title: 'Beefsteak', price: 50},
    {id: 1, image:spaghetti, title: 'Spaghetti', price: 25},
]
const SeaFood = [
    {id: 2, image:risotto, title: 'Risotto', price: 45},
    {id: 2, image:salmon, title: 'Salmon', price: 35},
    {id: 2, image:sashimi, title: 'Sashimi', price: 55},
    {id: 2, image:squid, title: 'Squid Fried', price: 30},
]
const Dessert = [
    {id: 3, image:chocolate, title: 'Chocolate Pie', price: 20},
    {id: 3, image:icecream, title: 'Ice Cream', price: 24},
    {id: 3, image:parfait, title: 'Parfait', price: 30},
    {id: 3, image:kiwi, title: 'Kiwi Pie', price: 32},
]
const Drink = [
    {id: 4, image:coca, title: 'Coca', price: 5},
    {id: 4, image:juice, title: 'Juice', price: 15},
]

const All = [
    {id: 1, image:chicken, title: 'Chicken', price: 75},
    {id: 1, image:lamp, title: 'Lamp', price: 40},
    {id: 1, image:steak, title: 'Beefsteak', price: 50},
    {id: 1, image:spaghetti, title: 'Spaghetti', price: 25},
    {id: 1, image:risotto, title: 'Risotto', price: 45},
    {id: 1, image:salmon, title: 'Salmon', price: 35},
    {id: 1, image:sashimi, title: 'Sashimi', price: 55},
    {id: 1, image:squid, title: 'Squid Fried', price: 30},
    {id: 1, image:chocolate, title: 'Chocolate Pie', price: 20},
    {id: 1, image:icecream, title: 'Ice Cream', price: 24},
    {id: 1, image:parfait, title: 'Parfait', price: 30},
    {id: 1, image:kiwi, title: 'Kiwi Pie', price: 32},
    {id: 1, image:coca, title: 'Coca', price: 5},
    {id: 1, image:juice, title: 'Juice', price: 15},

    {image:chicken, title: 'Chicken', text: '$75.000'},
    {image:lamp, title: 'Lamp', text: '$40.000'},
    {image:steak, title: 'Beefsteak', text: '$50.000'},
    {image:spaghetti, title: 'Spaghetti', text: '$25.000'},
    {image:risotto, title: 'Risotto', text: '$45.000'},
    {image:salmon, title: 'Salmon', text: '$35.000'},
    {image:sashimi, title: 'Sashimi', text: '$55.000'},
    {image:squid, title: 'Squid Fried', text: '$30.000'},
    {image:chocolate, title: 'Chocolate Pie', text: '$20.000'},
    {image:icecream, title: 'Ice Cream', text: '$24.000'},
    {image:parfait, title: 'Parfait', text: '$30.000'},
    {image:kiwi, title: 'Kiwi Pie', text: '$32.000'},
    {image:coca, title: 'Coca', text: '$5.000'},
    {image:juice, title: 'Juice', text: '$15.000'},
]

export { All , Meat, SeaFood, Dessert, Drink}
