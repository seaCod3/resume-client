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
    title: "Easy-to-use Interface",
    content:
      `Our CV generator provides a user-friendly interface, making it effortless for users to create professional resumes without any technical expertise. 
        The intuitive design ensures a smooth and efficient resume-building experience.`,
  },
  {
    id: "feature-2",
    icon: <HiOutlineArrowPath color="#023642" size={30} />,
    title: "Dynamic Sections",
    content:
      `We provide a variety of dynamic sections, such as education, work experience, skills, and more. 
      Users can easily add, remove, or reorder these sections to showcase their qualifications and achievements effectively.`,
  },
  {
    id: "feature-3",
    icon: <HiOutlineEye color="#023642" size={30} />,
    title: "Real-time Preview",
    content:
      `Visualize your resume as you build it with our real-time preview feature. 
      Instantly see how your information and chosen template come together, ensuring a polished and well-structured CV before downloading it.`,
  },
  {
    id: "feature-4",
    icon: <BsDownload color="#023642" size={30} />,
    title: "Downloadable PDF",
    content:
      `Once you've completed your resume, our CV generator enables you to download it as a high-quality PDF file. 
          This ensures compatibility across different devices and allows for easy sharing with potential employers or job application platforms.`,
  },
  {
    id: "feature-5",
    icon: <HiOutlinePencil color="#023642" size={30} />,
    title: "Resume Management",
    content:
      `Our application provides a built-in resume management system, allowing users to save, edit, and update their resumes anytime. 
          You can easily access and make changes to your CV whenever necessary, ensuring it remains up-to-date.`,
  },
  {
    id: "feature-6",
    icon: <HiOutlineDevicePhoneMobile color="#023642" size={30} />,
    title: "Responsive Design",
    content:
      `Create and edit your resume with ease using our CV generator. 
          It provides a great experience on any device, including desktops, laptops, tablets, and smartphones.`,
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