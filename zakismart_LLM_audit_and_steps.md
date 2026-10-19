# zakismart.com: making the site friendly to AI assistants (LLMs)

Reviewed: the public home page https://zakismart.com (October 2026).
Not verified: your live robots.txt, sitemap.xml, llms.txt and any structured data in the page source. I could not read those files from here, so check them (steps at the end).

## 1. What is already good
- Clear title, description, canonical, Open Graph and Twitter tags.
- The page text is delivered in the HTML (a crawler can read it without running scripts).
- Clear headings and an FAQ section with real questions and answers.
- Contact details, working hours, and standards (Zigbee, Matter, KNX, MQTT...) are written in text.

## 2. Fix first (these change what AI says about you)
1. **WhatsApp link is wrong.** The text shows +20 10 2424 4589 but the link opens wa.me/+201024244589. Change it to https://wa.me/201024244589. A wrong number loses leads and confuses AI.
2. **Email is hidden.** The page shows "[email protected]" because of Cloudflare email obfuscation, so AI and crawlers cannot read it. Turn off "Email Address Obfuscation" in Cloudflare (Scrape Shield), or publish the address as plain text in the contact section.
3. **Three different company names:** "Zaki for Smart Solutions" (title), "Zaki Smart Spaces" (footer), "ZAKI Smart Solutions" (our brochures). AI treats these as possibly different companies. Pick one official name and use it everywhere. Suggested: Zaki for Smart Solutions (زكي).
4. **Unverified numbers and stories.** The page states 350+ projects, 9 years, 6.8K devices, 96% referrals, 12 cities, a 4.9 rating, three named client testimonials and three case studies with percentage savings. The case-study pictures are stock photos from Unsplash. If any of these are not real and documented, remove or replace them. AI assistants repeat what the page says, and false claims can harm trust and cause legal trouble. I did NOT put any of these numbers in the files below.
5. **Instagram link is empty ("#").** Link the real account or remove the icon.
6. **Your real offer is missing from the site.** The site does not mention the free site survey, the 5-year warranty (as you describe it), or the technical-offer then financial-offer steps. Add them as visible text. The files below include them, and AI systems compare the files with the page, so the page should say the same.

## 3. Structure changes that help most
- **Split the single page into real pages.** Today everything is anchors (#services, #faq). AI and search engines work best with one URL per topic:
  - /services/smart-lighting, /services/security-cctv, /services/smart-locks, /services/climate, /services/energy, /services/shading, /services/voice-control, /services/custom-iot
  - /residential, /commercial, /hospitality
  - /how-we-work, /faq, /contact, /about
- **Arabic on its own URLs.** Create /ar/ pages with lang="ar" dir="rtl" and add hreflang links between English and Arabic versions. A language toggle on one URL is invisible to most crawlers.
- **One short "Facts" paragraph near the top of the About page**, in plain text: who you are, where, what you do, who you serve, how to contact you, and the working hours.
- **Descriptive link text.** "View case study" currently points to #quote. Use real case-study pages or remove the button.
- **Keep key facts out of images and sliders.** Text inside images or hidden tabs is often missed.
- **Add alt text** to every image (the hero and case-study images).

## 4. Files in this pack and where to put them
| File | Put it here | Purpose |
|---|---|---|
| llms.txt | https://zakismart.com/llms.txt | Short guide for AI assistants: who you are, services, links, contact |
| llms-full.txt | https://zakismart.com/llms-full.txt | Longer plain-text version with FAQ and process |
| robots.txt | https://zakismart.com/robots.txt | Welcomes AI search and assistants. Read the notes inside about training bots |
| sitemap.xml | https://zakismart.com/sitemap.xml | Lists your pages. Add each new page when you create it |
| structured-data.html | Paste inside the <head> of the home page | JSON-LD: Organization, WebSite, services, FAQ, hours, address |

Notes:
- llms.txt is a community proposal, not a guarantee. Some assistants read it, many do not yet. Treat it as a cheap extra, not the main fix. The main fixes are clear page text, separate pages, structured data and consistent facts.
- robots.txt: the version here allows all AI crawlers, including training crawlers (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended). If you do not want training use, delete those four blocks and keep the search and assistant ones. Check each vendor's current documentation for bot names.
- Structured data: the content must match what is visible on the page. The FAQ in the JSON-LD copies your FAQ. If you edit the FAQ on the page, edit it in the JSON-LD too. Add "email" later when you choose a public address. Never add ratings or reviews unless they are real.
- The "free site survey" and "5-year warranty" lines are in llms.txt and llms-full.txt because you told me they are your offer. Add them to the visible page before relying on them.

## 5. Suggested extra FAQ entries (add to the page, then to the JSON-LD)
English
- Is the site survey really free? Yes. Every project starts with a free site survey, followed by a technical offer and a financial offer.
- What warranty do you give? 5 years against manufacturing defects and misuse. Full terms are in the contract.
- My switch boxes have no neutral wire. Can I still go smart? Often yes. There are modules designed to work without a neutral wire, and we check every box during the survey.
- Will my normal switches still work? Yes. Manual switches stay connected so lights work even if the network is down.

عربي
- هل المعاينة مجانية فعلاً؟ أيوه. كل مشروع بيبدأ بمعاينة مجانية، وبعدها عرض فني وعرض مالي.
- إيه الضمان؟ 5 سنين ضد عيوب الصناعة وسوء الاستخدام، والتفاصيل الكاملة في العقد.
- علب السويتشات عندي مفيهاش نيوترال، أقدر أعمل بيت ذكي؟ في أغلب الحالات أيوه. فيه مديولات مصممة تشتغل من غير نيوترال، وبنفحص كل علبة في المعاينة.
- السويتشات العادية هتفضل شغالة؟ أيوه. السويتشات اليدوية بتفضل متوصلة، فالنور بيشتغل حتى لو الشبكة وقعت.

## 6. How to check the results
1. Open https://zakismart.com/llms.txt, /robots.txt and /sitemap.xml in a browser. They should load as plain text or XML.
2. Test structured data at https://validator.schema.org and Google's Rich Results Test.
3. Look at the page source (Ctrl+U): the text of services, FAQ and contact should be there, not only in scripts.
4. In Google Search Console, submit the sitemap and use URL Inspection on the home page.
5. After 2 to 4 weeks, ask ChatGPT, Claude, Gemini and Perplexity:
   - "What is Zaki for Smart Solutions in Cairo?"
   - "Who installs smart homes in Cairo with a free site survey?"
   - "What warranty does Zaki Smart Solutions give?"
   - "How do I contact Zaki Smart Solutions?"
   Compare the answers with your facts and fix whatever is wrong on the site.
