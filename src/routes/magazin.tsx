import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { categories } from "@/content";
import { pageHead } from "@/lib/seo";

const cat = categories.magazin;

export const Route = createFileRoute("/magazin")({
  head: () =>
    pageHead({
      title: cat.seoTitle,
      description: cat.seoDescription,
      path: cat.path,
    }),
  component: () => <CategoryPage id="magazin" />,
});
