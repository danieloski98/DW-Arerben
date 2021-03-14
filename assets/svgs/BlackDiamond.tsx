import * as React from "react"
import Svg, { SvgProps, Defs, ClipPath, Path, G } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={44}
      height={44}
      viewBox="0 0 44 44"
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path
            data-name="Rectangle 280"
            transform="translate(.463 -.343)"
            fill="#fff"
            stroke="#707070"
            d="M0 0h44v44H0z"
          />
        </ClipPath>
      </Defs>
      <G
        data-name="black diamond"
        transform="translate(-.463 .343)"
        clipPath="url(#prefix__a)"
      >
        <Path
          data-name="Path 141"
          d="M12.007 16.569h-10.2a1.3 1.3 0 01-1.2-.816 1.352 1.352 0 01.273-1.445L11.217 3.579a1.282 1.282 0 01.924-.4h5.1a1.291 1.291 0 011.1.63 1.356 1.356 0 01.066 1.296l-5.233 10.73a1.3 1.3 0 01-1.167.734z"
          fill="#4b4b4b"
        />
        <Path
          data-name="Path 142"
          d="M43.15 16.569H32.944a1.3 1.3 0 01-1.161-.735L26.55 5.105a1.356 1.356 0 01.057-1.292 1.291 1.291 0 011.1-.63h5.1a1.283 1.283 0 01.924.4l10.343 10.725a1.352 1.352 0 01.273 1.445 1.3 1.3 0 01-1.197.816z"
          fill="#797979"
        />
        <Path
          data-name="Path 143"
          d="M10.56 15.206l6.684-12.023H27.71l6.668 12.023z"
          fill="#bcbcbc"
        />
        <Path
          data-name="Path 144"
          d="M31.539 15.207L21.291 38.913a1.346 1.346 0 00.489 1.658 1.275 1.275 0 001.674-.246l20.673-24.21a1.347 1.347 0 00.319-.909H31.539z"
          fill="#2b2b2b"
        />
        <Path
          data-name="Path 145"
          d="M13.415 15.207H.507a1.347 1.347 0 00.319.909L21.5 40.325a1.275 1.275 0 001.674.246 1.346 1.346 0 00.489-1.658z"
          fill="#656565"
        />
        <Path
          data-name="Path 146"
          d="M10.56 15.207l10.731 24.781a1.285 1.285 0 002.373 0l10.714-24.781z"
          fill="#4b4b4b"
        />
        <Path
          data-name="Path 147"
          d="M22.467 15.206h11.911L27.71 3.183h-5.243z"
          fill="#434343"
        />
        <Path
          data-name="Path 148"
          d="M22.477 40.779a1.3 1.3 0 001.186-.791l10.714-24.781h-11.9z"
          fill="#797979"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
