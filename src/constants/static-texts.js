import { VscCheckAll } from "react-icons/vsc";
import { BsDownload } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { HiOutlinePencil } from "react-icons/hi2";


export const features = [
  {
    id: "feature-1",
    icon: <VscCheckAll color="#023642" size={30} />,
    title: "features.title1",
    content: "features.content1"
  },
  {
    id: "feature-2",
    icon: <HiOutlineArrowPath color="#023642" size={30} />,
    title: "features.title2",
    content: "features.content2"
  },
  {
    id: "feature-3",
    icon: <HiOutlineEye color="#023642" size={30} />,
    title: "features.title3",
    content: "features.content3"
  },
  {
    id: "feature-4",
    icon: <BsDownload color="#023642" size={30} />,
    title: "features.title4",
    content: "features.content4"
  },
  {
    id: "feature-5",
    icon: <HiOutlinePencil color="#023642" size={30} />,
    title: "features.title5",
    content: "features.content5"
  },
  {
    id: "feature-6",
    icon: <HiOutlineDevicePhoneMobile color="#023642" size={30} />,
    title: "features.title6",
    content: "features.content6"
  },

];


export const sectionDescriptions = [
  {
    title: "Education",
    description: "Share your educational background, including the institutions you attended and the dates of completion.",
  },
  {
    title: "Skills",
    description: "Highlight your relevant skills and abilities that make you a strong candidate for the desired position.",
  },
  {
    title: "Experience",
    description: "Showcase your professional experience, emphasizing your key roles and accomplishments to demonstrate your expertise and suitability for the job.",
  },
  {
    title: "Job Details",
    description: "Provide specific details about your previous or desired job, such as job responsibilities, projects you've worked on, and any notable achievements.",
  },
  {
    title: "Next Steps",
    description: "Outline the next steps for the user, such as submitting the application, preparing for an interview, or contacting the provided email or phone number for further information.",
  },
  {
    title: "Personal Information",
    description: "Ensure easy employer connections and maximize professional opportunities by sharing your contact details like name, email, and phone number. Make a strong impression with accurate and clear personal information.",
  }
];


export const ProficiencyLevels = {
  A1: "A1 - Basic Beginner",
  A2: "A2 - Conversational Beginner",
  B1: "B1 - Intermediate Level",
  B2: "B2 - Advanced Level",
  C1: "C1 - Fluent Proficiency",
  C2: "C2 - Native-level Proficiency"
};