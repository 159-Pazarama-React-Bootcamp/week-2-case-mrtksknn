import React from 'react'
import todo from './mockData.json'

const Item = ({ item }) => {
  return (
    <div>
      <li className="list-group-item">{item.content}</li>
    </div>
  )
}

export default Item
