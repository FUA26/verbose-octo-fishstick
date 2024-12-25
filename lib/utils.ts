import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { slug } from "github-slugger";
import { Metadata } from "next";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const slugify = (str: string) => {
  return slug(str);
};

export const generateCommonMeta = (meta: {
  title: string;
  description: string;
  image?: string;
}): Metadata => {
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
  };
};