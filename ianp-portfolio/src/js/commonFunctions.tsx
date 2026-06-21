//This file contains functions that are used throughout the site

export function ScrollToPosition(yPos: number) {
  window.scrollTo({top: yPos, behavior: "smooth"});
}

export function NavigateTo(url: string) {
    window.open(url);
}

export function DownloadFile(file: string) {
  
  const link = document.createElement('a');
  link.href = file;
  link.download = 'ian_paulhamus_resume.pdf';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}