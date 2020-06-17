import React from "react"

import Desktop from './Desktop'
import Tablet from './Tablet'
import Mobile from './Mobile'

export default function GCC() {
  return (
    <>
      <div className="gcg">
        <Desktop/>
        <Tablet/>
        <Mobile/>
      </div>
    </>
  );
}
