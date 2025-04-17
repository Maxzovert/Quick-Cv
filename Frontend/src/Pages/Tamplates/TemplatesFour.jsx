import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  Wrap,
  Tag,
  TagLabel,
  UnorderedList,
  ListItem,
  Divider,
} from "@chakra-ui/react";
import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import { useResume } from "../../Context";

const TemplatesFour = () => {
  const { theme, about, summary, educationList, skills, workList, projects, printElem } =
    useResume();

  return (
    <Box w="full" p={6} bg="white" color="black" ref={printElem}>
      {/* Header Section */}
      <VStack spacing={1} alignItems="flex-start" mb={4}>
        <Heading size="lg">{about.name || "Jhon Doe"}</Heading>
        <Text fontSize="md">{about.role || "Full Stack Web Developer"}</Text>
      </VStack>

      <Divider />

      {/* Contact Info */}
      <HStack justifyContent="space-between" alignItems="center" spacing={4} my={4}>
        <HStack spacing={1}>
          <MdMail />
          <Text>{about.email || "example@gmail.com"}</Text>
        </HStack>
        <HStack spacing={1}>
          <MdLocalPhone />
          <Text>{about.phone || "+91999999999"}</Text>
        </HStack>
        <HStack spacing={1}>
          <MdLocationPin />
          <Text>{about.address || "Delhi, Delhi"}</Text>
        </HStack>
        {about.linkedin && (
          <HStack spacing={1}>
            <RiLinkedinBoxFill />
            <Text as="a" href={about.linkedin}>
              LinkedIn
            </Text>
          </HStack>
        )}
      </HStack>

      <Divider />

      {/* Summary */}
      <VStack alignItems="flex-start" spacing={1} my={4}>
        <Heading size="md">Summary</Heading>
        <Text>
          {summary && summary.trim() !== ""
            ? summary
            : "Add detail about you or generate a profile summary using AI"}
        </Text>
      </VStack>

      {/* Education */}
      <VStack alignItems="flex-start" spacing={2} my={4}>
        <Heading size="md">Education</Heading>
        {educationList.map((education, index) => {
          const { degree, school, startYr, endYr, grade } = education;
          return (
            <Box key={index}>
              <Text fontWeight="bold">
                {degree || "B.Tech Computer Engineering"}
              </Text>
              <Text>{school || "College of Engineering Pune"}</Text>
              <HStack fontSize="sm" justifyContent="space-between" w="full">
                <Text>
                  {startYr || "2014"} - {endYr || "2018"}
                </Text>
                <Text>{grade || "8.7 CGPA"}</Text>
              </HStack>
            </Box>
          );
        })}
      </VStack>

      {/* Work Experience */}
      <VStack alignItems="flex-start" spacing={2} my={4}>
        <Heading size="md">Work Experience</Heading>
        {workList.map((work, index) => {
          const { position, company, type, startDate, endDate, description } = work;
          return (
            <Box key={index}>
              <Text fontWeight="bold">
                {position || "Full Stack Developer"}
              </Text>
              <Text fontSize="sm">
                {company || "XYZ Infotech Services"} - {type || "Full-time"}
              </Text>
              <Text fontSize="sm" fontStyle="italic">
                {startDate || "2018-03"} - {endDate || "2021-12"}
              </Text>
              <Text fontSize="sm">
                {description ||
                  "Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed."}
              </Text>
            </Box>
          );
        })}
      </VStack>

      {/* Skills */}
      <VStack alignItems="flex-start" spacing={2} my={4}>
        <Heading size="md">Skills</Heading>
        <Wrap>
          {skills.map((skill, index) => (
            <Tag key={index} size="md" borderRadius="md" variant="subtle">
              <TagLabel>{skill.name}</TagLabel>
            </Tag>
          ))}
        </Wrap>
      </VStack>

      {/* Projects */}
      <VStack alignItems="flex-start" spacing={2} my={4}>
        <Heading size="md">Projects</Heading>
        {projects.map((project, index) => {
          const { name, url, description } = project;
          return (
            <Box key={index}>
              <HStack as="a" href={url} target="_blank" spacing={1}>
                <Text fontWeight="bold">{name || "Project Name"}</Text>
                <BiLinkExternal />
              </HStack>
              <UnorderedList pl={4}>
                <ListItem>
                  <Text fontSize="sm">
                    {description ||
                      "Lorem ipsum dolor sit amet consectetur adipisicing."}
                  </Text>
                </ListItem>
              </UnorderedList>
            </Box>
          );
        })}
      </VStack>
    </Box>
  );
};

export default TemplatesFour;
