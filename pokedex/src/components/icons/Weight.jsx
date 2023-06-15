import * as React from "react"
import Svg, { Path, Defs } from "react-native-svg"

export function WeightIcon(props) {
  return (
    <Svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <Path
          d="M14.453 2.08h-2.026c-.913-1.206-2.347-2-3.974-2-1.628 0-3.061.794-3.975 2H2.453c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h12c1.102 0 2-.897 2-2v-10c0-1.102-.898-2-2-2zm-6-1a4 4 0 110 8 4 4 0 010-8zm7 13a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1h1.423a4.959 4.959 0 00-.423 2c0 2.757 2.243 5 5 5 2.756 0 5-2.243 5-5a4.96 4.96 0 00-.424-2h1.424a1 1 0 011 1v10zm-7-6c.827 0 1.5-.672 1.5-1.5 0-.434-.19-.823-.486-1.097l.945-2.206a.5.5 0 10-.92-.393L8.548 5.09c-1.108-.072-1.594.886-1.594 1.49 0 .828.672 1.5 1.5 1.5zm0-2a.5.5 0 110 1 .5.5 0 010-1z"
          fill="#212121"
        />
      <Defs>
          <Path fill="#fff" transform="translate(.453 .08)" d="M0 0H16V16H0z" />
      </Defs>
    </Svg>
  )
}
