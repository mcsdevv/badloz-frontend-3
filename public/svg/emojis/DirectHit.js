import React from "react"

export default function DirectHit() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs/>
      <linearGradient id="aDirectHit" x1="2" x2="62" y1="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#ff000e"/>
        <stop offset=".7283" stop-color="#dd0004"/>
        <stop offset="1" stop-color="#cf0000"/>
      </linearGradient>
      <circle cx="32" cy="32" r="30" fill="url(#aDirectHit)"/>
      <circle cx="32" cy="32" r="22" fill="#FFF"/>
      <linearGradient id="bDirectHit" x1="17" x2="47" y1="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#ff000e"/>
        <stop offset=".7283" stop-color="#dd0004"/>
        <stop offset="1" stop-color="#cf0000"/>
      </linearGradient>
      <circle cx="32" cy="32" r="15" fill="url(#bDirectHit)"/>
      <circle cx="32" cy="32" r="7" fill="#FFF"/>
      <path fill="#302C3B" d="M31 31.667s1 19.5 12.867 27.893c0 0 4.918-1.955 9.066-6.073C48.848 43.563 41.098 43.063 31 31.667z" opacity=".2"/>
      <path fill="#99A8AE" d="M32.739 32.76c-.826.826-2.322-.673-1.498-1.498 4.749-4.751 6.247-3.252 1.498 1.498z"/>
      <linearGradient id="cDirectHit" x1="43.8672" x2="62" y1="14.5508" y2="14.5508" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#009af7"/>
        <stop offset=".1209" stop-color="#0da3f4"/>
        <stop offset=".4955" stop-color="#30baec"/>
        <stop offset=".8019" stop-color="#46c9e8"/>
        <stop offset="1" stop-color="#4ecee6"/>
      </linearGradient>
      <path fill="url(#cDirectHit)" d="M55.555 8.445L43.867 20.132s9.287 2.419 14.805-3.1c9.006-9.005-3.117-8.587-3.117-8.587z"/>
      <linearGradient id="dDirectHit" x1="42.7451" x2="47.1991" y1="16.8018" y2="21.2557" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#2289c7"/>
        <stop offset="1" stop-color="#005687"/>
      </linearGradient>
      <path fill="url(#dDirectHit)" d="M37.768 30.687c-3.986 3.986-8.439-.468-4.453-4.454C41.227 18.319 56.59 5.806 57.393 6.607c.8.802-11.713 16.166-19.625 24.08z"/>
      <linearGradient id="eDirectHit" x1="43.3398" x2="55.5508" y1="10.1836" y2="10.1836" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#009af7"/>
        <stop offset=".1209" stop-color="#0da3f4"/>
        <stop offset=".4955" stop-color="#30baec"/>
        <stop offset=".8019" stop-color="#46c9e8"/>
        <stop offset="1" stop-color="#4ecee6"/>
      </linearGradient>
      <path fill="url(#eDirectHit)" d="M43.533 18.286c-.396-2.991-.561-8.963 3.434-12.958 7.691-7.69 8.508.028 8.584 2.445.012.415-11.867 11.652-12.018 10.513z"/>
    </svg>
  );
}
