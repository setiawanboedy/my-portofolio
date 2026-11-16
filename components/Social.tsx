import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SocialLink } from '@/types';

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const socials: SocialLink[] = [
  { icon: <FaGithub />, path: "https://github.com/setiawanboedy" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/setiawanboedy" },
  { icon: <FaInstagram />, path: "https://instagram.com/budi.setiawan98" },
];

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
