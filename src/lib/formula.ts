export const MATERIALS = [
  {
    id: "titanio",
    name: "Titaneo",
    line: "Titanio ceramicado",
    image: "/specimens/titanio.jpg",
    role: "calor",
  },
  {
    id: "caucho",
    name: "Caucho",
    line: "Caucho natural",
    image: "/specimens/caucho.jpg",
    role: "ligante",
  },
  {
    id: "cedro",
    name: "Aserrín de cedro",
    line: "Árboles · cedro",
    image: "/specimens/aserrin.jpg",
    role: "aislante",
  },
  {
    id: "caoba",
    name: "Aserrín de caoba",
    line: "Árboles · caoba",
    image: "/specimens/aserrin.jpg",
    role: "aislante",
  },
  {
    id: "pino",
    name: "Aserrín de pino",
    line: "Árboles · pino",
    image: "/specimens/aserrin.jpg",
    role: "aislante",
  },
  {
    id: "ceramica",
    name: "Cerámica o barro",
    line: "Cerámica. o barro",
    image: "/specimens/ceramica.jpg",
    role: "calor",
  },
  {
    id: "ceraAfricana",
    name: "Cera africana",
    line: "Cera de abeja africana",
    image: "/specimens/cera.jpg",
    role: "sello",
  },
  {
    id: "ceraMonte",
    name: "Cera de monte",
    line: "Cera de abeja de monte",
    image: "/specimens/cera.jpg",
    role: "sello",
  },
  {
    id: "tcas",
    name: "TCAS APU",
    line: "Corteza de palo de hule",
    image: "/specimens/corteza.jpg",
    role: "ligante",
  },
] as const;

export type MaterialId = (typeof MATERIALS)[number]["id"];
export type Mix = Record<MaterialId, number>;
export type Verdict = "desnudo" | "cede" | "aguanta" | "reentrada";

export const CARDS = [
  {
    name: "Titaneo",
    line: "Titanio ceramicado",
    image: "/specimens/titanio.jpg",
  },
  {
    name: "Caucho",
    line: "Del primer apunte",
    image: "/specimens/caucho.jpg",
  },
  {
    name: "Aserrín",
    line: "Cedro, caoba y pino",
    image: "/specimens/aserrin.jpg",
  },
  {
    name: "Cerámica",
    line: "O barro",
    image: "/specimens/ceramica.jpg",
  },
  {
    name: "Ceras",
    line: "Abeja africana y de monte",
    image: "/specimens/cera.jpg",
  },
  {
    name: "TCAS APU",
    line: "Corteza de palo de hule",
    image: "/specimens/corteza.jpg",
  },
] as const;

export const NOTEBOOK_MIX: Mix = {
  titanio: 16,
  caucho: 8,
  cedro: 7,
  caoba: 7,
  pino: 6,
  ceramica: 14,
  ceraAfricana: 9,
  ceraMonte: 8,
  tcas: 14,
};

export const PAISES = [
  "Guatemala",
  "El Salvador",
  "Honduras",
  "Nicaragua",
  "Costa Rica",
  "Panamá",
  "Belice",
] as const;

export const VERDICT_COPY: Record<Verdict, { title: string; body: string }> = {
  desnudo: {
    title: "Sin mezcla",
    body: "El escudo está en blanco. Carga la fórmula del cuaderno o mueve las partes.",
  },
  cede: {
    title: "El escudo cede",
    body: "Falta cara dura, o sobra orgánico suelto. Sube titaneo y cerámica. La cera sella; no sostiene el calor sola.",
  },
  aguanta: {
    title: "El escudo aguanta",
    body: "Calor, sello y aislamiento juntos. Es la zona de la fórmula escrita.",
  },
  reentrada: {
    title: "Cara de reentrada",
    body: "Titaneo ceramicado y cerámica dominan el frente. En este modelo, el escudo entra en régimen de reentrada.",
  },
};

const ROLE_CLASS = {
  calor: "bg-ember",
  ligante: "bg-ink",
  aislante: "bg-ink/30",
  sello: "bg-ember/50",
} as const;

export function roleClass(role: (typeof MATERIALS)[number]["role"]) {
  return ROLE_CLASS[role];
}

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function totalParts(mix: Mix) {
  return MATERIALS.reduce((sum, material) => sum + mix[material.id], 0);
}

function share(mix: Mix, ids: MaterialId[]) {
  const total = totalParts(mix);
  if (total <= 0) return 0;
  return ids.reduce((sum, id) => sum + mix[id], 0) / total;
}

export function isNotebook(mix: Mix) {
  return MATERIALS.every((material) => mix[material.id] === NOTEBOOK_MIX[material.id]);
}

export function recipeLine(mix: Mix) {
  const parts = MATERIALS.filter((material) => mix[material.id] > 0).map(
    (material) => `${material.name} ${mix[material.id]}`,
  );
  return parts.length > 0 ? parts.join(" · ") : "Sin partes";
}

export function analyze(mix: Mix) {
  const total = totalParts(mix);
  const ceramicMetal = share(mix, ["titanio", "ceramica"]);
  const binder = share(mix, ["caucho", "tcas"]);
  const wax = share(mix, ["ceraAfricana", "ceraMonte"]);
  const dust = share(mix, ["cedro", "caoba", "pino"]);

  const termica = total === 0 ? 0 : clamp(ceramicMetal * 160 + binder * 30, 0, 100);
  const sellado = total === 0 ? 0 : clamp(wax * 160 + binder * 55, 0, 100);
  const aislamiento =
    total === 0 ? 0 : clamp(dust * 180 + wax * 45 + ceramicMetal * 15, 0, 100);
  const flex =
    total === 0 ? 0 : clamp(binder * 150 + wax * 25 - ceramicMetal * 25, 0, 100);
  const peso = total === 0 ? 0 : clamp(ceramicMetal * 95 + binder * 40 + dust * 12, 0, 100);

  const holdC =
    total === 0
      ? 0
      : clamp(
          Math.round(400 + ceramicMetal * 1100 + binder * 280 + dust * 80 - wax * 90),
          220,
          1720,
        );

  let verdict: Verdict = "desnudo";
  if (total > 0 && holdC >= 1200) verdict = "reentrada";
  else if (total > 0 && holdC >= 760) verdict = "aguanta";
  else if (total > 0) verdict = "cede";

  const segments = MATERIALS.map((material) => ({
    id: material.id,
    name: material.name,
    parts: mix[material.id],
    pct: total === 0 ? 0 : (mix[material.id] / total) * 100,
    className: ROLE_CLASS[material.role],
  })).filter((segment) => segment.parts > 0);

  return {
    total,
    termica,
    sellado,
    aislamiento,
    flex,
    peso,
    holdC,
    verdict,
    segments,
    coverage: clamp(total / 48, 0, 1),
  };
}

export function sanitizeMix(value: unknown): Mix | null {
  if (!value || typeof value !== "object") return null;
  const record = value as Record<string, unknown>;
  const mix = { ...NOTEBOOK_MIX };
  for (const material of MATERIALS) {
    const n = record[material.id];
    if (typeof n !== "number" || !Number.isFinite(n)) return null;
    mix[material.id] = clamp(Math.round(n), 0, 24);
  }
  return mix;
}

export function formatTemp(celsius: number) {
  if (celsius <= 0) return "—";
  return `${new Intl.NumberFormat("es").format(celsius)} °C`;
}
