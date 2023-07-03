import { useState } from 'react';

export const useClipboard = () => {
  async function copyToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      console.log('not supported');
      return document.execCommand('copy', true, text);
    }
  }

  return { copyToClipboard };
};
