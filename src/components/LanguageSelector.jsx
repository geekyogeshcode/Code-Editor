import { Box, Text, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import React from "react";
import {LANGUAGE_VERSIONS}from '../constance';

const languauges = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({language,onSelect}) => {
  return (
    <Box ml={2} mb={4}>
      {/* <Text mb={2} fontSize="lg" color="gray.500">
        Languauge {" "}
      </Text> */}
      <Menu isLazy>
        <MenuButton as={Button}>
          {language}
        </MenuButton>
        <MenuList  >
        {languauges.map(([lang, version]) => (
            <MenuItem key={lang} onClick={() => onSelect(lang)}>
              {lang} &nbsp;{" "} 
              <Text as="span" color="gray" fontSize="sm">
                ( {version} )
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
