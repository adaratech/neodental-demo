import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tiziano Odontoiatria",
    short_name: "Tiziano",
    description:
      "Il tuo percorso di cura verso una bocca sana e duratura. Centro odontoiatrico conservativo.",
    start_url: "/home",
    display: "standalone",
    background_color: "#F8F9FA",
    theme_color: "#0F7EA6",
    lang: "it",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
