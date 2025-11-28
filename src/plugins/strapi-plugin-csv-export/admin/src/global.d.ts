/// <reference types="react" />

declare global {
  interface Window {
    strapi?: any;
    location?: Location;
    URL?: {
      createObjectURL(blob: Blob): string;
      revokeObjectURL(url: string): void;
    };
    alert?(message: string): void;
  }
}

export {};

