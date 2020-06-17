import React from "react"

export default function Lock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs/>
      <linearGradient id="aLock" x1="32.0005" x2="32.0005" y1="32" y2="4" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#bec8cc"/>
        <stop offset=".2613" stop-color="#bbc5c9"/>
        <stop offset=".4431" stop-color="#b2bcc0"/>
        <stop offset=".6008" stop-color="#a3adb1"/>
        <stop offset=".7448" stop-color="#8e979b"/>
        <stop offset=".878" stop-color="#737c7f"/>
        <stop offset="1" stop-color="#535b5e"/>
      </linearGradient>
      <path fill="url(#aLock)" d="M32 4c-7.181 0-13 5.904-13 13.188V32h5.443V17.188c0-10.252 15.113-10.252 15.113 0V32H45V17.188C45 9.904 39.178 4 32 4z"/>
      <linearGradient id="bLock" x1="25.9814" x2="25.9814" y1="32" y2="4.7422" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#fafdff" stop-opacity=".7"/>
        <stop offset=".897" stop-color="#fafdff" stop-opacity="0"/>
      </linearGradient>
      <path fill="url(#bLock)" d="M32.481 4.742c-7.181 0-13 5.906-13 13.189V32h1.669V17.932c0-8.586 6.26-12.61 11.331-13.19z"/>
      <linearGradient id="cLock" x1="-121.3691" x2="-121.3691" y1="32" y2="4.7422" gradientTransform="matrix(-1 0 0 1 -83.4561 0)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#0b0c0d" stop-opacity=".3"/>
        <stop offset=".897" stop-color="#0b0c0d" stop-opacity="0"/>
      </linearGradient>
      <path fill="url(#cLock)" d="M31.413 4.742c7.181 0 13 5.906 13 13.189V32h-1.669V17.932c0-8.586-6.26-12.61-11.331-13.19z"/>
      <linearGradient id="dLock" x1="22.5664" x2="41.4336" y1="19.8223" y2="19.8223" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#0b0c0d" stop-opacity=".3"/>
        <stop offset=".0991" stop-color="#242526" stop-opacity=".3198"/>
        <stop offset=".7272" stop-color="#bcbfc1" stop-opacity=".4454"/>
        <stop offset="1" stop-color="#fafdff" stop-opacity=".5"/>
      </linearGradient>
      <path fill="url(#dLock)" d="M41.434 32V17.523c0-13.172-18.867-13.172-18.867 0V32h1.293V16.748c0-10.557 16.281-10.557 16.281 0V32h1.293z"/>
      <linearGradient id="eLock" x1="14" x2="50" y1="45.5605" y2="45.5605" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#ffd231"/>
        <stop offset="1" stop-color="#db7600"/>
      </linearGradient>
      <path fill="url(#eLock)" d="M50 58.898c0 .606-.496 1.102-1.102 1.102H15.102C14.496 60 14 59.504 14 58.898V32.225c0-.605.496-1.104 1.102-1.104h33.797c.605 0 1.102.498 1.102 1.104v26.673z"/>
      <path fill="#C46A12" d="M49.082 31.121c0 1.557-34.164 1.557-34.164 0h34.164z"/>
    </svg>
  );
}
