import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.widthfooter}>
            <h2>تماس با ما</h2>
            <p>academy@mci.ir</p>
            <p> تهران، خیابان ولیعصر، بالاتر از میدان ونک، خیابان عطار، پلاک ۲۶</p>
             <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="4" y="4" width="16" height="16" rx="4" />
  <circle cx="12" cy="12" r="3" />
  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
             <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <rect x="3" y="5" width="18" height="14" rx="4" />
  <path d="M10 9l5 3l-5 3z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <rect x="4" y="4" width="16" height="16" rx="2" />
             <line x1="8" y1="11" x2="8" y2="16" />
             <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
           </svg>
           </div>
           <div className={styles.widthfooter}>
            <h2>درباره ما</h2>
            <p>آکادمی همراه اول با هدف تربیت، توسعه و توانمندسازی نیروی انسانی در اکوسیستم دیجیتال، می‌کوشد تا شکاف میان تحصیلات آکادمیک و فضای کار را پوشش دهد</p>
           </div>
        </div>
    );
};

export default Footer;