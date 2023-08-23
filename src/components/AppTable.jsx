/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import CustomField from "./CustomField";
import {
  Box,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon, UpDownIcon } from "@chakra-ui/icons";
import * as data from "../serverResponse.json";
import dataSchema from "./tableSchema";
import * as dayjs from "dayjs";
import Filter from "./Filter";
import { compareValues } from "../utils";

const AppTable = () => {
  const [schema, setSchema] = useState(dataSchema);
  const [sortType, setSortType] = useState(null);
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [mainData, setMainData] = useState(data.reservations);
  const [SearchData] = useState(data.reservations);
  const [searchValue, setSearchValue] = useState("");

  const onSearch = (searchValue) => {
    const filteredData = SearchData.filter((item) => {
      const fullName = `${item.customer.firstName} ${item.customer.lastName}`;
      return fullName.toUpperCase().indexOf(searchValue.toUpperCase()) > -1;
    });

    setMainData(filteredData);
    setSearchValue(searchValue);
  };

  const handleGetVisibleFields = (schema) => {
    let visibleFields = schema.filter((entry) => {
      return entry.isVisible === true;
    });
    return visibleFields;
  };

  useEffect(() => {
    let visibleFields = handleGetVisibleFields(dataSchema);
    setSchema(visibleFields);

    let sorted = [].slice
      .call(mainData)
      .sort(compareValues(sortType, sortOrder));

    setSortedData(sorted);
  }, [mainData, sortType, sortOrder]);

  const handleRenderRow = (rowData, idx) => {
    return (
      <tr key={idx} className={styles.Table__table_row}>
        {schema.map(({ accessor, name, isVisible, type }, index) => {
          if (isVisible) {
            if (accessor.includes(".")) {
              const splitAccessors = accessor.split(".");
              return (
                <Td data-label={name} key={`${accessor}-${index}`}>
                  {rowData[splitAccessors[0]][splitAccessors[1]]}
                </Td>
              );
            }
            if (accessor === "serial_count") {
              return (
                <Td data-label={name} key={`${accessor}-${index}`}>
                  {idx + 1}
                </Td>
              );
            }
            if (type === "date") {
              return (
                <Td data-label={name} key={`${accessor}-${index}`}>
                  {dayjs(rowData[accessor]).format("YYYY-MM-DD")}
                </Td>
              );
            }
            return (
              <Td data-label={name} key={`${accessor}-${index}`}>
                {rowData[accessor]}
              </Td>
            );
          }
          return null;
        })}
      </tr>
    );
  };

  const handleSort = async (data) => {
    let orderType = {
      asc: "asc",
      desc: "desc",
    };

    let order;

    if (data !== sortType) {
      setSortType(data);
      setSortOrder(orderType.desc);
    } else {
      if (sortOrder === orderType.asc) {
        order = orderType.desc;
      } else {
        order = orderType.asc;
      }
      setSortType(data);
      setSortOrder(order);
    }
  };

  const onCustomFieldChange = (updatedOptions) => {
    let updatedSchema = updatedOptions.filter((item) => item.isVisible);
    return setSchema(updatedSchema);
  };

  return (
    <>
      <Box background={"white"} borderRadius={"5px"} width={"100%"}>
        <Filter data={data.reservations} setMainData={setMainData} />
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          borderBottom={"1px #f0f4f9 solid"}
          paddingBottom={"20px"}
        >
          <Box>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder="Search by Name"
                onChange={(e) => onSearch(e.target.value)}
                value={searchValue}
              />
            </InputGroup>
          </Box>
          <CustomField
            fieldOptions={schema}
            onCustomFieldChange={onCustomFieldChange}
          />
        </Flex>
        <TableContainer overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                {mainData.length > 0 &&
                  schema.map(({ name, accessor, sortable }, index) => {
                    return sortable ? (
                      <Th
                        onClick={() => handleSort(accessor)}
                        className={styles.Table__sort}
                        key={`${name}-${index}`}
                      >
                        <Flex justifyContent={"center"} gap={"2"}>
                          {name}
                          <UpDownIcon />
                        </Flex>
                      </Th>
                    ) : (
                      <Th
                        className={styles.Table__sort}
                        key={`${name}-${index}`}
                      >
                        {name}
                      </Th>
                    );
                  })}
              </Tr>
            </Thead>

            <Tbody>
              <>
                {sortedData.length > 0 && (
                  <>
                    {sortedData.map((row, idx) => {
                      return handleRenderRow(row, idx);
                    })}
                  </>
                )}
              </>

              <>
                {sortedData < 1 && mainData.length > 0 && (
                  <>
                    {mainData.map((row, idx) => {
                      return handleRenderRow(row, idx);
                    })}
                  </>
                )}
              </>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default AppTable;
