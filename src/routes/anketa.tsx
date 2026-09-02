import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/category-page";
import { categories } from "@/content";
import { pageHead } from "@/lib/seo";

const cat = categories.anketa;

export const Route = createFileRoute("/anketa")({
  head: () =>
    pageHead({
      title: cat.seoTitle,
      description: cat.seoDescription,
      path: cat.path,
    }),
  component: () => <CategoryPage id="anketa" />,
});
