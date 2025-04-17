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
} from '@chakra-ui/react';
import { MdMail, MdLocalPhone, MdLocationPin } from 'react-icons/md';
import { RiLinkedinBoxFill } from 'react-icons/ri';
import { useResume } from '../../Context';

const TemplatesFive = () => {
  const { about, summary, educationList, workList, skills, projects, printElem } = useResume();

  return (
    <Box ref={printElem} bg="white" color="black" px={10} py={6} fontFamily="sans-serif">
      {/* Header */}
      <VStack spacing={1} alignItems="flex-start">
        <Heading size="xl">{about.name || 'Your Name'}</Heading>
        <Text fontSize="lg" color="gray.700">
          {about.role || 'Your Role'}
        </Text>
        <HStack spacing={4} wrap="wrap">
          <HStack spacing={1}><MdLocalPhone /><Text>{about.phone || 'Phone'}</Text></HStack>
          <HStack spacing={1}><MdMail /><Text>{about.email || 'Email'}</Text></HStack>
          <HStack spacing={1}><MdLocationPin /><Text>{about.address || 'Location'}</Text></HStack>
          {about.linkedin && (
            <HStack spacing={1}><RiLinkedinBoxFill /><Text>{about.linkedin}</Text></HStack>
          )}
        </HStack>
      </VStack>

      <Divider my={4} />

      {/* Key Achievements */}
      <HStack justifyContent="space-between" alignItems="flex-start" spacing={10} mb={4}>
        <VStack alignItems="flex-start">
          <Heading size="sm">KEY ACHIEVEMENTS</Heading>
          <Text fontWeight="bold">Record Project Delivery</Text>
          <Text fontSize="sm">Facilitated the development of a full-featured SMB product in just 4 months.</Text>
        </VStack>
        <VStack alignItems="flex-start">
          <Text fontWeight="bold">Taking On Challenges</Text>
          <Text fontSize="sm">Moved to the USA and led a project no one else would take — achieved 90% lead time predictability.</Text>
        </VStack>
      </HStack>

      {/* Education */}
      <Box mb={4}>
        <Heading size="sm" mb={2}>EDUCATION</Heading>
        {educationList.map((edu, index) => (
          <Box key={index}>
            <HStack justifyContent="space-between">
              <Text fontWeight="bold">{edu.degree || 'Degree'}</Text>
              <Text>{edu.startYr} - {edu.endYr}</Text>
            </HStack>
            <Text>{edu.school || 'Institution Name'}</Text>
            <Text fontSize="sm">GPA {edu.grade || 'N/A'}</Text>
          </Box>
        ))}
      </Box>

      {/* Experience */}
      <Box mb={4}>
        <Heading size="sm" mb={2}>EXPERIENCE</Heading>
        {workList.map((work, index) => (
          <Box key={index} mb={3}>
            <HStack justifyContent="space-between">
              <Text fontWeight="bold">{work.position || 'Position'}</Text>
              <Text fontSize="sm">{work.startDate || 'Start'} - {work.endDate || 'End'}</Text>
            </HStack>
            <Text fontStyle="italic">{work.company || 'Company'} | {work.type || 'Work Type'}</Text>
            <Text fontSize="sm">{work.location || 'Location'}</Text>
            <UnorderedList>
              {(work.description || '').split('\n').map((point, idx) => (
                <ListItem key={idx} fontSize="sm">{point}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
      </Box>

      {/* Skills */}
      <Box mb={4}>
        <Heading size="sm" mb={2}>TECHNICAL SKILLS</Heading>
        <Wrap>
          {skills.map((skill, index) => (
            <Tag key={index} size="md" variant="subtle" colorScheme="gray">
              <TagLabel>{skill.name}</TagLabel>
            </Tag>
          ))}
        </Wrap>
      </Box>

      {/* Projects */}
      <Box mb={4}>
        <Heading size="sm" mb={2}>PROJECTS</Heading>
        {projects.map((proj, index) => (
          <Box key={index}>
            <Text fontWeight="bold">{proj.name || 'Project Name'}</Text>
            <Text fontSize="sm">{proj.description || 'Project description goes here.'}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TemplatesFive;
