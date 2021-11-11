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


//Them mot truong thong tin cho cacs mon an, la phan detail gom cacs truong protein, additive, baking material, food decoration 
const Meat = [
    {id: 1, image:chicken, title: 'Chicken', price: 75, protein: '1000g',additives: 4.5 ,material: 'Chicken, Vegetables', decor: 2},
    {id: 2, image:lamp, title: 'Lamp', price: 40, protein: '250g',additives: 4 ,material: 'Lamp, Sauce', decor: 1},
    {id: 3, image:steak, title: 'Beefsteak', price: 50, protein: '200g',additives: 5 ,material: 'Beef, Spices', decor: 1},
    {id: 4, image:spaghetti, title: 'Spaghetti', price: 25, protein: '300g',additives: 3.5 ,material: 'Pasta, Meatballs', decor: 2},
]
const SeaFood = [
    {id: 5, image:risotto, title: 'Risotto', price: 45, protein: '150g',additives: 4.5 ,material: 'Rice, Shrimps, Squids, Oysters', decor: 4},
    {id: 6, image:salmon, title: 'Salmon', price: 35, protein: '150g',additives: 4 ,material: 'Salmon', decor: 2},
    {id: 7, image:sashimi, title: 'Sashimi', price: 55, protein: '200g',additives: 4.5 ,material: 'Fresh sea foods', decor: 5},
    {id: 8, image:squid, title: 'Squid Fried', price: 30, protein: '300g',additives: 4 ,material: 'Squids', decor: 1},
]
const Dessert = [
    {id: 9, image:chocolate, title: 'Chocolate Pie', price: 20, protein: '0g',additives: 4 ,material: 'Chocolate, Flour', decor: 1},
    {id: 10, image:icecream, title: 'Ice Cream', price: 24, protein: '2g',additives: 4.5 ,material: 'Milk, Fruits', decor: 1},
    {id: 11, image:parfait, title: 'Parfait', price: 30, protein: '0g',additives: 4.5 ,material: 'Fruits', decor: 5},
    {id: 12, image:kiwi, title: 'Kiwi Pie', price: 32, protein: '0g',additives: 3.5 ,material: 'Kiwi, Cream, Flour', decor: 1},
]
const Drink = [
    {id: 13, image:coca, title: 'Coca', price: 5, protein: '0g',additives: 3.5 ,material: 'None', decor: 1},
    {id: 14, image:juice, title: 'Juice', price: 15, protein: '0g',additives: 4 ,material: 'Fruits', decor: 1},
]

const All = [
    {id: 1, image:chicken, title: 'Chicken', price: 75, protein: '1000g',additives: 4.5 ,material: 'Chicken, Vegetables', decor: 2},
    {id: 2, image:lamp, title: 'Lamp', price: 40,  protein: '250g',additives: 4 ,material: 'Lamp, Sauce', decor: 1},
    {id: 3, image:steak, title: 'Beefsteak', price: 50, protein: '200g',additives: 5 ,material: 'Beef, Spices', decor: 1},
    {id: 4, image:spaghetti, title: 'Spaghetti', price: 25, protein: '300g',additives: 3.5 ,material: 'Pasta, Meatballs', decor: 2},
    {id: 5, image:risotto, title: 'Risotto', price: 45, protein: '150g',additives: 4.5 ,material: 'Rice, Shrimps, Squids, Oysters', decor: 4},
    {id: 6, image:salmon, title: 'Salmon', price: 35, protein: '150g',additives: 4 ,material: 'Salmon', decor: 2},
    {id: 7, image:sashimi, title: 'Sashimi', price: 55, protein: '200g',additives: 4.5 ,material: 'Fresh sea foods', decor: 5},
    {id: 8, image:squid, title: 'Squid Fried', price: 30, protein: '300g',additives: 4 ,material: 'Squids', decor: 1},
    {id: 9, image:chocolate, title: 'Chocolate Pie', price: 20, protein: '0g',additives: 4 ,material: 'Chocolate, Flour', decor: 1},
    {id: 10, image:icecream, title: 'Ice Cream', price: 24, protein: '2g',additives: 4.5 ,material: 'Milk, Fruits', decor: 1},
    {id: 11, image:parfait, title: 'Parfait', price: 30, protein: '0g',additives: 4.5 ,material: 'Fruits', decor: 5},
    {id: 12, image:kiwi, title: 'Kiwi Pie', price: 32, protein: '0g',additives: 3.5 ,material: 'Kiwi, Cream, Flour', decor: 1},
    {id: 13, image:coca, title: 'Coca', price: 5, protein: '0g',additives: 3.5 ,material: 'None', decor: 1},
    {id: 14, image:juice, title: 'Juice', price: 15, protein: '0g',additives: 4 ,material: 'Fruits', decor: 1},
]

export { All , Meat, SeaFood, Dessert, Drink}
