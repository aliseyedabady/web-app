import React from "react";

const FlatList = ({ renderItem = () => {}, data = [] }) => {
  return data.map((item, count) => {
    return renderItem(item, count);
  });
};

export default FlatList;
