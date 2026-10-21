import { ListView, listMetadata } from "../_seo/ListView";
export const metadata = listMetadata("guide", "en");
export default function Page() { return <ListView kind="guide" lang="en" />; }
