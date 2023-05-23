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


export const accordionOtpions = [

  {
    question: "How does the resume maker web app work?",
    answer: "Our resume maker web app guides you through a step-by-step process to create a professional resume. Simply input your information, choose from a variety of templates, customize the content, and download your resume in various formats."
  },
  {
    question: "Can I edit my resume after I've created it?",
    answer: "Yes, absolutely! Our resume maker web app allows you to make edits and updates to your resume at any time. You can revisit your saved resume, make changes, and save the updated version."
  },
  {
    question: "Are there any resume templates available?",
    answer: "Yes, we offer a wide range of professionally designed resume templates to choose from. You can select a template that matches your industry, experience level, or personal preference, and customize it to create a unique and visually appealing resume."
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, we take the security and privacy of your personal information very seriously. We use industry-standard encryption protocols to protect your data and ensure that it remains confidential. We do not share your information with any third parties."
  },
  {
    question: "Can I download my resume in different formats?",
    answer: "Absolutely! Our resume maker web app allows you to download your resume in various formats such as PDF, Word document, or plain text. This ensures compatibility with different systems and makes it easy to submit your resume online or print it out."
  },
  {
    question: "Can I access my resume from multiple devices?",
    answer: "Yes, you can access your resume from any device with an internet connection. Our resume maker web app is cloud-based, meaning that your resume is securely stored in the cloud, and you can access it from your computer, smartphone, or tablet."
  },
  {
    question: "Is there a cost associated with using the resume maker web app?",
    answer: "We offer both free and premium plans. The free plan allows you to create and download a basic resume. Our premium plans provide additional features such as access to advanced templates, cover letter creation, and unlimited resume downloads. You can choose the plan that best suits your needs."
  }

]


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