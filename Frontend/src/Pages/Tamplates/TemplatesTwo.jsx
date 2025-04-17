import {
    Box,
    Heading,
    HStack,
    VStack,
    Text,
    Wrap,
    Tag,
    TagLabel,
    Divider,
    UnorderedList,
    ListItem,
  } from "@chakra-ui/react";
  import { useResume } from "../../Context";
  import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
  import { RiLinkedinBoxFill } from "react-icons/ri";
  import { BiLinkExternal } from "react-icons/bi";
  
  const TemplateTwo = () => {
    const { theme, about, summary, educationList, skills, workList, projects, printElem } =
      useResume();
  
    const sectionTitle = (title) => (
      <Heading size="md" color={theme} mt={4} mb={2}>
        {title}
      </Heading>
    );
  
    return (
      <Box
        ref={printElem}
        w="816px" // width for A4 size
        h="1056px" // height for A4 size
        p={6}
        bg="white"
        color="gray.800"
        fontFamily="Poppins"
        boxShadow="md"
        overflowY="auto"
        position="relative"
      >
        <VStack spacing={3} align="start">
          {/* Header */}
          <Box textAlign="center" w="full" mb={4}>
            <Heading fontSize="2xl">{about.name || "John Doe"}</Heading>
            <Text>{about.role || "Full Stack Developer"}</Text>
          </Box>
  
          {/* Contact Info */}
          <HStack spacing={6} fontSize="sm" color="gray.600" justify="center" w="full">
            <HStack><MdMail /> <Text>{about.email || "example@gmail.com"}</Text></HStack>
            <HStack><MdLocalPhone /> <Text>{about.phone || "+91-9999999999"}</Text></HStack>
            <HStack><MdLocationPin /> <Text>{about.address || "Delhi, India"}</Text></HStack>
            {about.linkedin && (
              <HStack>
                <RiLinkedinBoxFill />
                <Text as="a" href={about.linkedin} target="_blank">LinkedIn</Text>
              </HStack>
            )}
          </HStack>
  
          <Divider />
  
          {/* Summary */}
          {sectionTitle("Professional Summary")}
          <Text fontSize="sm" textAlign="justify">
            {summary || "An enthusiastic developer with a passion for building scalable applications."}
          </Text>
  
          {/* Education */}
          {sectionTitle("Education")}
          <VStack align="start" spacing={2}>
            {educationList.map((edu, index) => (
              <Box key={index}>
                <Text fontWeight="bold">{edu.degree || "B.Tech Computer Science"}</Text>
                <Text fontSize="sm">{edu.school || "XYZ University"}</Text>
                <Text fontSize="xs" color="gray.500">
                  {edu.startYr || "2015"} - {edu.endYr || "2019"} | {edu.grade || "8.5 CGPA"}
                </Text>
              </Box>
            ))}
          </VStack>
  
          {/* Skills */}
          {sectionTitle("Skills")}
          <Wrap>
            {skills.map((skill, index) => (
              <Tag key={index} colorScheme="teal" variant="solid">
                <TagLabel>{skill.name}</TagLabel>
              </Tag>
            ))}
          </Wrap>
  
          {/* Work Experience */}
          {sectionTitle("Work Experience")}
          <VStack align="start" spacing={2}>
            {workList.map((work, index) => (
              <Box key={index}>
                <Text fontWeight="bold">{work.position || "Software Engineer"}</Text>
                <Text fontSize="sm">{work.company || "ABC Corp"} - {work.type || "Full-time"}</Text>
                <Text fontSize="xs" color="gray.500">
                  {work.startDate || "2020"} - {work.endDate || "2023"}
                </Text>
                <Text fontSize="sm" textAlign="justify">
                  {work.description || "Worked on frontend development and API integration."}
                </Text>
              </Box>
            ))}
          </VStack>
  
          {/* Projects */}
          {sectionTitle("Projects")}
          <VStack align="start" spacing={2}>
            {projects.map((project, index) => (
              <Box key={index}>
                <HStack as="a" href={project.url} target="_blank" spacing={1}>
                  <Text fontWeight="bold">{project.name || "My Project"}</Text>
                  <BiLinkExternal />
                </HStack>
                <UnorderedList fontSize="sm">
                  <ListItem>
                    {project.description || "A cool project that solves problems."}
                  </ListItem>
                </UnorderedList>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Box>
    );
  };
  
  export default TemplateTwo;
  