export const brand = {
  name: "Helena Barem Beauty",
  instagramHandle: "@helenabarem.beauty",
  instagramUrl: "https://www.instagram.com/helenabarem.beauty/",
  phoneDisplay: "+55 (67) 99100-5551",
  whatsappNumber: "5567991005551",
  streetAddress: "Rua Vitório Zeolla, 805",
  neighborhood: "Carandá Bosque",
  city: "Campo Grande",
  region: "MS",
} as const;

export function whatsappUrl(service?: string) {
  const message = service
    ? "Olá, Helena! Vim pelo site e gostaria de saber mais sobre " + service + " e consultar horários disponíveis."
    : "Olá, Helena! Vim pelo site da Helena Barem Beauty e gostaria de saber mais sobre os procedimentos e consultar horários disponíveis.";

  return "https://wa.me/" + brand.whatsappNumber + "?text=" + encodeURIComponent(message);
}

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Rua Vitório Zeolla, 805, Carandá Bosque, Campo Grande, MS, Brasil");
