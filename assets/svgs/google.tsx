import * as React from "react"
import Svg, { SvgProps, Defs, ClipPath, Path, G } from "react-native-svg"

function Google(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      {...props}
    >
      <Defs>
        <ClipPath id="prefix__a">
          <Path
            data-name="Rectangle 57"
            transform="translate(653 257)"
            fill="gray"
            stroke="#707070"
            d="M0 0h20v20H0z"
          />
        </ClipPath>
      </Defs>
      <G transform="translate(-653 -257)" clipPath="url(#prefix__a)">
        <G data-name="search (10)" fill="gray">
          <Path
            data-name="Path 37"
            d="M658.074 268.85l-.616 2.3-2.251.048a8.862 8.862 0 01-.065-8.267l2 .367.878 1.992a5.28 5.28 0 00.05 3.555z"
          />
          <Path
            data-name="Path 38"
            d="M671.692 265.347a8.843 8.843 0 01-3.154 8.552l-2.524-.129-.357-2.23a5.273 5.273 0 002.269-2.692h-4.732v-3.5h8.5z"
          />
          <Path
            data-name="Path 39"
            d="M668.538 273.898a8.85 8.85 0 01-13.331-2.706l2.87-2.35a5.262 5.262 0 007.579 2.7z"
          />
          <Path
            data-name="Path 40"
            d="M668.646 260.19l-2.866 2.346a5.261 5.261 0 00-7.756 2.755l-2.882-2.36a8.849 8.849 0 0113.5-2.742z"
          />
        </G>
      </G>
    </Svg>
  )
}

export default Google;
