import { Heading } from "@chakra-ui/react";
import { useState } from "react";
import TemplatesOne from "../Pages/Tamplates/TemplatesOne";
import TemplatesTwo from "../Pages/Tamplates/TemplatesTwo";
import { useResume } from "../Context";
import TemplatesThree from "../Pages/Tamplates/TemplatesThree";
import TemplatesFour from "../Pages/Tamplates/TemplatesFour";
import TemplatesFive from "../Pages/Tamplates/TemplatesFive";

const ResumePreview = () => {
  const [Templet, setTemplet] = useState("1");
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
      case "1":
        return <TemplatesOne />;
      case "2":
        return <TemplatesTwo />;
      case "3":
        return <TemplatesThree />;
      case "4":
        return <TemplatesFour />;
      case "5":
        return <TemplatesFive />;
      default:
        return <TemplatesTwo />;
    }
  };

  return <>{renderTemplate()}</>;
};

export default ResumePreview;
