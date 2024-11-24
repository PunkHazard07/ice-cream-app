import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "./redux/reducer/favoriteSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const favoriteFlavours = useSelector((state) => state.favourites);
  console.log("My store", favoriteFlavours);
  const [newFlavor, setnewFlavor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFavourite(newFlavor));
    //clear input field
    setnewFlavor("");
  };

  const handleRemoveFavourite = (flavour) => {
    dispatch(removeFavourite(flavour));
  };

  return (
    <>
      <h2>My Favourite Ice Cream Flavour</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Flavour"
            value={newFlavor}
            onChange={(e) => setnewFlavor(e.target.value)}
          />
          <button type="submit">Add New Flavour</button>
        </form>
        
      </div>

      <div>
        {favoriteFlavours.map((flavor, index) => (
          <div key={index}>
            {flavor}
            <button onClick={() => handleRemoveFavourite(flavor)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
