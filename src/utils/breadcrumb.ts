
const labels: Record<string, string> = {
  servizi: "Servizi",
  "siti-web": "Siti web",
  portfolio: "Portfolio",
  contatti: "Contatti",
  blog: "Blog",
};

export function getBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  return segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");

    const label =
      labels[segment] ??
      segment
        .replaceAll("-", " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

    return {
      label,
      href,
    };
  });
}