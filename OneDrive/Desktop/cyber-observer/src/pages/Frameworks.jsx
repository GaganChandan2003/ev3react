import {
  Box,
  Button,
  Flex,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Frameworks = () => {
  return (
    <Flex style={{ backgroundColor: "black", height: "100vh", width: "90%" }}>
      <Flex
        style={{
          width: "100%",
          justifyContent: "space-between",
          padding: "20px",
          color: "white",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        <Text>Frameworks List</Text>
      </Flex>
      <Box
        style={{
          backgroundColor: "#1A1B1E",
          height: "90vh",
          width: "100%",
          position: "absolute",
          bottom: "0px",
          padding: "30px",
        }}
      >
        <Tabs position="relative" variant="unstyled">
          <TabList color="white">
            <Box
              style={{
                borderRight: "1px solid grey",
                height: "35px",
                padding: "0px 20px",
                fontWeight: "500",
              }}
            >
              <Tab>Alerts</Tab>
            </Box>
            <Box
              style={{
                borderRight: "1px solid grey",
                height: "35px",
                padding: "0px 20px",
                fontWeight: "500",
              }}
            >
              <Tab>Active</Tab>
            </Box>
            <Box
              style={{
                borderRight: "1px solid grey",
                height: "35px",
                padding: "0px 20px",
                fontWeight: "500",
              }}
            >
              <Tab>Virtual</Tab>
            </Box>
            <Box
              style={{
                borderRight: "1px solid grey",
                height: "35px",
                padding: "0px 20px",
                fontWeight: "500",
              }}
            >
              <Tab>Exists</Tab>
            </Box>
            <Box style={{ padding: "0px 20px", fontWeight: "500" }}>
              <Tab>Supported</Tab>
            </Box>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="white"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default Frameworks;
