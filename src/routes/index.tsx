import { createFileRoute } from "@tanstack/react-router";
import { TpsApp } from "@/components/tps-app";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <TpsApp />;
}
