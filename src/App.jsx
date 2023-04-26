import Card from './component/card';
import './App.css';
import React from 'react'

let data = [
  {
    link:"./c.jpg",
         brand:"Puma tshirt",
         product:"Tshirt quality product",
         price:"$60",
         rating:"rating-4",
         alertMessage:"‘Product of is  1 , which is Shoes of brand puma has of $60 is added in the cart , please proceed to pay !!! "
 },
 {
  link:"./a.jpg",
  brand:"nykee",
  product:"Tshirt quality product",
  price:"$70",
  rating:"rating-5",
  alertMessage:"‘Product of is  2 , which is tshirt of brand nykee has of rupees $70 is added in the cart , please proceed to pay !!! ",
},
{
  link:"/b.jpg",
        brand:"dressbery",
        product:"Tshirt quality produc",
        price:"$50",
        rating:"rating-3",
        alertMessage:"‘Product of is  3 , which is tshirt of brand dressbery has of rupees $50 is added in the cart , please proceed to pay !!! "
},


]






function App() {
  return (
    <div className="App">
     <Card data={data} />
    </div>
  );
}


export default App;