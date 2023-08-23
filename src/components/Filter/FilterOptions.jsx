import { ChevronDownIcon, SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

/* eslint-disable react/prop-types */
const FilterOptions = ({
  itemsToBeFiltered,
  filterItems,
  clearFilters,
  selected,
  selectItems,
}) => {
  return (
    <Box mb={"10"}>
      <Flex gap={"5"} flexWrap={"wrap"}>
        {Object.keys(itemsToBeFiltered).map((key) => {
          return (
            <Menu key={key}>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                textTransform={"capitalize"}
              >
                {key}: {selected[key]}
              </MenuButton>
              <MenuList>
                {itemsToBeFiltered[key].map((item) => (
                  <MenuItem onClick={() => selectItems(item, key)} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          );
        })}
        <Button
          leftIcon={<SearchIcon />}
          colorScheme="teal"
          variant="ghost"
          onClick={() => filterItems()}
        >
          Filter
        </Button>
        <Button
          leftIcon={<SmallCloseIcon />}
          colorScheme="red"
          variant="ghost"
          onClick={() => clearFilters()}
        >
          Clear
        </Button>
      </Flex>
    </Box>
  );
};

export default FilterOptions;
