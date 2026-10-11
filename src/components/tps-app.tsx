import { useEffect, useMemo, useState, type FormEvent } from "react";
import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Capsule, Cohete, Octahedron, Star } from "@/components/drawings";
import {
  CARDS,
  MATERIALS,
  NOTEBOOK_MIX,
  PAISES,
  VERDICT_COPY,
  analyze,
  formatTemp,
  isNotebook,
  recipeLine,
  roleClass,
  sanitizeMix,
  type MaterialId,
  type Mix,
} from "@/lib/formula";

const MIX_KEY = "tps.v1.mix";
const LOTES_KEY = "tps.v1.lotes";
const ACTAS_KEY = "tps.v1.actas";

type Lote = {
  id: string;
  name: string;
  mix: Mix;
  holdC: number;
  at: string;
};

type Acta = {
  id: string;
  nombre: string;
  pais: string;
  nota: string;
  at: string;
};

const FIELD =
  "w-full border-0 border-b border-ink/30 bg-transparent px-0 py-2 text-base text-inkblack outline-none focus:border-ink";

function loadJson(key: string): unknown {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function sanitizeLotes(value: unknown): Lote[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const record = item as Record<string, unknown>;
    const mix = sanitizeMix(record.mix);
    if (!mix || typeof record.id !== "string" || typeof record.name !== "string") return [];
    return [
      {
        id: record.id,
        name: record.name,
        mix,
        holdC: typeof record.holdC === "number" ? record.holdC : analyze(mix).holdC,
        at: typeof record.at === "string" ? record.at : new Date().toISOString(),
      },
    ];
  });
}

function sanitizeActas(value: unknown): Acta[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const record = item as Record<string, unknown>;
    if (typeof record.id !== "string" || typeof record.nombre !== "string") return [];
    if (typeof record.pais !== "string") return [];
    return [
      {
        id: record.id,
        nombre: record.nombre,
        pais: record.pais,
        nota: typeof record.nota === "string" ? record.nota : "",
        at: typeof record.at === "string" ? record.at : new Date().toISOString(),
      },
    ];
  });
}

function formatWhen(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("es", { dateStyle: "medium", timeStyle: "short" }).format(date);
}

function smoothTo(id: string) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
}

export function TpsApp() {
  const [mix, setMix] = useState<Mix>(NOTEBOOK_MIX);
  const [lotes, setLotes] = useState<Lote[]>([]);
  const [actas, setActas] = useState<Acta[]>([]);
  const [ready, setReady] = useState(false);
  const [loteName, setLoteName] = useState("");
  const [sealedId, setSealedId] = useState<string | null>(null);
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [nota, setNota] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  const stats = useMemo(() => analyze(mix), [mix]);
  const copy = VERDICT_COPY[stats.verdict];
  const notebook = isNotebook(mix);

  useEffect(() => {
    const storedMix = sanitizeMix(loadJson(MIX_KEY));
    if (storedMix) setMix(storedMix);
    setLotes(sanitizeLotes(loadJson(LOTES_KEY)).slice(0, 8));
    setActas(sanitizeActas(loadJson(ACTAS_KEY)).slice(0, 30));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(MIX_KEY, JSON.stringify(mix));
    localStorage.setItem(LOTES_KEY, JSON.stringify(lotes));
    localStorage.setItem(ACTAS_KEY, JSON.stringify(actas));
  }, [ready, mix, lotes, actas]);

  function setPart(id: MaterialId, value: number) {
    setMix((current) => ({ ...current, [id]: value }));
  }

  function seal() {
    if (stats.total <= 0) return;
    const name = loteName.trim() || `Escudo ${formatTemp(stats.holdC)}`;
    const lote: Lote = {
      id: crypto.randomUUID(),
      name,
      mix: { ...mix },
      holdC: stats.holdC,
      at: new Date().toISOString(),
    };
    setLotes((current) => [lote, ...current].slice(0, 8));
    setSealedId(lote.id);
    setLoteName("");
  }

  function fileActa(event: FormEvent) {
    event.preventDefault();
    if (nombre.trim().length < 2) {
      setFormError("Escribe el nombre de quien queda bajo protección.");
      return;
    }
    if (!pais) {
      setFormError("Elige un país de Centroamérica.");
      return;
    }
    const acta: Acta = {
      id: crypto.randomUUID(),
      nombre: nombre.trim(),
      pais,
      nota: nota.trim(),
      at: new Date().toISOString(),
    };
    setActas((current) => [acta, ...current].slice(0, 30));
    setNombre("");
    setPais("");
    setNota("");
    setFormError(null);
  }

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-ink/15 bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-col px-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <a href="#escudo" className="inline-flex min-h-11 shrink-0 items-center gap-2">
            <Star className="size-6 text-ink" />
            <span className="font-display text-xl leading-none">TPS</span>
          </a>
          <nav className="flex min-w-0 gap-4 overflow-x-auto text-sm text-ink">
            <a className="inline-flex min-h-11 shrink-0 items-center" href="#escudo">
              Escudo
            </a>
            <a className="inline-flex min-h-11 shrink-0 items-center" href="#mezcla">
              Mezcla
            </a>
            <a className="inline-flex min-h-11 shrink-0 items-center" href="#programa">
              Programa
            </a>
            <a className="inline-flex min-h-11 shrink-0 items-center" href="#cohete">
              Cohete
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="escudo" className="mx-auto max-w-6xl px-4 pb-8 pt-8 md:px-8 md:pt-12">
          <div className="grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <figure className="mx-auto w-full min-w-0 max-w-md border border-ink/25 bg-paper px-3 py-5 md:px-6">
              <div className="mb-1 flex items-center justify-between px-1">
                <Octahedron className="h-16 w-14 text-ink" />
                <Star className="size-14 text-ink" />
              </div>
              <Capsule
                coverage={stats.coverage}
                hot={stats.termica >= 55}
                testing={false}
                labeled
                className="w-full text-ink"
              />
              <figcaption className="mt-3 flex items-baseline justify-between gap-3 px-1">
                <span className="text-xs tracking-widest text-ink uppercase">Lámina del cuaderno</span>
                <span className="text-sm text-muted">
                  {notebook ? "Fórmula escrita" : "Mezcla en curso"}
                </span>
              </figcaption>
            </figure>

            <div className="min-w-0">
              <p className="text-xs font-medium tracking-widest text-ink uppercase">
                E.T. · Extraterrestre
              </p>
              <h1 className="mt-3 max-w-xl font-display text-5xl leading-none font-medium text-balance text-inkblack md:text-7xl">
                Escudo térmico
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-inkblack">
                Sistema de protección térmica. Se mezcla titaneo, caucho, cerámica o barro,
                aserrín de cedro, caoba y pino, cera de abeja africana y de monte, y TCAS APU —
                corteza de palo de hule.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted">
                TPS también nombra al Tribunal Supremo de Protección: el programa para
                centroamericanos en EE. UU.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="ember" onClick={() => smoothTo("mezcla")}>
                  Mezclar
                </Button>
                <Button variant="line" onClick={() => smoothTo("programa")}>
                  Ver el programa
                </Button>
              </div>
              <ul className="mt-8 flex max-w-full gap-3 overflow-x-auto pb-2">
                {CARDS.map((card) => (
                  <li key={card.name} className="w-36 shrink-0">
                    <a
                      href="#mezcla"
                      className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      <img
                        src={card.image}
                        alt={card.name}
                        width={720}
                        height={720}
                        className="aspect-square w-full object-cover"
                      />
                      <span className="mt-2 block font-display text-lg leading-tight">{card.name}</span>
                      <span className="mt-1 block text-xs leading-snug text-muted">{card.line}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="mezcla" className="mx-auto max-w-6xl px-4 py-8 md:px-8">
          <div className="border border-ink/20 bg-paper p-4 md:p-8">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-widest text-ink uppercase">Mezclar</p>
              <h2 className="mt-2 font-display text-4xl leading-none font-medium text-balance md:text-5xl">
                Partes del escudo
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted">
                TCAS APU, en este cuaderno, no es el aviso de aviación: es corteza de palo de
                hule. Cada control es una parte. La lámina de arriba se tiñe con la mezcla.
              </p>
            </div>

            <div className="mt-8 grid gap-10 lg:grid-cols-5">
              <ul className="flex flex-col gap-5 lg:col-span-3">
                {MATERIALS.map((material) => (
                  <li key={material.id}>
                    <label htmlFor={material.id} className="flex gap-3">
                      <img
                        src={material.image}
                        alt=""
                        width={720}
                        height={720}
                        className="size-12 shrink-0 object-cover"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="flex items-baseline justify-between gap-3">
                          <span className="font-display text-xl leading-tight">{material.name}</span>
                          <span className="text-lg tabular-nums text-ink">{mix[material.id]}</span>
                        </span>
                        <span className="mt-0.5 flex items-baseline justify-between gap-3">
                          <span className="text-xs text-muted">{material.line}</span>
                          <span className="text-xs tabular-nums text-muted">
                            {stats.total > 0
                              ? `${Math.round((mix[material.id] / stats.total) * 100)}%`
                              : "0%"}
                          </span>
                        </span>
                        <input
                          id={material.id}
                          type="range"
                          min={0}
                          max={24}
                          step={1}
                          value={mix[material.id]}
                          aria-valuetext={`${mix[material.id]} partes de ${material.name}`}
                          onChange={(event) => setPart(material.id, Number(event.target.value))}
                        />
                      </span>
                    </label>
                  </li>
                ))}
              </ul>

              <aside className="lg:sticky lg:top-20 lg:col-span-2 lg:self-start">
                <div className="border border-ink/20 p-4">
                  <div className="mx-auto w-full min-w-0 max-w-xs">
                    <Capsule
                      coverage={stats.coverage}
                      hot={stats.termica >= 55}
                      testing={false}
                    />
                  </div>
                  <p className="mt-2 text-center text-sm text-muted">{recipeLine(mix)}</p>
                  <div className="mt-4 flex h-3 overflow-hidden bg-ink/10" aria-hidden="true">
                    {stats.segments.map((segment) => (
                      <div
                        key={segment.id}
                        className={segment.className}
                        style={{ width: `${segment.pct}%` }}
                      />
                    ))}
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
                    <li className="inline-flex items-center gap-1.5">
                      <i className={`inline-block size-2 ${roleClass("calor")}`} aria-hidden />
                      Cara de calor
                    </li>
                    <li className="inline-flex items-center gap-1.5">
                      <i className={`inline-block size-2 ${roleClass("ligante")}`} aria-hidden />
                      Ligante
                    </li>
                    <li className="inline-flex items-center gap-1.5">
                      <i className={`inline-block size-2 ${roleClass("aislante")}`} aria-hidden />
                      Aserrín
                    </li>
                    <li className="inline-flex items-center gap-1.5">
                      <i className={`inline-block size-2 ${roleClass("sello")}`} aria-hidden />
                      Cera
                    </li>
                  </ul>

                  <dl className="mt-5 flex flex-col gap-3">
                    <Meter label="Térmica" value={stats.termica} tone="ember" />
                    <Meter label="Sellado" value={stats.sellado} tone="ink" />
                    <Meter label="Aislamiento" value={stats.aislamiento} tone="ink" />
                    <Meter label="Flexión" value={stats.flex} tone="ink" />
                    <Meter label="Peso" value={stats.peso} tone="ink" />
                  </dl>

                  <p className="mt-5 font-display text-3xl leading-none tabular-nums">
                    {formatTemp(stats.holdC)}
                  </p>
                  <p className="mt-1 text-sm text-muted">Techo del modelo · {copy.title}</p>

                  <label className="mt-5 block text-sm" htmlFor="lote-nombre">
                    Nombre del lote
                    <input
                      id="lote-nombre"
                      className={FIELD}
                      value={loteName}
                      maxLength={48}
                      placeholder="Escudo del cuaderno"
                      onChange={(event) => setLoteName(event.target.value)}
                    />
                  </label>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button variant="ember" onClick={seal} disabled={stats.total <= 0}>
                      Sellar mezcla
                    </Button>
                    {notebook ? null : (
                      <Button variant="line" onClick={() => setMix(NOTEBOOK_MIX)}>
                        Fórmula del cuaderno
                      </Button>
                    )}
                    <Button
                      variant="line"
                      onClick={() =>
                        setMix({
                          titanio: 0,
                          caucho: 0,
                          cedro: 0,
                          caoba: 0,
                          pino: 0,
                          ceramica: 0,
                          ceraAfricana: 0,
                          ceraMonte: 0,
                          tcas: 0,
                        })
                      }
                    >
                      Vaciar
                    </Button>
                  </div>
                </div>

                {lotes.length > 0 ? (
                  <ul className="mt-4 flex flex-col gap-2">
                    {lotes.map((lote) => (
                      <li key={lote.id}>
                        <button
                          type="button"
                          onClick={() => {
                            setMix(lote.mix);
                            smoothTo("mezcla");
                          }}
                          className={`w-full border px-3 py-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                            sealedId === lote.id ? "border-ember" : "border-ink/20"
                          }`}
                        >
                          <span className="flex items-baseline justify-between gap-3">
                            <span className="font-display text-lg leading-tight">{lote.name}</span>
                            <span className="shrink-0 text-sm tabular-nums text-ink">
                              {formatTemp(lote.holdC)}
                            </span>
                          </span>
                          <span className="mt-1 block text-xs text-muted">
                            {formatWhen(lote.at)} · tocar para cargar
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </aside>
            </div>
          </div>
        </section>

        <section id="programa" className="mx-auto max-w-6xl px-4 py-8 md:px-8">
          <div className="border border-ink p-1.5">
            <div className="border border-ink px-5 py-8 md:px-10 md:py-12">
              <div className="flex items-center gap-4 text-ink">
                <Star className="size-14" />
                <Octahedron className="h-16 w-14" />
              </div>
              <p className="mt-6 text-xs font-medium tracking-widest text-ink uppercase">
                Programa de protección
              </p>
              <h2 className="mt-3 max-w-3xl font-display text-4xl leading-none font-medium text-balance md:text-6xl">
                Para centroamericanos en EE. UU.
              </h2>
              <p className="mt-6 font-display text-2xl leading-snug text-ink md:text-3xl">
                <span className="mr-3">1</span>
                Tribunal Supremo de Protección
                <span className="ml-2 text-lg text-muted">TPS</span>
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-pretty">
                Primera pieza del programa, como quedó escrita. Aquí se asienta un acta: nombre,
                país y qué hay que proteger. Vive en este aparato, en tu navegador. No es un
                tribunal del Estado ni un trámite migratorio.
              </p>

              <form className="mt-8 max-w-xl" onSubmit={fileActa}>
                <label className="block text-sm" htmlFor="acta-nombre">
                  Nombre
                  <input
                    id="acta-nombre"
                    className={FIELD}
                    value={nombre}
                    maxLength={80}
                    autoComplete="name"
                    onChange={(event) => setNombre(event.target.value)}
                  />
                </label>
                <label className="mt-4 block text-sm" htmlFor="acta-pais">
                  País
                  <select
                    id="acta-pais"
                    className={`${FIELD} min-h-11`}
                    value={pais}
                    onChange={(event) => setPais(event.target.value)}
                  >
                    <option value="">Centroamérica</option>
                    {PAISES.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="mt-4 block text-sm" htmlFor="acta-nota">
                  Qué se protege
                  <textarea
                    id="acta-nota"
                    className={`${FIELD} mt-1 min-h-24 resize-y`}
                    value={nota}
                    maxLength={400}
                    onChange={(event) => setNota(event.target.value)}
                  />
                </label>
                {formError ? (
                  <p className="mt-3 text-sm text-ember" role="alert">
                    {formError}
                  </p>
                ) : null}
                <Button className="mt-5" variant="ink" type="submit">
                  Asentar acta
                </Button>
              </form>

              {actas.length > 0 ? (
                <ul className="mt-8 grid gap-3 md:grid-cols-2">
                  {actas.map((acta) => (
                    <li key={acta.id} className="border border-ink/20 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-display text-2xl leading-tight">{acta.nombre}</p>
                          <p className="mt-1 text-sm text-ink">{acta.pais}</p>
                        </div>
                        <Star className="size-8 shrink-0 text-ink" />
                      </div>
                      {acta.nota ? (
                        <p className="mt-3 text-sm leading-relaxed text-pretty">{acta.nota}</p>
                      ) : null}
                      <div className="mt-3 flex items-center justify-between gap-3">
                        <p className="text-xs text-muted">{formatWhen(acta.at)}</p>
                        <button
                          type="button"
                          className="inline-flex min-h-11 items-center text-sm text-ink"
                          onClick={() =>
                            setActas((current) => current.filter((item) => item.id !== acta.id))
                          }
                        >
                          Quitar
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-8 text-sm text-muted">Aún no hay actas asentadas.</p>
              )}
            </div>
          </div>
        </section>

        <section id="cohete" className="mx-auto max-w-6xl px-4 py-8 md:px-8">
          <div className="grid items-center gap-8 border border-ink/20 bg-paper p-4 md:p-8 lg:grid-cols-2">
            <div className="mx-auto w-full min-w-0 max-w-sm">
              <Prueba
                coverage={stats.coverage}
                hot={stats.termica >= 55}
                holdC={stats.holdC}
                verdictTitle={copy.title}
                verdictBody={copy.body}
                armed={stats.total > 0}
                mixKey={MATERIALS.map((material) => mix[material.id]).join(".")}
              />
            </div>
            <div>
              <p className="text-xs font-medium tracking-widest text-ink uppercase">
                Prueba térmica
              </p>
              <h2 className="mt-2 font-display text-4xl leading-none font-medium text-balance md:text-5xl">
                Enciende el cohete
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-pretty text-muted">
                La subida llega al techo de esta mezcla. Si la cara es titaneo y cerámica, el
                modelo entra en calor de reentrada. Si solo hay cera o aserrín, el escudo cede.
              </p>
              <p className="mt-4 text-sm text-muted">
                Modelo del cuaderno. No es un ensayo de laboratorio.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-8 md:px-8">
          <details className="group border border-ink/20 bg-paper">
            <summary className="flex min-h-14 list-none items-center justify-between gap-4 px-5 py-3">
              <span className="font-display text-2xl">Tal como está escrito</span>
              <span className="text-sm text-ink group-open:hidden">Abrir</span>
              <span className="hidden text-sm text-ink group-open:inline">Cerrar</span>
            </summary>
            <div className="grid gap-8 border-t border-ink/15 px-5 py-6 md:grid-cols-3">
              <Transcript
                title="Primer apunte"
                lines={[
                  "Titanio ceramicado",
                  "Caucho",
                  "Aserrín",
                  "Barrios, árboles",
                  "Cera de abeja de monte",
                ]}
              />
              <Transcript
                title="Fórmula"
                lines={[
                  "E.T. · Extraterrestre",
                  "Escudo térmico",
                  "Titaneo",
                  "Cerámica o barro",
                  "Aserrín de cedro, caoba, pino",
                  "Cera de abeja africana",
                  "Cera de abeja de monte",
                  "TCAS APU = corteza de palo de hule",
                  "Mezclar",
                ]}
              />
              <Transcript
                title="Programa"
                lines={[
                  "(TPS) Sistema de protección térmica",
                  "1) Tribunal Supremo de Protección (TPS)",
                  "Programa de Protección para Centroamericanos en UUSS",
                ]}
              />
            </div>
          </details>
        </section>
      </main>

      <footer className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <p className="font-display text-xl">TPS</p>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-pretty text-muted">
          Sistema de protección térmica y Tribunal Supremo de Protección. Reconstrucción del
          cuaderno: no sustituye un ensayo de materiales ni un trámite oficial.
        </p>
      </footer>
    </>
  );
}

function Meter({ label, value, tone }: { label: string; value: number; tone: "ink" | "ember" }) {
  const width = Math.round(value);
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <dt>{label}</dt>
        <dd className="tabular-nums text-muted">{width}</dd>
      </div>
      <div className="mt-1 h-1.5 bg-ink/10">
        <div
          className={tone === "ember" ? "h-full bg-ember" : "h-full bg-ink"}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

function Transcript({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div>
      <h3 className="font-display text-xl">{title}</h3>
      <ul className="mt-3 flex flex-col gap-1.5 text-sm leading-relaxed">
        {lines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}

function Prueba({
  coverage,
  hot,
  holdC,
  verdictTitle,
  verdictBody,
  armed,
  mixKey,
}: {
  coverage: number;
  hot: boolean;
  holdC: number;
  verdictTitle: string;
  verdictBody: string;
  armed: boolean;
  mixKey: string;
}) {
  const [phase, setPhase] = useState<"idle" | "run" | "done">("idle");
  const [progress, setProgress] = useState(0);
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    setPhase("idle");
    setProgress(0);
  }, [mixKey]);

  useEffect(() => {
    if (phase !== "run") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setProgress(1);
      setPhase("done");
      return;
    }
    const start = performance.now();
    const duration = 4200;
    let frame = 0;
    const tick = (now: number) => {
      const next = Math.min(1, (now - start) / duration);
      setProgress(next);
      if (next < 1) frame = requestAnimationFrame(tick);
      else setPhase("done");
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [phase, runId]);

  const shown =
    phase === "idle" ? holdC : Math.round(20 + progress * Math.max(0, holdC - 20));
  const lit = phase !== "idle" && armed;

  return (
    <div>
      <Cohete coverage={coverage} hot={hot} lit={lit} />
      <p className="mt-2 text-center font-display text-4xl tabular-nums" aria-live="polite">
        {armed ? formatTemp(shown) : "—"}
      </p>
      <p className="mt-1 text-center text-sm text-ink">{verdictTitle}</p>
      {phase === "done" ? (
        <p className="mx-auto mt-3 max-w-sm text-center text-sm leading-relaxed text-pretty text-muted">
          {verdictBody}
        </p>
      ) : null}
      <div className="mt-4 flex justify-center">
        <Button
          variant="ember"
          disabled={phase === "run"}
          onClick={() => {
            if (!armed) {
              setPhase("done");
              return;
            }
            setProgress(0);
            setPhase("run");
            setRunId((value) => value + 1);
          }}
        >
          <Flame className="size-4" aria-hidden />
          {phase === "run" ? "Subiendo…" : "Encender"}
        </Button>
      </div>
    </div>
  );
}
