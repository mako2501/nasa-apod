
/* z https://api.nasa.gov/ */

export interface Apod {
  date: string;          // Data foto 
  explanation: string;   // Opis
  hdurl?: string;        // URL do obrazu w hd
  media_type: string;    // Typ mediów-"image"/"video"
  service_version: string; // Wersja serwisu
  title: string;         // Tytuł obrazu
  url: string;           // URL do obrazu/wideo
  thumbnail_url?: string; // Return the URL of video thumbnail. If an APOD is not a video, this parameter is ignored
  copyright: string; 
}
