import React from 'react';
import { Items } from '../../models/Items';
import Item from '../Item/Item';

interface Props {
  items: Items | undefined;
  onSelect: (value: string) => void;
}

const ItemList: React.FC<Props> = (props) => {
  
  return (
    <React.Fragment>
      {
        props.items && props.items.items && props.items.items.map(item => {
          return (
            <div key={item.id} className="pointer">
              <Item item={item} onClick={() => props.onSelect(item.id)} />
            </div>
          )
        })
      }
    </React.Fragment>
  )
}

export default ItemList;