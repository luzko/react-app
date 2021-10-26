import React from 'react';
import Item from "./item/Item";

const ItemList = ({genres}) => {
  return (
      <div>
        {genres.map(genre =>
            <Item genre={genre} key={genre.id}/>
        )}
      </div>
  );
};

export default ItemList;
