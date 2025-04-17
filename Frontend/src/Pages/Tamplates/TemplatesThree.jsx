import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Divider,
  Tag,
  TagLabel,
  Wrap,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import { useResume } from "../../Context";

const TemplatesThree = () => {
  const { theme, about, summary, educationList, skills, workList, projects, printElem } = useResume();

  return (
    <Box
      bg="white"
      minH="100vh"
      p={6}
      color="gray.800"
      ref={printElem}
    >
      <HStack alignItems="flex-start" spacing={8}>
        {/* Left Column */}
        <VStack
          spacing={6}
          align="flex-start"
          bg="gray.50"
          p={6}
          rounded="md"
          w="30%"
          boxShadow="md"
        >
          {about.picture && (
            <img
              src={about.picture}
              alt="avatar"
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          )}
          <Box>
            <Heading size="md">{about.name || "John Doe"}</Heading>
            <Text color="gray.500">{about.role || "Web Developer"}</Text>
          </Box>
          <Divider />
          <VStack align="flex-start" spacing={2} fontSize="sm">
            <HStack><MdMail /><Text>{about.email || "example@gmail.com"}</Text></HStack>
            <HStack><MdLocalPhone /><Text>{about.phone || "+9199999999"}</Text></HStack>
            <HStack><MdLocationPin /><Text>{about.address || "Delhi, India"}</Text></HStack>
            {about.linkedin && (
              <HStack><RiLinkedinBoxFill /><Text as="a" href={about.linkedin} target="_blank">LinkedIn</Text></HStack>
            )}
          </VStack>
        </VStack>

        {/* Right Column */}
        <VStack spacing={8} align="flex-start" w="70%">
          {/* Summary */}
          <Box>
            <Heading size="md" color={theme}>Summary</Heading>
            <Text mt={2}>
              {summary && summary.trim() !== ""
                ? summary
                : "Add detail about yourself or generate a profile summary using AI."}
            </Text>
          </Box>

          {/* Education */}
          <Box w="full">
            <Heading size="md" color={theme}>Education</Heading>
            <VStack align="flex-start" spacing={3} mt={2}>
              {educationList.map(({ degree, school, startYr, endYr, grade }, index) => (
                <Box key={index}>
                  <Text fontWeight="bold">{degree || "B.Tech Computer Engineering"}</Text>
                  <Text fontSize="sm">{school || "College of Engineering Pune"}</Text>
                  <HStack fontSize="xs" fontStyle="italic" justify="space-between">
                    <Text>{startYr || "2014"} - {endYr || "2018"}</Text>
                    <Text>{grade || "8.7 CGPA"}</Text>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* Work Experience */}
          <Box w="full">
            <Heading size="md" color={theme}>Work Experience</Heading>
            <VStack align="flex-start" spacing={3} mt={2}>
              {workList.map(({ position, company, type, startDate, endDate, description }, index) => (
                <Box key={index}>
                  <Text fontWeight="bold">{position || "Full Stack Developer"}</Text>
                  <Text fontSize="sm">{company || "XYZ Infotech"} - {type || "Full-time"}</Text>
                  <Text fontSize="xs" fontStyle="italic">{startDate || "2018-03"} - {endDate || "2021-12"}</Text>
                  <Text fontSize="sm">{description || "Fixed bugs from existing websites and implemented enhancements."}</Text>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* Skills */}
          <Box w="full">
            <Heading size="md" color={theme}>Skills</Heading>
            <Wrap mt={2}>
              {skills.map((skill, index) => (
                <Tag key={index} bg={theme.replace("400", "500")} color="white">
                  <TagLabel>{skill.name}</TagLabel>
                </Tag>
              ))}
            </Wrap>
          </Box>

          {/* Projects */}
          <Box w="full">
            <Heading size="md" color={theme}>Projects</Heading>
            <VStack align="flex-start" spacing={3} mt={2}>
              {projects.map(({ name, url, description }, index) => (
                <Box key={index}>
                  <HStack as="a" href={url} target="_blank" spacing={1}>
                    <Text fontWeight="medium">{name || "Project Name"}</Text>
                    <BiLinkExternal />
                  </HStack>
                  <UnorderedList pl={5}>
                    <ListItem>
                      <Text fontSize="sm">{description || "Project description goes here."}</Text>
                    </ListItem>
                  </UnorderedList>
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
};

export default TemplatesThree;
