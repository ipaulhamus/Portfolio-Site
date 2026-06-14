//This file contains functions that are used throughout the site

export function ScrollToPosition(yPos: number) {
  window.scrollTo({top: yPos, behavior: "smooth"});
}

export function NavigateTo(url: string) {
    window.open(url);
}