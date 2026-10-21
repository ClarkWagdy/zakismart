import React from 'react'
import { SeoFooter } from '../_seo/SeoFooter'
import { Logo } from './App'

export default function Footer() {
  return (
   <footer>
         <div className="container footer-grid">
           <div>
             <Logo footer />
             <p>
               Integrated smart home and IoT systems, engineered and supported
               across Egypt and the MENA region.
             </p>
           </div>
           <div>
             <strong>SERVICES</strong>
             <a href="#services">Smart home</a>
             <a href="#services">Security systems</a>
             <a href="#services">Energy management</a>
             <a href="#services">Custom IoT</a>
           </div>
           <div>
             <strong>COMPANY & SUPPORT</strong>
             <a href="#process">Our process</a>
             <a href="#projects">Projects</a>
             <a href="#faq">Technical FAQ</a>
             <a href="#quote">Contact</a>
           </div>
           <div>
             <strong>CONTACT</strong>
             <a href="mailto:info@zakismart.com">info@zakismart.com</a>
             <a href="tel:+201024244589">+201024244589</a>
             <span>Cairo, Egypt</span>
             <div className="socials">
               <a
                 href="https://www.instagram.com/zakiismart"
                 target="_blank"
                 aria-label="Instagram"
               >
                 IG
               </a>
               <a
                 href="https://www.linkedin.com/company/zakiismart"
                 target="_blank"
                 aria-label="LinkedIn"
               >
                 IN
               </a>
               <a
                 href="https://www.facebook.com/zakiismart"
                 target="_blank"
                 aria-label="Facebook"
               >
                 FB
               </a>
             </div>
           </div>
         </div>
         <SeoFooter />
         <div className="container footer-bottom">
           <span>© 2026 Zaki for Smart Solutions (ذكي). All rights reserved.</span>
           <span>Privacy · Terms · Legal</span>
         </div>
         <div className="footer-word">zaki</div>
       </footer>
  )
}
