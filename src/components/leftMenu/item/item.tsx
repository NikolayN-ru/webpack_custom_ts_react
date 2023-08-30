import React, { FC } from 'react'
import './item.scss';

const ItemLeftMenu:FC<any> = ({active=false}) => {
  return (
    <div className={active ? "active" : "item"}>
        <div className="avatar"></div>
        <p className="name">Jak Nikolas</p>
    </div>
  )
}

export default ItemLeftMenu