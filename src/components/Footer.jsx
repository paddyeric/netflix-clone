// Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { Facebook, Twitter, Instagram, Youtube, Globe } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    [
      'Audio and Subtitles',
      'Media Center',
      'Privacy',
      'Contact Us',
      'Corporate Information'
    ],
    [
      'Audio Description',
      'Investor Relations',
      'Legal Notices',
      'Cookie Preferences',
      'Ad Choices'
    ],
    [
      'Gift Cards',
      'Terms of Use',
      'Help Center',
      'Jobs',
      'Netflix Shop'
    ],
    [
      'Netflix Originals',
      'Speed Test',
      'Account',
      'Ways to Watch',
      'Only on Netflix'
    ]
  ];

  const socialLinks = [
    { icon: <Facebook size={24} />, url: 'https://facebook.com/netflix' },
    { icon: <Instagram size={24} />, url: 'https://instagram.com/netflix' },
    { icon: <Twitter size={24} />, url: 'https://twitter.com/netflix' },
    { icon: <Youtube size={24} />, url: 'https://youtube.com/netflix' }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' }
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <SocialIcons>
          {socialLinks.map((social, index) => (
            <SocialIcon 
              key={index} 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {social.icon}
            </SocialIcon>
          ))}
        </SocialIcons>

        <FooterLinksContainer>
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              {column.map((link, linkIndex) => (
                <FooterLink 
                  key={linkIndex} 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Clicked: ${link}`);
                  }}
                >
                  {link}
                </FooterLink>
              ))}
            </div>
          ))}
        </FooterLinksContainer>

        <LanguageSelector>
          <GlobeIcon size={20} />
          <Select defaultValue="en">
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </Select>
          <ArrowIcon />
        </LanguageSelector>

        
        <FooterText>
          &copy; 1997-{new Date().getFullYear()} Netflix Clone, Inc.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #000000f4;
  color: white;
  padding: 40px;
  margin-top: -5px;
  width: 100%;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 4%;
`;

const FooterLinksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLink = styled.a`
  color: #757575;
  text-decoration: none;
  font-size: 13px;
  margin-bottom: 16px;
  display: inline-block;
  width: 100%;

  &:hover {
    color: #b3b3b3;
    text-decoration: underline;
  }
`;

const LanguageSelector = styled.div`
  margin: 30px 0;
  position: relative;
  width: 140px;
`;

const Select = styled.select`
  background-color: #000;
  color: #757575;
  border: 1px solid #333;
  padding: 12px 40px 12px 50px;
  font-size: 16px;
  border-radius: 2px;
  width: 100%;
  cursor: pointer;
  appearance: none;

  &:focus {
    outline: none;
    border-color: #757575;
  }
`;

const GlobeIcon = styled(Globe)`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #757575;
  pointer-events: none;
`;

const ArrowIcon = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #757575;
  pointer-events: none;
  border: 5px solid transparent;
  border-top-color: #757575;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const SocialIcon = styled.a`
  color: #757575;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const FooterText = styled.p`
  font-size: 13px;
  margin: 10px 0;
`;


export default Footer;