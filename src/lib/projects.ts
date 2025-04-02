import busTrackerThumbnailLight from '../assets/thumbnails/bus-tracker-thumbnail-light.png';
import busTrackerThumbnailDark from '../assets/thumbnails/bus-tracker-thumbnail-dark.png';
import azumaThumbnail from '../assets/thumbnails/azuma-thumbnail.png';

export type Project = {
	name: string;
	description: string;
	tags: string[];
	url?: string;
	repository_url?: string;
	thumbnails?: {
		light: ImageMetadata;
		dark: ImageMetadata;
	};
	coming_soon?: boolean;
};

export const projects = [
	{
		name: 'KVG Bus Tracker',
		description: 'A modern and user-friendly third-party solution that utilizes the API from KVG Kiel to obtain real-time departures of the buses.',
		tags: ['Typescript', 'Next.js', 'Tailwind CSS'],
		url: 'https://bus.nairol.me',
		repository_url: 'https://github.com/nairol203/bus-tracker',
		thumbnails: {
			light: busTrackerThumbnailLight,
			dark: busTrackerThumbnailDark,
		},
	},
	{
		name: 'Nairol Spotify Stats',
		description:
			'Provides various statistics about your Spotify account. For example, it displays top tracks and top albums. The Spotify API is utilized to gather this information.',
		tags: ['Typescript', 'Next.js', 'Next Auth', 'TRPC', 'Tailwind CSS'],
		url: 'https://spotify-stats.nairol.me',
		repository_url: 'https://github.com/nairol203/spotify-stats',
	},
	{
		name: 'FFXIV Island Rare Animals',
		description:
			'A site for the rare animals of the Island Sanctuary. It is possible to filter every weather-dependent creature. Additionally, it displays both Eorzean times and local times.',
		tags: ['Typescript', 'Next.js', 'Mantine'],
		repository_url: 'https://github.com/nairol203/ffxiv-island-rare-animals',
	},
	{
		name: 'Azuma Discord Bot',
		description:
			'A Discord game bot that includes many mini-games such as Rock, Paper, Scissors, and Blackjack. Additionally, it features a large fishing game where players can catch various fish and complete their collection.',
		tags: ['Typescript', 'Next.js', 'Next Auth', 'Drizzle', 'Tailwind CSS'],
		thumbnails: {
			light: azumaThumbnail,
			dark: azumaThumbnail,
		},
		coming_soon: true,
	},
	{
		name: 'Smartphone Plug',
		description:
			'A simple script that turns off a Tasmota-flashed smart plug when the voltage falls below a certain threshold, preventing the smartphone from fully charging to extend battery life.',
		tags: ['Javascript', 'Smart Home', 'Tasmota'],
		repository_url: 'https://github.com/nairol203/smartphone-plug',
	},
	{
		name: 'Amazon Scraper',
		description: 'Amazon Scraper can run on a Rasperry Pi and scrapes prices from Amazon, which are stored in a Drizzle Database',
		tags: ['Typescript', 'Drizzle'],
		repository_url: 'https://github.com/nairol203/amazon-scraper',
	},
	{
		name: 'Spotify Clone',
		description: 'A Spotify client implemented using the Spotify API. The project is not production-ready, it is only intended for further education.',
		tags: ['Typescript', 'Next.js', 'Next Auth', 'Tailwind CSS'],
		repository_url: 'https://github.com/nairol203/spotify-clone',
	},
] satisfies Project[];
