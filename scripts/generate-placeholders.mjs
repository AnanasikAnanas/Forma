import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const projects = [
  ["luna-nails", "LUNA NAILS", "NAIL CULTURE", "#c9919b", "#f4eee9"],
  ["element-laser", "ELEMENT LASER", "SKIN TECHNOLOGY", "#aab7a0", "#edf0e9"],
  ["boroda-63", "BORODA 63", "BARBER / TOGLIATTI", "#b76b43", "#171717"],
  ["vino-room", "VINO ROOM", "WINE · FOOD · PEOPLE", "#6d2335", "#eee7df"],
  ["motion-club", "MOTION CLUB", "MOVE / TRAIN / REPEAT", "#b7ff31", "#151515"],
];

const esc = (value) => value.replaceAll("&", "&amp;");
for (const [slug, title, label, accent, paper] of projects) {
  await mkdir(`public/images/work/${slug}`, { recursive: true });
  for (const [file, variant] of [
    ["hero", 0],
    ["screen-01", 1],
    ["screen-02", 2],
  ]) {
    const dark = paper === "#151515" || paper === "#171717";
    const ink = dark ? "#f1efe9" : "#151515";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900">
      <rect width="1400" height="900" fill="${paper}"/>
      <rect x="0" y="0" width="1400" height="56" fill="${dark ? "#222" : "#e6e1d9"}"/>
      <circle cx="28" cy="28" r="5" fill="${accent}"/><circle cx="46" cy="28" r="5" fill="#8c8881"/><circle cx="64" cy="28" r="5" fill="#8c8881"/>
      <text x="92" y="34" font-family="monospace" font-size="12" fill="${ink}" opacity=".6">FORMA / DEMO / ${file.toUpperCase()}</text>
      <text x="55" y="115" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="${ink}">${esc(title)}</text>
      <text x="990" y="114" font-family="monospace" font-size="12" fill="${ink}">УСЛУГИ    О НАС    ЗАПИСЬ ↗</text>
      <text x="60" y="238" font-family="monospace" font-size="13" letter-spacing="3" fill="${accent}">${esc(label)} / 2026</text>
      <text x="55" y="390" font-family="Arial, sans-serif" font-size="118" font-weight="600" letter-spacing="-8" fill="${ink}">${variant === 1 ? "ЯСНО И" : variant === 2 ? "ВАШ РИТМ" : esc(title.split(" ")[0])}</text>
      <text x="55" y="494" font-family="Arial, sans-serif" font-size="118" font-weight="600" letter-spacing="-8" fill="${ink}">${variant === 1 ? "ТОЧНО" : variant === 2 ? "ВАШ САЙТ" : esc(title.split(" ").slice(1).join(" ") || "STUDIO")}</text>
      <rect x="60" y="570" width="190" height="54" fill="${accent}"/><text x="86" y="603" font-family="monospace" font-size="13" fill="#111">ЗАПИСАТЬСЯ ↗</text>
      <circle cx="1110" cy="510" r="255" fill="${accent}" opacity="${variant === 2 ? ".28" : ".88"}"/>
      <rect x="955" y="270" width="250" height="330" rx="${variant === 1 ? 130 : 4}" fill="none" stroke="${ink}" stroke-width="2" opacity=".65" transform="rotate(${variant === 2 ? -7 : 4} 1080 435)"/>
      <path d="M0 780H1400M350 56V900M700 56V900M1050 56V900" stroke="${ink}" stroke-opacity=".12"/>
      <text x="60" y="850" font-family="monospace" font-size="11" fill="${ink}" opacity=".65">DEMONSTRATION CONCEPT — NO REAL BUSINESS RESULTS</text>
    </svg>`;
    await sharp(Buffer.from(svg))
      .png({ quality: 92 })
      .toFile(`public/images/work/${slug}/${file}.png`);
  }
}

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" rx="8" fill="#E85D3F"/><path d="M15 14h34v8H24v8h20v8H24v12h-9z" fill="#151515"/></svg>`;
await sharp(Buffer.from(faviconSvg)).png().toFile("public/favicon.png");
