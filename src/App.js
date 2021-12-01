import React from 'react';
import foods from './foods.json';
import './App.css';
import {useState} from 'react'
import FoodBox from './components/FoodBox ';
import 'bulma/css/bulma.css';
import AddForm from './components/AddForm';
import Search from './components/Search';

function App() {
  const [foodsArray, setFoods] =  useState(foods)
  const [foodsArrayCopy, setFoodsCopy] =  useState(foods)
  const [form, setForm] = useState(false)
  function handleToggle(){
    setForm(!form)
  }
  function handleSubmit(event){
    event.preventDefault()
    let newFood = {
      name: event.target.name.value,
      calories: event.target.price.value,
      img: event.target.image.value
    }
    setFoods([newFood, ...foodsArray])
    setForm(false)
  }
  function handleSearch(event){
    let word = event.target.value
    let filteredFood = foodsArray.filter((food) => {
      return food.name.includes(word)
    })
    setFoodsCopy(filteredFood)
  }
  return (
    <div className="App">
    <Search btnSearch={handleSearch} />
      {
        form ? <AddForm btnSubmit={handleSubmit}/> : <button onClick={handleToggle}>Show Button</button>
      }
     {
      foodsArrayCopy.map((elem,i) =>{
        return (
            <div key={i}>
            <FoodBox foodsArray={elem}/>
            </div>
          )
        })
      }
    </div>
  );
}
export default App;

