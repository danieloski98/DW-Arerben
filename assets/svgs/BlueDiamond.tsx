import * as React from "react"
import Svg, { SvgProps, Defs, ClipPath, Path, G } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={47}
      height={46}
      viewBox="0 0 47 46"
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path
            data-name="Rectangle 322"
            transform="translate(-.161 .409)"
            fill="#fff"
            stroke="#707070"
            d="M0 0h47v46H0z"
          />
        </ClipPath>
      </Defs>
      <G
        data-name="blue diamond"
        transform="translate(.161 -.409)"
        clipPath="url(#prefix__a)"
      >
        <Path
          data-name="Path 173"
          d="M12.094 17.909H1.532a1.343 1.343 0 01-1.243-.864 1.456 1.456 0 01.283-1.53l10.7-11.362a1.313 1.313 0 01.956-.419h5.281a1.33 1.33 0 011.142.667 1.465 1.465 0 01.059 1.368l-5.415 11.362a1.338 1.338 0 01-1.201.778z"
          fill="#a0ebff"
        />
        <Path
          data-name="Path 174"
          d="M44.319 17.909H33.757a1.338 1.338 0 01-1.2-.778L27.14 5.769a1.465 1.465 0 01.059-1.368 1.33 1.33 0 011.142-.667h5.281a1.313 1.313 0 01.956.419l10.7 11.362a1.457 1.457 0 01.283 1.53 1.343 1.343 0 01-1.242.864z"
          fill="#73c8f0"
        />
        <Path
          data-name="Path 175"
          d="M10.593 16.466l6.918-12.732h10.83l6.9 12.732z"
          fill="#d2f0ff"
        />
        <Path
          data-name="Path 176"
          d="M32.3 16.466L21.7 41.569a1.444 1.444 0 00.506 1.755 1.3 1.3 0 00.721.221 1.316 1.316 0 001.012-.481L45.33 17.428a1.447 1.447 0 00.331-.962H32.3z"
          fill="#0073aa"
        />
        <Path
          data-name="Path 177"
          d="M13.547 16.466H.189a1.447 1.447 0 00.331.962l21.395 25.637a1.316 1.316 0 001.012.481 1.294 1.294 0 00.721-.221 1.444 1.444 0 00.506-1.755z"
          fill="#41b4e6"
        />
        <Path
          data-name="Path 178"
          d="M10.593 16.466l11.1 26.242a1.319 1.319 0 002.456 0l11.088-26.242z"
          fill="#a0ebff"
        />
        <Path
          data-name="Path 179"
          d="M22.915 16.466h12.322l-6.9-12.732h-5.422z"
          fill="#41b4e6"
        />
        <Path
          data-name="Path 180"
          d="M22.925 43.545a1.342 1.342 0 001.228-.837l11.083-26.242H22.925z"
          fill="#73c8f0"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
