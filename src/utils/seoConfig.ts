// Type importsyarn
import type { ManifestOptions } from "vite-plugin-pwa"

const Metadata: Record<string, { title: string, description: string, canonical: string }> = {
	home: {
		title: "Veracines - Cines de Verano en Vera y Garrucha",
		description: "Cine de verano en Vera y Garrucha. Descubre las películas de estreno en Vera y Garrucha. Disvruta la experiencia del cine de verano en Veracines.",
		canonical: "https://www.veracines.es"
	},
	"cartelera-vera": {
		title: "Cartelera Veracines",
		description: "Cartelera del cine de verano en Vera. Descubre las películas de estreno en Vera. Disvruta la experiencia del cine de verano en Veracines.",
		canonical: "https://www.veracines.es/cartelera-vera"
	},
	//"cartelera-garrucha": {
	//	title: "Cartelera Cines",
	//	description: "Cartelera de Cine Tenis de Garrucha. Descubre las películas de estreno en Garrucha. Disvruta la experiencia del cine de verano en Veracines.",
	//	canonical: "https://www.veracines.es/cartelera-cines"
	//},
	"cartelera-regio": {
		title: "Cartelera Regio",
		description: "Cartelera del cine de invierno en Vera. Descubre las películas de estreno en Vera. Disvruta la experiencia del cine Regio en Veracines.",
		canonical: "https://www.veracines.es/cartelera-regio"
	},

} as const

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: Metadata.home.canonical, // Production URL.
	description: Metadata.home.description,
	type: "website",
	image: {
		url: `${Metadata.home.canonical}/img/logo.jpg`,
		alt: "Veracines",
		width: 705,
		height: 606,
	},
	siteName: "Veracines",
	twitter: {
		card: "summary_large_image",
	},
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: Metadata.home.title,
	short_name: "Veracines",
	description: Metadata.home.description,
	theme_color: "#2e4390",
	background_color: "#2e4390",
	display: "fullscreen",
	icons: [
		{
			src: "/img/icons/favicon.png",
			sizes: "192x192",
			type: "image/png",
		},

	],
}
