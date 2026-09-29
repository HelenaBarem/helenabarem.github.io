import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Helena Barem Beauty",
    short_name: "Helena Barem",
    description: "Beleza com atendimento personalizado em Campo Grande/MS.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF9F4",
    theme_color: "#3D050C",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
