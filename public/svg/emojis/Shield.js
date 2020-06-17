import React from "react"

export default function Shield() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs/>
      <path fill="#E6EBEF" d="M51.932 8.902c-4.304-8.391-35.561-8.35-39.867 0-.211.42-5.22 10.425-2.998 23.762 2.674 16.021 22.608 28.711 22.932 28.711.322 0 20.261-12.689 22.933-28.711 2.222-13.337-2.785-23.342-3-23.762z"/>
      <radialGradient id="aShield" cx="31.687" cy="29.6299" r="20.378" gradientTransform="matrix(1 0 0 1.5 0 -14.8149)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff"/>
        <stop offset=".3553" stop-color="#fcfcfc"/>
        <stop offset=".6383" stop-color="#f2f3f5"/>
        <stop offset=".8956" stop-color="#e1e4e7"/>
        <stop offset="1" stop-color="#d8dce0"/>
      </radialGradient>
      <path fill="url(#aShield)" d="M55.305 29.713C56.414 17.879 52.131 9.289 51.932 8.9c-2.17-4.23-11.192-6.314-20.158-6.273v27.086h23.531z"/>
      <radialGradient id="bShield" cx="31.8115" cy="29.6919" r="19.883" gradientTransform="matrix(1 0 0 1.5 0 -14.8459)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#ff2121"/>
        <stop offset=".2778" stop-color="#fb1f1f"/>
        <stop offset=".537" stop-color="#f0181b"/>
        <stop offset=".7879" stop-color="#dd0d13"/>
        <stop offset="1" stop-color="#c7000a"/>
      </radialGradient>
      <path fill="url(#bShield)" d="M31.774 29.713V61.26c.123.07.207.113.225.113.322 0 20.261-12.689 22.933-28.709.168-1.006.283-1.986.373-2.951H31.774z"/>
      <radialGradient id="cShield" cx="31.812" cy="29.6919" r="19.883" gradientTransform="matrix(1 0 0 1.5 0 -14.8459)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#ff2121"/>
        <stop offset=".2778" stop-color="#fb1f1f"/>
        <stop offset=".537" stop-color="#f0181b"/>
        <stop offset=".7879" stop-color="#dd0d13"/>
        <stop offset="1" stop-color="#c7000a"/>
      </radialGradient>
      <path fill="url(#cShield)" d="M31.774 2.627C22.959 2.666 14.2 4.762 12.065 8.9c-.195.389-4.479 8.979-3.37 20.813h23.079V2.627z"/>
      <radialGradient id="dShield" cx="31.6875" cy="29.6294" r="20.3784" gradientTransform="matrix(1 0 0 1.5 0 -14.8147)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fff"/>
        <stop offset=".3553" stop-color="#fcfcfc"/>
        <stop offset=".6383" stop-color="#f2f3f5"/>
        <stop offset=".8956" stop-color="#e1e4e7"/>
        <stop offset="1" stop-color="#d8dce0"/>
      </radialGradient>
      <path fill="url(#dShield)" d="M8.695 29.713c.091.965.205 1.945.372 2.951 2.531 15.166 20.521 27.34 22.707 28.596V29.713H8.695z"/>
      <linearGradient id="eShield" x1="12.8472" x2="51.1545" y1="6.8384" y2="45.1457" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#b3c2c6"/>
        <stop offset=".2131" stop-color="#aebdc1"/>
        <stop offset=".4787" stop-color="#a0adb2"/>
        <stop offset=".771" stop-color="#889499"/>
        <stop offset="1" stop-color="#717b80"/>
      </linearGradient>
      <path fill="url(#eShield)" d="M32.034 5.945c9.943 0 15.875 2.533 16.753 4.248.047.093 4.746 9.482 2.686 21.846-1.896 11.375-14.312 21.686-19.474 25.283-5.162-3.598-17.573-13.906-19.473-25.283-2.035-12.223 2.507-21.494 2.68-21.84.884-1.715 6.844-4.254 16.828-4.254m0-3.945C22.942 2 13.842 4.141 11.64 8.41c-.215.43-5.33 10.647-3.06 24.27C11.31 49.041 31.668 62 31.999 62c.329 0 20.693-12.959 23.421-29.32 2.27-13.623-2.844-23.84-3.064-24.27C50.16 4.132 41.101 2 32.034 2z"/>
    </svg>
  );
}
