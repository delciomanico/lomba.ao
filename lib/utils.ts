import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/lomba.apk'; // caminho relativo à pasta public
    link.download = 'lomba.apk'; // nome do arquivo ao baixar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };