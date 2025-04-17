import {
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import TemplatesOne from "../Pages/Tamplates/TemplatesOne";
import TemplatesTwo from "../Pages/Tamplates/TemplatesTwo";
import { useResume } from "../Context";

const ResumePreview = () => {
  const [Templet, setTemplet] = useState("two");
  const { theme } = useResume();

  const imgStyle = {
    width: "115px",
    height: "115px",
    margin: "15px",
    borderRadius: "50%",
  };

  const sectionTitle = (title) => (
    <Heading size="md" color={theme} mt={4} mb={2}>
      {title}
    </Heading>
  );

  const renderTemplate = () => {
    switch (Templet) {
      case "one":
        return <TemplatesOne />;
      case "two":
        return <TemplatesTwo />;
      default:
        return <TemplatesTwo/>;
    }
  };

  return <>{renderTemplate()}</>;
};

export default ResumePreview;
