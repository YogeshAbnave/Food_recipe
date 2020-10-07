import React from 'react';

const Header = (props)=> {
    const {search, onInputChange ,onSearchClick}=props;
    return(
        <div className="jumbotron">
        <h1 className="display-1">
        <i class="material-icons brand-icon">
            fastfood
            </i>Food Recipes</h1>
            <div className="input-group mb-3 w-50 mx-auto">
        <input type="text" className="form-control" placeholder="Search Your Recipe"
            value={search} 
             onChange={onInputChange} />
        <div className="input-group-append">
         <button className="btn btn-dark" onClick={onSearchClick}>Search</button>
        </div>
      </div>
        </div>
    )
}
export default Header