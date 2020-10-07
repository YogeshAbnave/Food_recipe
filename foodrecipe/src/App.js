import React, {useState ,useEffect} from 'react';
import Header from './Component/Header';
import './App.css';
import Recipes from './Component/Recipes';
import Axios from 'axios';


function App() {
  
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const APP_ID="1bbb4489";
  const APP_KEY="7f0d52426156840dc30d1b581e5cfc1b";
  useEffect( ()=>{
    getRecipes();
  
  },[]);

  const getRecipes = async()=>{
  const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  console.log(res);

  setRecipes(res.data.hits);

  }

  const onInputChange = (e)=>{
        setSearch(e.target.value);
  };
  const onSearchClick = ()=>{
    getRecipes();
  }
  return (
    <div className="App">
      
       <Header search={search} 
       onInputChange={onInputChange}
       onSearchClick={onSearchClick}/>

       <div className="container">
       <Recipes recipes={recipes}/>
         </div>
    </div>
  );
}

export default App;
