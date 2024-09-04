import { SiGmail } from "react-icons/si";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

type SocialData = {
  icon: React.ElementType;
  label: string;
  value: string;
  link: string;
};

export const socialData: SocialData[] = [
  { icon: SiGmail, label: "Email", value: "stgphillipsz@gmail.com", link: "mailto:stgphillipsz@gmail.com" },
  { icon: FaGithub, label: "GitHub", value: "Shenon69", link: "https://github.com/Shenon69" },
  { icon: FaLinkedin, label: "LinkedIn", value: "Trishan Phillipsz", link: "https://www.linkedin.com/in/stgp" },
  { icon: FaMedium, label: "Medium", value: "Trishan Phillipsz", link: "https://medium.com/@ask.tikki69" },
  { icon: FaInstagram, label: "Instagram", value: "tikkioninsta", link: "https://www.instagram.com/tikkioninsta" },
  { icon: FaFacebook, label: "Facebook", value: "Shenon Trishan", link: "https://www.facebook.com/shenon.trishan" },
];
