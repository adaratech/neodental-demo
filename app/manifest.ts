import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Centro Maggiolini",
    short_name: "Maggiolini",
    description:
      "Il tuo percorso verso una bocca sana e duratura. Centro odontoiatrico conservativo.",
    start_url: "/home",
    display: "standalone",
    background_color: "#F8F9FA",
    theme_color: "#0F7EA6",
    lang: "it",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192.svg",
        sizes: "192x192",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/icon-512.svg",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
