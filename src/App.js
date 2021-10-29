import React from "react";
import Search from "./component/search/Search";
import ItemList from "./component/ItemList";

function App() {
  const genres = [
    {id: 1, title: "ALL"},
    {id: 2, title: "DOCUMENTARY"},
    {id: 3, title: "COMEDY"},
    {id: 4, title: "HORROR"},
    {id: 5, title: "CRIME"}
  ]

  const title = "SEARCH";

  return (
      <div>
        <Search text={title}/>
        <ItemList genres={genres}/>
      </div>
  );
}

export default App;
