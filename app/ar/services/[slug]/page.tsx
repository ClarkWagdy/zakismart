import type { Metadata } from "next";
import { PageView } from "../../../_seo/PageView";
import { byKind } from "../../../_seo/content";
import { pageMetadata } from "../../../_seo/meta";

export function generateStaticParams() { return byKind("service").map((p) => ({ slug: p.slug })); }
export const dynamicParams = false;
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadata("service", slug, "ar");
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PageView kind="service" slug={slug} lang="ar" />;
}
