import React, { FC } from "react";
import "./leftMenu.scss";
import ItemLeftMenu from "./item/item";
import Search from "./search/search";

const LeftMenu: FC<any> = ({}) => {
  return (
    <div className="wrapper">
      <Search />
      <div className="title">
        <div className="count">213</div>
        <div className="mark">Выбрать</div>
      </div>
      <ItemLeftMenu />
      <ItemLeftMenu />
      <ItemLeftMenu active />
      <ItemLeftMenu />
      <ItemLeftMenu />
      <ItemLeftMenu />
    </div>
  );
};

export default LeftMenu;
