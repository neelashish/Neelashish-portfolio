import { WindowProps } from "@/components/WindowManagement/WindowCompositor";
import { useTranslation } from "react-i18next";
import styles from './ContactView.module.css';
import Image from 'next/image';

function EnglishContent() {
  return (<>
    <p className={styles['contact-info']}>
      I am currently not contracted, so if you have any opportunities feel free to reach out! You can reach me via my personal email:
    </p>

    <p><b>Email:&nbsp;</b><a href="mailto:hello@neelashish.dev">hello@neelashish.dev</a></p>
  </>);
}

function DutchContent() {
  return EnglishContent();
}

export default function ContactApplicationView(props: WindowProps) {
  const { i18n } = useTranslation('common');

  return (
    <div className="content-outer">
      <div className="content">
        <div className={styles['center']}>
          <div className={styles['center-content']}>
            <div className={styles['contact-header']}>
              <h1>Contact</h1>
              <div className={styles['contact-socials']}>
                <a rel="noreferrer" target="_blank" href="https://github.com/"><Image src="icons/github-icon.svg" alt="Github" width={22} height={22}/></a>
                <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><Image src="icons/linkedin-icon.svg" alt="Linkedin" width={22} height={22}/></a>
                <a rel="noreferrer" target="_blank" href="https://twitter.com/"><Image src="icons/x-icon.svg" alt="X" width={22} height={22}/></a>
              </div>
            </div>
            { i18n.language === 'nl' ? DutchContent() : EnglishContent() }
          </div>
        </div>
      </div>
    </div>
  );
}
