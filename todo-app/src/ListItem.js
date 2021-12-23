import React from 'react'
import todo from './mockData.json'
import Item from './Item'

const ListItem = () => {
  return (
    <div>
      <ul className="list-group">
        {todo.Items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default ListItem
