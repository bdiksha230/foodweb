import React from 'react'
import new_collection from '../assets/Newcollection'
import Item from '../Item/Item'

const Newcollection = () => {
  return (
    <div className="new-collection">
        <div className="row">
        {new_collection.map((item, i) => {
            return <Item key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
             />
        })}
      </div>
    </div>
  )
}

export default Newcollection
