import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Flame } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BwiFXJPT.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex min-h-11 items-center justify-center gap-2 px-4 font-sans text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:pointer-events-none disabled:opacity-40", {
	variants: { variant: {
		ink: "bg-ink text-paper hover:bg-ink/90",
		ember: "bg-ember text-paper hover:bg-ember/90",
		line: "border border-ink/40 bg-transparent text-ink hover:border-ink"
	} },
	defaultVariants: { variant: "ink" }
});
function Button({ className, variant, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonVariants({ variant }), className),
		...props
	});
}
function starPoints(cx, cy, outer, inner) {
	const points = [];
	for (let i = 0; i < 10; i += 1) {
		const angle = -Math.PI / 2 + i * Math.PI / 5;
		const radius = i % 2 === 0 ? outer : inner;
		points.push(`${(cx + Math.cos(angle) * radius).toFixed(2)},${(cy + Math.sin(angle) * radius).toFixed(2)}`);
	}
	return points.join(" ");
}
function Star({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 100 100",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
			points: starPoints(50, 52, 44, 18),
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2.2",
			strokeLinejoin: "round"
		})
	});
}
function Octahedron({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 148",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.7",
			strokeLinejoin: "round",
			strokeLinecap: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "60,8 106,74 60,140 14,74" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "60,46 106,74 60,102 14,74" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "60",
					y1: "8",
					x2: "60",
					y2: "140"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "8",
			r: "3.2",
			fill: "var(--color-ember)",
			stroke: "none"
		})]
	});
}
var CAPSULE = "M100 16 C128 52 142 96 146 146 L146 286 Q146 308 100 308 Q54 308 54 286 L54 146 C58 96 72 52 100 16 Z";
function Capsule({ coverage, hot, testing, labeled = false, className }) {
	const clip = (0, import_react.useId)().replace(/:/g, "");
	const cols = 3;
	const rows = 6;
	const tiles = [];
	for (let row = 0; row < rows; row += 1) for (let col = 0; col < cols; col += 1) {
		const vary = .72 + (row * 3 + col) % 4 * .08;
		tiles.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: 66 + col * 24,
			y: 162 + row * 22,
			width: "20",
			height: "18",
			fill: "currentColor",
			className: hot || testing ? "text-ember" : "text-ink",
			opacity: coverage <= 0 ? 0 : Math.min(.95, coverage * vary)
		}, `${row}-${col}`));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: labeled ? "0 0 292 328" : "40 0 120 328",
		width: labeled ? 292 : 120,
		height: 328,
		className: `h-auto max-w-full ${className ?? "w-full text-ink"}`,
		role: "img",
		"aria-label": "Escudo térmico extraterrestre",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: clip,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "60",
					y: "156",
					width: "80",
					height: "140"
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: CAPSULE,
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				clipPath: `url(#${clip})`,
				className: testing ? "tps-heat" : void 0,
				children: [
					tiles,
					Array.from({ length: 7 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "58",
						x2: "142",
						y1: 160 + index * 22,
						y2: 160 + index * 22,
						stroke: "currentColor",
						strokeOpacity: "0.35"
					}, `h-${index}`)),
					[
						78,
						100,
						122
					].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: x,
						x2: x,
						y1: "156",
						y2: "296",
						stroke: "currentColor",
						strokeOpacity: "0.35"
					}, `v-${x}`))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: CAPSULE,
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.8",
				className: testing ? "text-ember" : "text-ink"
			}),
			labeled ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "text-ink",
				fill: "currentColor",
				stroke: "currentColor",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M168 168 H186",
						fill: "none",
						strokeWidth: "1.4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M168 168 l8 -4.5 v9 Z",
						stroke: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "196",
						y: "158",
						stroke: "none",
						fontFamily: "Fraunces, Palatino, serif",
						fontSize: "20",
						children: "Escudo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "196",
						y: "182",
						stroke: "none",
						fontFamily: "Fraunces, Palatino, serif",
						fontSize: "20",
						children: "térmico"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "196",
						y: "208",
						stroke: "none",
						fontFamily: "Outfit, sans-serif",
						fontSize: "15",
						children: "E.T."
					})
				]
			}) : null
		]
	});
}
function Cohete({ coverage, hot, lit, className }) {
	const clip = (0, import_react.useId)().replace(/:/g, "");
	const tiles = [];
	for (let row = 0; row < 5; row += 1) for (let col = 0; col < 3; col += 1) tiles.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: 78 + col * 22,
		y: 168 + row * 22,
		width: "18",
		height: "18",
		fill: "currentColor",
		className: hot || lit ? "text-ember" : "text-ink",
		opacity: coverage <= 0 ? 0 : Math.min(.95, coverage * (.7 + (row + col) % 3 * .1))
	}, `${row}-${col}`));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 320 500",
		width: 320,
		height: 500,
		className: `h-auto max-w-full ${className ?? "w-full text-ink"}`,
		role: "img",
		"aria-label": "Cohete con el escudo aplicado",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("clipPath", {
				id: clip,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "74",
					y: "162",
					width: "72",
					height: "112"
				})
			}) }),
			lit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				className: "tps-flame text-ember",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M96 392 C102 438 108 458 120 478 C132 458 138 438 144 392 Z",
					fill: "currentColor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M106 392 C110 424 114 442 120 456 C126 442 130 424 134 392 Z",
					fill: "var(--color-paper)",
					opacity: "0.45"
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "120,28 168,150 72,150",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "72",
				y: "150",
				width: "96",
				height: "210",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				clipPath: `url(#${clip})`,
				className: lit ? "tps-heat" : void 0,
				children: tiles
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "120,28 168,150 72,150",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.8",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "72",
				y: "150",
				width: "96",
				height: "210",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "1.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "120",
				y1: "36",
				x2: "120",
				y2: "148",
				stroke: "currentColor",
				strokeOpacity: "0.3"
			}),
			[
				172,
				194,
				216,
				238,
				260
			].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "72",
				x2: "168",
				y1: y,
				y2: y,
				stroke: "currentColor",
				strokeOpacity: "0.28"
			}, y)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "72,250 28,332 72,308",
				fill: "var(--color-paper)",
				stroke: "currentColor",
				strokeWidth: "1.8",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "168,250 212,332 168,308",
				fill: "var(--color-paper)",
				stroke: "currentColor",
				strokeWidth: "1.8",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "88,360 152,360 164,396 76,396",
				fill: "var(--color-paper)",
				stroke: "currentColor",
				strokeWidth: "1.8",
				strokeLinejoin: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "currentColor",
				stroke: "currentColor",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M196 214 H214",
						fill: "none",
						strokeWidth: "1.4"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M196 214 l8 -4.5 v9 Z",
						stroke: "none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "224",
						y: "222",
						stroke: "none",
						fontFamily: "Fraunces, Palatino, serif",
						fontSize: "22",
						children: "COHETE"
					})
				]
			})
		]
	});
}
var MATERIALS = [
	{
		id: "titanio",
		name: "Titaneo",
		line: "Titanio ceramicado",
		image: "/specimens/titanio.jpg",
		role: "calor"
	},
	{
		id: "caucho",
		name: "Caucho",
		line: "Caucho natural",
		image: "/specimens/caucho.jpg",
		role: "ligante"
	},
	{
		id: "cedro",
		name: "Aserrín de cedro",
		line: "Árboles · cedro",
		image: "/specimens/aserrin.jpg",
		role: "aislante"
	},
	{
		id: "caoba",
		name: "Aserrín de caoba",
		line: "Árboles · caoba",
		image: "/specimens/aserrin.jpg",
		role: "aislante"
	},
	{
		id: "pino",
		name: "Aserrín de pino",
		line: "Árboles · pino",
		image: "/specimens/aserrin.jpg",
		role: "aislante"
	},
	{
		id: "ceramica",
		name: "Cerámica o barro",
		line: "Cerámica. o barro",
		image: "/specimens/ceramica.jpg",
		role: "calor"
	},
	{
		id: "ceraAfricana",
		name: "Cera africana",
		line: "Cera de abeja africana",
		image: "/specimens/cera.jpg",
		role: "sello"
	},
	{
		id: "ceraMonte",
		name: "Cera de monte",
		line: "Cera de abeja de monte",
		image: "/specimens/cera.jpg",
		role: "sello"
	},
	{
		id: "tcas",
		name: "TCAS APU",
		line: "Corteza de palo de hule",
		image: "/specimens/corteza.jpg",
		role: "ligante"
	}
];
var CARDS = [
	{
		name: "Titaneo",
		line: "Titanio ceramicado",
		image: "/specimens/titanio.jpg"
	},
	{
		name: "Caucho",
		line: "Del primer apunte",
		image: "/specimens/caucho.jpg"
	},
	{
		name: "Aserrín",
		line: "Cedro, caoba y pino",
		image: "/specimens/aserrin.jpg"
	},
	{
		name: "Cerámica",
		line: "O barro",
		image: "/specimens/ceramica.jpg"
	},
	{
		name: "Ceras",
		line: "Abeja africana y de monte",
		image: "/specimens/cera.jpg"
	},
	{
		name: "TCAS APU",
		line: "Corteza de palo de hule",
		image: "/specimens/corteza.jpg"
	}
];
var NOTEBOOK_MIX = {
	titanio: 16,
	caucho: 8,
	cedro: 7,
	caoba: 7,
	pino: 6,
	ceramica: 14,
	ceraAfricana: 9,
	ceraMonte: 8,
	tcas: 14
};
var PAISES = [
	"Guatemala",
	"El Salvador",
	"Honduras",
	"Nicaragua",
	"Costa Rica",
	"Panamá",
	"Belice"
];
var VERDICT_COPY = {
	desnudo: {
		title: "Sin mezcla",
		body: "El escudo está en blanco. Carga la fórmula del cuaderno o mueve las partes."
	},
	cede: {
		title: "El escudo cede",
		body: "Falta cara dura, o sobra orgánico suelto. Sube titaneo y cerámica. La cera sella; no sostiene el calor sola."
	},
	aguanta: {
		title: "El escudo aguanta",
		body: "Calor, sello y aislamiento juntos. Es la zona de la fórmula escrita."
	},
	reentrada: {
		title: "Cara de reentrada",
		body: "Titaneo ceramicado y cerámica dominan el frente. En este modelo, el escudo entra en régimen de reentrada."
	}
};
var ROLE_CLASS = {
	calor: "bg-ember",
	ligante: "bg-ink",
	aislante: "bg-ink/30",
	sello: "bg-ember/50"
};
function roleClass(role) {
	return ROLE_CLASS[role];
}
function clamp(n, min, max) {
	return Math.min(max, Math.max(min, n));
}
function totalParts(mix) {
	return MATERIALS.reduce((sum, material) => sum + mix[material.id], 0);
}
function share(mix, ids) {
	const total = totalParts(mix);
	if (total <= 0) return 0;
	return ids.reduce((sum, id) => sum + mix[id], 0) / total;
}
function isNotebook(mix) {
	return MATERIALS.every((material) => mix[material.id] === NOTEBOOK_MIX[material.id]);
}
function recipeLine(mix) {
	const parts = MATERIALS.filter((material) => mix[material.id] > 0).map((material) => `${material.name} ${mix[material.id]}`);
	return parts.length > 0 ? parts.join(" · ") : "Sin partes";
}
function analyze(mix) {
	const total = totalParts(mix);
	const ceramicMetal = share(mix, ["titanio", "ceramica"]);
	const binder = share(mix, ["caucho", "tcas"]);
	const wax = share(mix, ["ceraAfricana", "ceraMonte"]);
	const dust = share(mix, [
		"cedro",
		"caoba",
		"pino"
	]);
	const termica = total === 0 ? 0 : clamp(ceramicMetal * 160 + binder * 30, 0, 100);
	const sellado = total === 0 ? 0 : clamp(wax * 160 + binder * 55, 0, 100);
	const aislamiento = total === 0 ? 0 : clamp(dust * 180 + wax * 45 + ceramicMetal * 15, 0, 100);
	const flex = total === 0 ? 0 : clamp(binder * 150 + wax * 25 - ceramicMetal * 25, 0, 100);
	const peso = total === 0 ? 0 : clamp(ceramicMetal * 95 + binder * 40 + dust * 12, 0, 100);
	const holdC = total === 0 ? 0 : clamp(Math.round(400 + ceramicMetal * 1100 + binder * 280 + dust * 80 - wax * 90), 220, 1720);
	let verdict = "desnudo";
	if (total > 0 && holdC >= 1200) verdict = "reentrada";
	else if (total > 0 && holdC >= 760) verdict = "aguanta";
	else if (total > 0) verdict = "cede";
	const segments = MATERIALS.map((material) => ({
		id: material.id,
		name: material.name,
		parts: mix[material.id],
		pct: total === 0 ? 0 : mix[material.id] / total * 100,
		className: ROLE_CLASS[material.role]
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
		coverage: clamp(total / 48, 0, 1)
	};
}
function sanitizeMix(value) {
	if (!value || typeof value !== "object") return null;
	const record = value;
	const mix = { ...NOTEBOOK_MIX };
	for (const material of MATERIALS) {
		const n = record[material.id];
		if (typeof n !== "number" || !Number.isFinite(n)) return null;
		mix[material.id] = clamp(Math.round(n), 0, 24);
	}
	return mix;
}
function formatTemp(celsius) {
	if (celsius <= 0) return "—";
	return `${new Intl.NumberFormat("es").format(celsius)} °C`;
}
var MIX_KEY = "tps.v1.mix";
var LOTES_KEY = "tps.v1.lotes";
var ACTAS_KEY = "tps.v1.actas";
var FIELD = "w-full border-0 border-b border-ink/30 bg-transparent px-0 py-2 text-base text-inkblack outline-none focus:border-ink";
function loadJson(key) {
	try {
		const raw = localStorage.getItem(key);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
function sanitizeLotes(value) {
	if (!Array.isArray(value)) return [];
	return value.flatMap((item) => {
		if (!item || typeof item !== "object") return [];
		const record = item;
		const mix = sanitizeMix(record.mix);
		if (!mix || typeof record.id !== "string" || typeof record.name !== "string") return [];
		return [{
			id: record.id,
			name: record.name,
			mix,
			holdC: typeof record.holdC === "number" ? record.holdC : analyze(mix).holdC,
			at: typeof record.at === "string" ? record.at : (/* @__PURE__ */ new Date()).toISOString()
		}];
	});
}
function sanitizeActas(value) {
	if (!Array.isArray(value)) return [];
	return value.flatMap((item) => {
		if (!item || typeof item !== "object") return [];
		const record = item;
		if (typeof record.id !== "string" || typeof record.nombre !== "string") return [];
		if (typeof record.pais !== "string") return [];
		return [{
			id: record.id,
			nombre: record.nombre,
			pais: record.pais,
			nota: typeof record.nota === "string" ? record.nota : "",
			at: typeof record.at === "string" ? record.at : (/* @__PURE__ */ new Date()).toISOString()
		}];
	});
}
function formatWhen(iso) {
	const date = new Date(iso);
	if (Number.isNaN(date.getTime())) return "";
	return new Intl.DateTimeFormat("es", {
		dateStyle: "medium",
		timeStyle: "short"
	}).format(date);
}
function smoothTo(id) {
	const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
}
function TpsApp() {
	const [mix, setMix] = (0, import_react.useState)(NOTEBOOK_MIX);
	const [lotes, setLotes] = (0, import_react.useState)([]);
	const [actas, setActas] = (0, import_react.useState)([]);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [loteName, setLoteName] = (0, import_react.useState)("");
	const [sealedId, setSealedId] = (0, import_react.useState)(null);
	const [nombre, setNombre] = (0, import_react.useState)("");
	const [pais, setPais] = (0, import_react.useState)("");
	const [nota, setNota] = (0, import_react.useState)("");
	const [formError, setFormError] = (0, import_react.useState)(null);
	const stats = (0, import_react.useMemo)(() => analyze(mix), [mix]);
	const copy = VERDICT_COPY[stats.verdict];
	const notebook = isNotebook(mix);
	(0, import_react.useEffect)(() => {
		const storedMix = sanitizeMix(loadJson(MIX_KEY));
		if (storedMix) setMix(storedMix);
		setLotes(sanitizeLotes(loadJson(LOTES_KEY)).slice(0, 8));
		setActas(sanitizeActas(loadJson(ACTAS_KEY)).slice(0, 30));
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem(MIX_KEY, JSON.stringify(mix));
		localStorage.setItem(LOTES_KEY, JSON.stringify(lotes));
		localStorage.setItem(ACTAS_KEY, JSON.stringify(actas));
	}, [
		ready,
		mix,
		lotes,
		actas
	]);
	function setPart(id, value) {
		setMix((current) => ({
			...current,
			[id]: value
		}));
	}
	function seal() {
		if (stats.total <= 0) return;
		const name = loteName.trim() || `Escudo ${formatTemp(stats.holdC)}`;
		const lote = {
			id: crypto.randomUUID(),
			name,
			mix: { ...mix },
			holdC: stats.holdC,
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		setLotes((current) => [lote, ...current].slice(0, 8));
		setSealedId(lote.id);
		setLoteName("");
	}
	function fileActa(event) {
		event.preventDefault();
		if (nombre.trim().length < 2) {
			setFormError("Escribe el nombre de quien queda bajo protección.");
			return;
		}
		if (!pais) {
			setFormError("Elige un país de Centroamérica.");
			return;
		}
		const acta = {
			id: crypto.randomUUID(),
			nombre: nombre.trim(),
			pais,
			nota: nota.trim(),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		setActas((current) => [acta, ...current].slice(0, 30));
		setNombre("");
		setPais("");
		setNota("");
		setFormError(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-20 border-b border-ink/15 bg-paper/95 backdrop-blur-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col px-4 sm:flex-row sm:items-center sm:justify-between md:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#escudo",
					className: "inline-flex min-h-11 shrink-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-6 text-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl leading-none",
						children: "TPS"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex min-w-0 gap-4 overflow-x-auto text-sm text-ink",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex min-h-11 shrink-0 items-center",
							href: "#escudo",
							children: "Escudo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex min-h-11 shrink-0 items-center",
							href: "#mezcla",
							children: "Mezcla"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex min-h-11 shrink-0 items-center",
							href: "#programa",
							children: "Programa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "inline-flex min-h-11 shrink-0 items-center",
							href: "#cohete",
							children: "Cohete"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "escudo",
				className: "mx-auto max-w-6xl px-4 pb-8 pt-8 md:px-8 md:pt-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid min-w-0 items-center gap-8 lg:grid-cols-2 lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "mx-auto w-full min-w-0 max-w-md border border-ink/25 bg-paper px-3 py-5 md:px-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1 flex items-center justify-between px-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Octahedron, { className: "h-16 w-14 text-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-14 text-ink" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Capsule, {
								coverage: stats.coverage,
								hot: stats.termica >= 55,
								testing: false,
								labeled: true,
								className: "w-full text-ink"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-3 flex items-baseline justify-between gap-3 px-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs tracking-widest text-ink uppercase",
									children: "Lámina del cuaderno"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted",
									children: notebook ? "Fórmula escrita" : "Mezcla en curso"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-widest text-ink uppercase",
								children: "E.T. · Extraterrestre"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-3 max-w-xl font-display text-5xl leading-none font-medium text-balance text-inkblack md:text-7xl",
								children: "Escudo térmico"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-lg leading-relaxed text-pretty text-inkblack",
								children: "Sistema de protección térmica. Se mezcla titaneo, caucho, cerámica o barro, aserrín de cedro, caoba y pino, cera de abeja africana y de monte, y TCAS APU — corteza de palo de hule."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted",
								children: "TPS también nombra al Tribunal Supremo de Protección: el programa para centroamericanos en EE. UU."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ember",
									onClick: () => smoothTo("mezcla"),
									children: "Mezclar"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "line",
									onClick: () => smoothTo("programa"),
									children: "Ver el programa"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 flex max-w-full gap-3 overflow-x-auto pb-2",
								children: CARDS.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "w-36 shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#mezcla",
										className: "block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: card.image,
												alt: card.name,
												width: 720,
												height: 720,
												className: "aspect-square w-full object-cover"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-2 block font-display text-lg leading-tight",
												children: card.name
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-xs leading-snug text-muted",
												children: card.line
											})
										]
									})
								}, card.name))
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "mezcla",
				className: "mx-auto max-w-6xl px-4 py-8 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-ink/20 bg-paper p-4 md:p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-widest text-ink uppercase",
								children: "Mezclar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-4xl leading-none font-medium text-balance md:text-5xl",
								children: "Partes del escudo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-pretty leading-relaxed text-muted",
								children: "TCAS APU, en este cuaderno, no es el aviso de aviación: es corteza de palo de hule. Cada control es una parte. La lámina de arriba se tiñe con la mezcla."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-10 lg:grid-cols-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col gap-5 lg:col-span-3",
							children: MATERIALS.map((material) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								htmlFor: material.id,
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: material.image,
									alt: "",
									width: 720,
									height: 720,
									className: "size-12 shrink-0 object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-baseline justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-display text-xl leading-tight",
												children: material.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-lg tabular-nums text-ink",
												children: mix[material.id]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "mt-0.5 flex items-baseline justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-muted",
												children: material.line
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs tabular-nums text-muted",
												children: stats.total > 0 ? `${Math.round(mix[material.id] / stats.total * 100)}%` : "0%"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: material.id,
											type: "range",
											min: 0,
											max: 24,
											step: 1,
											value: mix[material.id],
											"aria-valuetext": `${mix[material.id]} partes de ${material.name}`,
											onChange: (event) => setPart(material.id, Number(event.target.value))
										})
									]
								})]
							}) }, material.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
							className: "lg:sticky lg:top-20 lg:col-span-2 lg:self-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-ink/20 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mx-auto w-full min-w-0 max-w-xs",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Capsule, {
											coverage: stats.coverage,
											hot: stats.termica >= 55,
											testing: false
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-center text-sm text-muted",
										children: recipeLine(mix)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex h-3 overflow-hidden bg-ink/10",
										"aria-hidden": "true",
										children: stats.segments.map((segment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: segment.className,
											style: { width: `${segment.pct}%` }
										}, segment.id))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
										className: "mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "inline-flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
													className: `inline-block size-2 ${roleClass("calor")}`,
													"aria-hidden": true
												}), "Cara de calor"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "inline-flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
													className: `inline-block size-2 ${roleClass("ligante")}`,
													"aria-hidden": true
												}), "Ligante"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "inline-flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
													className: `inline-block size-2 ${roleClass("aislante")}`,
													"aria-hidden": true
												}), "Aserrín"]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "inline-flex items-center gap-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
													className: `inline-block size-2 ${roleClass("sello")}`,
													"aria-hidden": true
												}), "Cera"]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
										className: "mt-5 flex flex-col gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
												label: "Térmica",
												value: stats.termica,
												tone: "ember"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
												label: "Sellado",
												value: stats.sellado,
												tone: "ink"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
												label: "Aislamiento",
												value: stats.aislamiento,
												tone: "ink"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
												label: "Flexión",
												value: stats.flex,
												tone: "ink"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Meter, {
												label: "Peso",
												value: stats.peso,
												tone: "ink"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 font-display text-3xl leading-none tabular-nums",
										children: formatTemp(stats.holdC)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-sm text-muted",
										children: ["Techo del modelo · ", copy.title]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "mt-5 block text-sm",
										htmlFor: "lote-nombre",
										children: ["Nombre del lote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "lote-nombre",
											className: FIELD,
											value: loteName,
											maxLength: 48,
											placeholder: "Escudo del cuaderno",
											onChange: (event) => setLoteName(event.target.value)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-wrap gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "ember",
												onClick: seal,
												disabled: stats.total <= 0,
												children: "Sellar mezcla"
											}),
											notebook ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "line",
												onClick: () => setMix(NOTEBOOK_MIX),
												children: "Fórmula del cuaderno"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
												variant: "line",
												onClick: () => setMix({
													titanio: 0,
													caucho: 0,
													cedro: 0,
													caoba: 0,
													pino: 0,
													ceramica: 0,
													ceraAfricana: 0,
													ceraMonte: 0,
													tcas: 0
												}),
												children: "Vaciar"
											})
										]
									})
								]
							}), lotes.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 flex flex-col gap-2",
								children: lotes.map((lote) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setMix(lote.mix);
										smoothTo("mezcla");
									},
									className: `w-full border px-3 py-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${sealedId === lote.id ? "border-ember" : "border-ink/20"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-baseline justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-lg leading-tight",
											children: lote.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "shrink-0 text-sm tabular-nums text-ink",
											children: formatTemp(lote.holdC)
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-1 block text-xs text-muted",
										children: [formatWhen(lote.at), " · tocar para cargar"]
									})]
								}) }, lote.id))
							}) : null]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "programa",
				className: "mx-auto max-w-6xl px-4 py-8 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border border-ink p-1.5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-ink px-5 py-8 md:px-10 md:py-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 text-ink",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Octahedron, { className: "h-16 w-14" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-xs font-medium tracking-widest text-ink uppercase",
								children: "Programa de protección"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 max-w-3xl font-display text-4xl leading-none font-medium text-balance md:text-6xl",
								children: "Para centroamericanos en EE. UU."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 font-display text-2xl leading-snug text-ink md:text-3xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mr-3",
										children: "1"
									}),
									"Tribunal Supremo de Protección",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-lg text-muted",
										children: "TPS"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-2xl leading-relaxed text-pretty",
								children: "Primera pieza del programa, como quedó escrita. Aquí se asienta un acta: nombre, país y qué hay que proteger. Vive en este aparato, en tu navegador. No es un tribunal del Estado ni un trámite migratorio."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								className: "mt-8 max-w-xl",
								onSubmit: fileActa,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block text-sm",
										htmlFor: "acta-nombre",
										children: ["Nombre", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											id: "acta-nombre",
											className: FIELD,
											value: nombre,
											maxLength: 80,
											autoComplete: "name",
											onChange: (event) => setNombre(event.target.value)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "mt-4 block text-sm",
										htmlFor: "acta-pais",
										children: ["País", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
											id: "acta-pais",
											className: `${FIELD} min-h-11`,
											value: pais,
											onChange: (event) => setPais(event.target.value),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "",
												children: "Centroamérica"
											}), PAISES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: item,
												children: item
											}, item))]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "mt-4 block text-sm",
										htmlFor: "acta-nota",
										children: ["Qué se protege", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
											id: "acta-nota",
											className: `${FIELD} mt-1 min-h-24 resize-y`,
											value: nota,
											maxLength: 400,
											onChange: (event) => setNota(event.target.value)
										})]
									}),
									formError ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-ember",
										role: "alert",
										children: formError
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										className: "mt-5",
										variant: "ink",
										type: "submit",
										children: "Asentar acta"
									})
								]
							}),
							actas.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-8 grid gap-3 md:grid-cols-2",
								children: actas.map((acta) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "border border-ink/20 p-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "font-display text-2xl leading-tight",
												children: acta.nombre
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-1 text-sm text-ink",
												children: acta.pais
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-8 shrink-0 text-ink" })]
										}),
										acta.nota ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-relaxed text-pretty",
											children: acta.nota
										}) : null,
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-3 flex items-center justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs text-muted",
												children: formatWhen(acta.at)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "inline-flex min-h-11 items-center text-sm text-ink",
												onClick: () => setActas((current) => current.filter((item) => item.id !== acta.id)),
												children: "Quitar"
											})]
										})
									]
								}, acta.id))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-sm text-muted",
								children: "Aún no hay actas asentadas."
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "cohete",
				className: "mx-auto max-w-6xl px-4 py-8 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-8 border border-ink/20 bg-paper p-4 md:p-8 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-full min-w-0 max-w-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prueba, {
							coverage: stats.coverage,
							hot: stats.termica >= 55,
							holdC: stats.holdC,
							verdictTitle: copy.title,
							verdictBody: copy.body,
							armed: stats.total > 0,
							mixKey: MATERIALS.map((material) => mix[material.id]).join(".")
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-widest text-ink uppercase",
							children: "Prueba térmica"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-4xl leading-none font-medium text-balance md:text-5xl",
							children: "Enciende el cohete"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xl leading-relaxed text-pretty text-muted",
							children: "La subida llega al techo de esta mezcla. Si la cara es titaneo y cerámica, el modelo entra en calor de reentrada. Si solo hay cera o aserrín, el escudo cede."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: "Modelo del cuaderno. No es un ensayo de laboratorio."
						})
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-4 py-8 md:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
					className: "group border border-ink/20 bg-paper",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
						className: "flex min-h-14 list-none items-center justify-between gap-4 px-5 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-2xl",
								children: "Tal como está escrito"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-ink group-open:hidden",
								children: "Abrir"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-sm text-ink group-open:inline",
								children: "Cerrar"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 border-t border-ink/15 px-5 py-6 md:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transcript, {
								title: "Primer apunte",
								lines: [
									"Titanio ceramicado",
									"Caucho",
									"Aserrín",
									"Barrios, árboles",
									"Cera de abeja de monte"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transcript, {
								title: "Fórmula",
								lines: [
									"E.T. · Extraterrestre",
									"Escudo térmico",
									"Titaneo",
									"Cerámica o barro",
									"Aserrín de cedro, caoba, pino",
									"Cera de abeja africana",
									"Cera de abeja de monte",
									"TCAS APU = corteza de palo de hule",
									"Mezclar"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transcript, {
								title: "Programa",
								lines: [
									"(TPS) Sistema de protección térmica",
									"1) Tribunal Supremo de Protección (TPS)",
									"Programa de Protección para Centroamericanos en UUSS"
								]
							})
						]
					})]
				})
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "mx-auto max-w-6xl px-4 py-10 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl",
				children: "TPS"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm leading-relaxed text-pretty text-muted",
				children: "Sistema de protección térmica y Tribunal Supremo de Protección. Reconstrucción del cuaderno: no sustituye un ensayo de materiales ni un trámite oficial."
			})]
		})
	] });
}
function Meter({ label, value, tone }) {
	const width = Math.round(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-3 text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "tabular-nums text-muted",
			children: width
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 h-1.5 bg-ink/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: tone === "ember" ? "h-full bg-ember" : "h-full bg-ink",
			style: { width: `${width}%` }
		})
	})] });
}
function Transcript({ title, lines }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "font-display text-xl",
		children: title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-3 flex flex-col gap-1.5 text-sm leading-relaxed",
		children: lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line }, line))
	})] });
}
function Prueba({ coverage, hot, holdC, verdictTitle, verdictBody, armed, mixKey }) {
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [runId, setRunId] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setPhase("idle");
		setProgress(0);
	}, [mixKey]);
	(0, import_react.useEffect)(() => {
		if (phase !== "run") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setProgress(1);
			setPhase("done");
			return;
		}
		const start = performance.now();
		const duration = 4200;
		let frame = 0;
		const tick = (now) => {
			const next = Math.min(1, (now - start) / duration);
			setProgress(next);
			if (next < 1) frame = requestAnimationFrame(tick);
			else setPhase("done");
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [phase, runId]);
	const shown = phase === "idle" ? holdC : Math.round(20 + progress * Math.max(0, holdC - 20));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cohete, {
			coverage,
			hot,
			lit: phase !== "idle" && armed
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-center font-display text-4xl tabular-nums",
			"aria-live": "polite",
			children: armed ? formatTemp(shown) : "—"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-center text-sm text-ink",
			children: verdictTitle
		}),
		phase === "done" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mx-auto mt-3 max-w-sm text-center text-sm leading-relaxed text-pretty text-muted",
			children: verdictBody
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				variant: "ember",
				disabled: phase === "run",
				onClick: () => {
					if (!armed) {
						setPhase("done");
						return;
					}
					setProgress(0);
					setPhase("run");
					setRunId((value) => value + 1);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, {
					className: "size-4",
					"aria-hidden": true
				}), phase === "run" ? "Subiendo…" : "Encender"]
			})
		})
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TpsApp, {});
}
//#endregion
export { Home as component };
