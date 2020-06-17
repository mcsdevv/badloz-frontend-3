import React from "react"

export default function Sun() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs/>
      <radialGradient id="aSun" cx="32" cy="32" r="30" gradientUnits="userSpaceOnUse">
        <stop offset=".37" stop-color="#F90"/>
        <stop offset=".379" stop-color="#FF9C03"/>
        <stop offset=".479" stop-color="#FFB620"/>
        <stop offset=".586" stop-color="#FFCA37"/>
        <stop offset=".701" stop-color="#FFD847"/>
        <stop offset=".829" stop-color="#FFE051"/>
        <stop offset="1" stop-color="#FFE354"/>
      </radialGradient>
      <path fill="url(#aSun)" d="M50.184 36.871L62 31.998l-11.816-4.873 7.797-10.127-12.67 1.688 1.688-12.668-10.127 7.797L31.998 2l-4.871 11.814L16.998 6.02l1.689 12.668L6.018 17l7.797 10.127L2 32l11.814 4.871L6.02 47l12.668-1.689L17 57.98l10.127-7.797L32 62l4.873-11.816L47 57.98l-1.688-12.67 12.668 1.688-7.796-10.127z"/>
      <radialGradient id="bSun" cx="29.63" cy="29.552" r="18" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#FFD500"/>
        <stop offset=".381" stop-color="#FFD200"/>
        <stop offset=".715" stop-color="#FFC700"/>
        <stop offset="1" stop-color="#FFB700"/>
      </radialGradient>
      <circle cx="31.999" cy="32" r="18" fill="url(#bSun)"/>
    </svg>
  );
}
