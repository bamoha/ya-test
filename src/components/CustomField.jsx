/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./styles.module.scss";
import { Box, Checkbox, Flex, Input } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

const CustomField = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState(props.fieldOptions);
  const [optionsFilterText, setOptionsFilterText] = useState("");

  const handleChecked = ({ target: { checked } }, index) => {
    let newOptions = options.slice();
    newOptions[index].isVisible = checked;
    setOptions(newOptions);
    onCustomFieldChange();
    props.onCustomFieldChange(newOptions);
  };

  const onCustomFieldChange = () => {
    props.onCustomFieldChange(options);
  };
  const toggleOptions = () => setShowOptions(!showOptions);

  const renderOptions = () => {
    return (
      options &&
      showOptions && (
        <>
          <div className={styles.customFieldOptions}>
            <Input
              m={2}
              w={"inherit"}
              value={optionsFilterText}
              placeholder={"Type to filter"}
              onChange={(e) => {
                setOptionsFilterText(e.target.value);
              }}
              autoFocus
            />
            {options.map(({ name, accessor, isVisible }, index) => {
              const shouldShowItem = name
                .toLowerCase()
                .includes(optionsFilterText);

              return (
                <label
                  key={`${accessor}-${index}`}
                  className={styles.customFieldOption}
                  htmlFor={`${accessor}-${index}`}
                  style={{
                    ...(!shouldShowItem ? { display: "none" } : {}),
                  }}
                >
                  <Checkbox
                    className={styles.customFieldCheckbox}
                    name={accessor}
                    id={`${accessor}-${index}`}
                    type="checkbox"
                    defaultChecked={isVisible}
                    onChange={(e) => handleChecked(e, index)}
                    mr={"2"}
                  />
                  {name}
                </label>
              );
            })}
          </div>
        </>
      )
    );
  };

  return (
    <Box position={"relative"}>
      <Flex
        alignItems={"center"}
        border={"1px solid #d2ddeb"}
        background={"#fff"}
        borderRadius={"3px"}
        paddingX={".625rem"}
        paddingY={"0"}
        onClick={toggleOptions}
        gap={"3"}
      >
        <SettingsIcon />
        <span>Custom Fields</span>
      </Flex>
      {renderOptions()}
    </Box>
  );
};

export default CustomField;
