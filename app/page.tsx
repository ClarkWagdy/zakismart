import App from "./src/App";
import { HomeFaqJsonLd } from "./_seo/HomeFaqJsonLd";
import { SeoLinks } from "./_seo/SeoLinks";
import { SeoFooter } from "./_seo/SeoFooter";

export default function Home() {
  return (
    <>
      <HomeFaqJsonLd />
      <App />
     
    </>
  );
}