export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  href: string
}

export interface NavigationConfig {
  brandName: string
  links: NavigationLink[]
}

export interface HeroConfig {
  eyebrow: string
  titleLines: string[]
  leadText: string
  supportingNotes: string[]
}

export interface ManifestoConfig {
  videoPath: string
  text: string
}

export interface FacilityArticle {
  title: string
  paragraphs: string[]
}

export interface FacilityItem {
  slug: string
  name: string
  code: string
  address: string
  status: string
  email: string
  phone: string
  ctaText: string
  ctaHref: string
  image: string
  utcOffset: number
  article: FacilityArticle
}

export interface FacilitiesConfig {
  sectionLabel: string
  detailBackText: string
  detailNotFoundText: string
  detailReturnText: string
  items: FacilityItem[]
}

export interface ObservationConfig {
  sectionLabel: string
  videoPath: string
  statusText: string
  latLabel: string
  lonLabel: string
  initialLat: number
  initialLon: number
}

export interface ArchiveItem {
  src: string
  label: string
}

export interface ArchivesConfig {
  sectionLabel: string
  vaultTitle: string
  closeText: string
  items: ArchiveItem[]
}

export interface FooterConfig {
  copyrightText: string
  statusText: string
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "LUNAR OBSERVATORY — ASCII MOON",
  siteDescription:
    "A distributed network of lunar observation facilities, archiving the moon in monochrome since 1969.",
}

export const navigationConfig: NavigationConfig = {
  brandName: "LUNAR OBSERVATORY",
  links: [
    { label: "Manifesto", href: "#manifesto" },
    { label: "Facilities", href: "#facilities" },
    { label: "Observation", href: "#observation" },
    { label: "Archives", href: "#archives" },
  ],
}

export const heroConfig: HeroConfig = {
  eyebrow: "EST. 1969 — GLOBAL LUNAR MONITORING NETWORK",
  titleLines: ["THE MOON,", "RENDERED", "IN TEXT"],
  leadText:
    "We operate a distributed network of observation stations recording the lunar surface in real time — translated, line by line, into characters.",
  supportingNotes: [
    "03 ACTIVE FACILITIES / 02 HEMISPHERES",
    "SIGNAL LATENCY: 1.28 LIGHT-SECONDS",
    "ARCHIVE STATUS: OPEN TO RESEARCHERS",
  ],
}

export const manifestoConfig: ManifestoConfig = {
  videoPath: "",
  text: "We believe the moon is not an image but a dataset. Every crater, ridge, and mare is reduced to signal — captured by our stations, converted to ASCII, and preserved in the permanent archive. What photography romanticizes, we transcribe. Character by character, the moon becomes legible.",
}

export const facilitiesConfig: FacilitiesConfig = {
  sectionLabel: "FACILITIES / 03",
  detailBackText: "← BACK TO FACILITIES",
  detailNotFoundText: "FACILITY NOT FOUND",
  detailReturnText: "RETURN TO INDEX",
  items: [
    {
      slug: "station-aquila",
      name: "STATION AQUILA",
      code: "FAC-01 / AQL",
      address: "High Desert Plateau, Sector 7",
      status: "OPERATIONAL",
      email: "aquila@lunar-observatory.net",
      phone: "+1 000 555 0101",
      ctaText: "REQUEST ACCESS",
      ctaHref: "mailto:aquila@lunar-observatory.net",
      image: "/images/facility-1.svg",
      utcOffset: -7,
      article: {
        title: "PRIMARY NORTHERN ARRAY",
        paragraphs: [
          "Station Aquila is the network's original site, commissioned in 1969 on a high desert plateau chosen for its low atmospheric turbulence and minimal light contamination.",
          "The station houses a 1.2-meter reflector coupled to a real-time ASCII rendering pipeline, producing continuous character-based telemetry of the lunar surface at 30 frames per second.",
        ],
      },
    },
    {
      slug: "station-meridian",
      name: "STATION MERIDIAN",
      code: "FAC-02 / MRD",
      address: "Equatorial Ridge, Grid Point 0",
      status: "OPERATIONAL",
      email: "meridian@lunar-observatory.net",
      phone: "+1 000 555 0102",
      ctaText: "REQUEST ACCESS",
      ctaHref: "mailto:meridian@lunar-observatory.net",
      image: "/images/facility-2.svg",
      utcOffset: 0,
      article: {
        title: "EQUATORIAL RELAY STATION",
        paragraphs: [
          "Station Meridian sits at the network's longitudinal zero point and functions as the primary relay between the northern and southern arrays.",
          "Its twin-antenna configuration maintains uninterrupted downlink during lunar transit, synchronizing timestamps across all facilities to within one millisecond.",
        ],
      },
    },
    {
      slug: "station-australis",
      name: "STATION AUSTRALIS",
      code: "FAC-03 / AUS",
      address: "Southern Highland Range, Sector 12",
      status: "MAINTENANCE",
      email: "australis@lunar-observatory.net",
      phone: "+1 000 555 0103",
      ctaText: "REQUEST ACCESS",
      ctaHref: "mailto:australis@lunar-observatory.net",
      image: "/images/facility-3.svg",
      utcOffset: 10,
      article: {
        title: "SOUTHERN HEMISPHERE ARRAY",
        paragraphs: [
          "Station Australis extends coverage to the lunar southern latitudes, capturing the heavily cratered highlands invisible to the northern stations.",
          "The facility is currently undergoing scheduled mirror recoating and is expected to return to full operation next cycle.",
        ],
      },
    },
  ],
}

export const observationConfig: ObservationConfig = {
  sectionLabel: "LIVE OBSERVATION FEED",
  videoPath: "",
  statusText: "AWAITING SIGNAL — FEED OFFLINE (PLACEHOLDER)",
  latLabel: "LAT",
  lonLabel: "LON",
  initialLat: 14.62,
  initialLon: -23.48,
}

export const archivesConfig: ArchivesConfig = {
  sectionLabel: "ARCHIVES / PERMANENT COLLECTION",
  vaultTitle: "THE VAULT",
  closeText: "CLOSE",
  items: [
    { src: "/images/archive-1.svg", label: "FRAME 000001 — FIRST LIGHT, 1969" },
    { src: "/images/archive-2.svg", label: "FRAME 004215 — MARE TRANQUILLITATIS" },
    { src: "/images/archive-3.svg", label: "FRAME 019877 — TYCHO CRATER, PERIGEE" },
    { src: "/images/archive-4.svg", label: "FRAME 052300 — TOTAL ECLIPSE SEQUENCE" },
    { src: "/images/archive-5.svg", label: "FRAME 098112 — SOUTH POLE HIGHLANDS" },
    { src: "/images/archive-6.svg", label: "FRAME 120045 — FAR SIDE RELAY TEST" },
  ],
}

export const footerConfig: FooterConfig = {
  copyrightText: "© 2026 LUNAR OBSERVATORY NETWORK. ALL SIGNALS RESERVED.",
  statusText: "SYSTEM NOMINAL — UPTIME 99.97%",
}
