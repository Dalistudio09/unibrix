import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cases")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
