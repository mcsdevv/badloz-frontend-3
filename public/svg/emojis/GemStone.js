import React from "react"

export default function GemStone() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs/>
      <linearGradient id="aGemStone" x1="2" x2="62" y1="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#57E5FF"/>
        <stop offset=".194" stop-color="#52E0FD"/>
        <stop offset=".422" stop-color="#45D2F8"/>
        <stop offset=".668" stop-color="#2FBAEF"/>
        <stop offset=".925" stop-color="#1199E2"/>
        <stop offset="1" stop-color="#078EDE"/>
      </linearGradient>
      <path fill="url(#aGemStone)" d="M49 4H15L2 20.057 32 60l30-39.943z"/>
      <linearGradient id="bGemStone" x1="18.77" x2="44.48" y1="40.028" y2="40.028" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#26AEFF"/>
        <stop offset="1" stop-color="#56E4FF"/>
      </linearGradient>
      <path fill="url(#bGemStone)" d="M32 60l12.48-39.943H18.77z"/>
      <linearGradient id="cGemStone" x1="7.539" x2="11.914" y1="5.255" y2="28.005" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#56E4FF"/>
        <stop offset="1" stop-color="#26AEFF"/>
      </linearGradient>
      <path fill="url(#cGemStone)" d="M2 20.057h16.77L15 4z"/>
      <linearGradient id="dGemStone" x1="44.48" x2="62" y1="12.028" y2="12.028" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#56E4FF"/>
        <stop offset="1" stop-color="#26AEFF"/>
      </linearGradient>
      <path fill="url(#dGemStone)" d="M49 4l-4.52 16.057H62z"/>
      <path fill="#BFF3FF" d="M31.625 4L18.77 20.057h25.71z"/>
    </svg>
  );
}
