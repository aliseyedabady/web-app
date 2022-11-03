import React from "react";

const FlatList = ({ renderItem = () => {}, data = [] }) => {
  return (
    <div>
      {data.map((item, count) => {
        return renderItem(item, count);
      })}
    </div>
  );
};

export default FlatList;
