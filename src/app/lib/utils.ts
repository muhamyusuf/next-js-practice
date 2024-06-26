import type { Metadata } from "next";

export function constructMetadata({
    title = 'Weather App',
    description = 'Next js App Practice',
    image = '/next.svg',
    icons = '/vercel.svg',
  }: {
    title?: string
    description?: string
    image?: string
    icons?: string
  } = {}): Metadata {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [{ url: image }],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image],
        creator: '',
      },
      icons,
    }
  }