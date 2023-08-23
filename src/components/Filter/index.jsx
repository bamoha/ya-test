/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FilterOptions from "./FilterOptions";
import { onlyUnique } from "../../utils";

const Filter = ({ data, setMainData }) => {
  let filterData = data;
  const [itemsToBeFiltered, setItemsToBeFiltered] = useState({
    status: [],
    area: [],
    shift: [],
    businessDate: [],
  });

  const [selected, setSelected] = useState({
    status: "",
    area: "",
    shift: "",
    businessDate: "",
  });

  const selectItems = (val, type) => {
    setSelected({ ...selected, [type]: val });
  };

  const filterItems = () => {
    const filteredData = filterData.filter((item) => {
      for (let key in selected) {
        if (item[key] === undefined || item[key] != selected[key]) return false;
      }
      return true;
    });
    setMainData(filteredData);
  };

  const clearFilters = () => {
    setMainData(data);
    // setFilterData(data);
    setSelected({});
  };

  useEffect(() => {
    const shiftArray = data
      .map(function (item) {
        return item.shift;
      })
      .filter(onlyUnique);
    const statusArray = data
      .map(function (item) {
        return item.status;
      })
      .filter(onlyUnique);
    const areaArray = data
      .map(function (item) {
        return item.area;
      })
      .filter(onlyUnique);
    const dateArray = data
      .map(function (item) {
        return item.businessDate;
      })
      .filter(onlyUnique);

    setItemsToBeFiltered({
      status: statusArray,
      area: areaArray,
      shift: shiftArray,
      businessDate: dateArray,
    });
  }, [data]);

  return (
    <FilterOptions
      selected={selected}
      itemsToBeFiltered={itemsToBeFiltered}
      filterItems={filterItems}
      clearFilters={clearFilters}
      selectItems={selectItems}
    />
  );
};

export default Filter;
