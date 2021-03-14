import * as React from "react"
import Svg, { SvgProps, Defs, ClipPath, Path, G } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={46}
      height={46}
      viewBox="0 0 46 46"
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path
            data-name="Rectangle 314"
            transform="translate(.35 .409)"
            fill="#fff"
            stroke="#707070"
            d="M0 0h46v46H0z"
          />
        </ClipPath>
      </Defs>
      <G
        data-name="orange diamond"
        transform="translate(-.35 -.409)"
        clipPath="url(#prefix__a)"
      >
        <Path
          data-name="Path 165"
          d="M12.57 17.909H2.008a1.343 1.343 0 01-1.243-.864 1.456 1.456 0 01.283-1.53l10.7-11.362a1.313 1.313 0 01.956-.419h5.281a1.33 1.33 0 011.142.667 1.465 1.465 0 01.059 1.368l-5.415 11.362a1.338 1.338 0 01-1.201.778z"
          fill="#fdbd9f"
        />
        <Path
          data-name="Path 166"
          d="M44.795 17.909H34.233a1.338 1.338 0 01-1.2-.778L27.616 5.769a1.465 1.465 0 01.059-1.368 1.33 1.33 0 011.142-.667h5.281a1.313 1.313 0 01.956.419l10.7 11.362a1.457 1.457 0 01.283 1.53 1.343 1.343 0 01-1.242.864z"
          fill="#ff7b3e"
        />
        <Path
          data-name="Path 167"
          d="M11.069 16.466l6.918-12.732h10.83l6.9 12.732z"
          fill="#ffe3d6"
        />
        <Path
          data-name="Path 168"
          d="M32.776 16.466l-10.6 25.103a1.444 1.444 0 00.506 1.755 1.3 1.3 0 00.721.221 1.316 1.316 0 001.012-.481l21.391-25.636a1.447 1.447 0 00.331-.962H32.776z"
          fill="#d94704"
        />
        <Path
          data-name="Path 169"
          d="M14.023 16.466H.665a1.447 1.447 0 00.331.962l21.395 25.637a1.316 1.316 0 001.012.481 1.294 1.294 0 00.721-.221 1.444 1.444 0 00.506-1.755z"
          fill="#f46929"
        />
        <Path
          data-name="Path 170"
          d="M11.069 16.466l11.1 26.242a1.319 1.319 0 002.456 0l11.088-26.242z"
          fill="#fdbd9f"
        />
        <Path
          data-name="Path 171"
          d="M23.391 16.466h12.322l-6.9-12.732h-5.422z"
          fill="#ff892f"
        />
        <Path
          data-name="Path 172"
          d="M23.401 43.545a1.342 1.342 0 001.228-.837l11.083-26.242H23.401z"
          fill="#ff7b3e"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
