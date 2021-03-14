import * as React from "react"
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
} from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={48}
      height={48}
      viewBox="0 0 48 48"
      {...props}
    >
      <Defs>
        <LinearGradient
          id="prefix__b"
          x1={0.361}
          y1={0.428}
          x2={-0.043}
          y2={0.218}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#efdcfb" stopOpacity={0} />
          <Stop offset={0.486} stopColor="#baaad6" stopOpacity={0.486} />
          <Stop offset={1} stopColor="#8679b2" />
        </LinearGradient>
        <LinearGradient
          id="prefix__a"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#f8f6fb" />
          <Stop offset={1} stopColor="#efdcfb" />
        </LinearGradient>
        <LinearGradient
          id="prefix__d"
          x1={0.41}
          y1={0.464}
          x2={0.596}
          y2={0.645}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__e"
          x1={1.069}
          y1={0.726}
          x2={0.483}
          y2={0.357}
          xlinkHref="#prefix__b"
        />
        <LinearGradient
          id="prefix__f"
          x1={-20.16}
          y1={-15.536}
          x2={-19.422}
          y2={-15.536}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ffdecf" />
          <Stop offset={1} stopColor="#faa68e" />
        </LinearGradient>
        <LinearGradient
          id="prefix__g"
          x1={-71.052}
          y1={-56.809}
          x2={-70.022}
          y2={-56.809}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#8a7889" />
          <Stop offset={1} stopColor="#6e566e" />
        </LinearGradient>
        <LinearGradient
          id="prefix__h"
          x1={-6.578}
          y1={-4.93}
          x2={-6.339}
          y2={-4.93}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ffd945" />
          <Stop offset={0.304} stopColor="#ffcd3e" />
          <Stop offset={0.856} stopColor="#ffad2b" />
          <Stop offset={1} stopColor="#ffa325" />
        </LinearGradient>
        <LinearGradient
          id="prefix__i"
          x1={-7.318}
          y1={-5.304}
          x2={-7.627}
          y2={-5.36}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#e87264" stopOpacity={0} />
          <Stop offset={0.353} stopColor="#ed725d" stopOpacity={0.353} />
          <Stop offset={0.851} stopColor="#fa704b" stopOpacity={0.851} />
          <Stop offset={1} stopColor="#ff7044" />
        </LinearGradient>
        <ClipPath id="prefix__c">
          <Path
            data-name="Rectangle 380"
            transform="translate(792 280)"
            fill="#b7b7b7"
            d="M0 0h48v48H0z"
          />
        </ClipPath>
      </Defs>
      <G
        data-name="edit profile_icon"
        transform="translate(-792 -280)"
        clipPath="url(#prefix__c)"
      >
        <Path
          data-name="Path 880"
          d="M828.294 282.755v38.091a2.719 2.719 0 01-2.684 2.754h-26.007a2.721 2.721 0 01-2.681-2.755v-29.791c0-.945 5.688-5.078 6.339-5.746 0 0 2.537-4.835 2.545-4.842a1.786 1.786 0 011.197-.466h18.607a2.72 2.72 0 012.684 2.755z"
          fill="#e3ceef"
        />
        <Path
          data-name="Path 881"
          d="M30.166 0H13.581a1.787 1.787 0 00-1.2.466l-.023.02-.05.048L5.57 8.569c-.651.668-2.07 1.539-2.07 2.484v16.319z"
          transform="translate(793.422 280)"
          fill="url(#prefix__b)"
        />
        <Path
          data-name="Path 882"
          d="M35.67 47.2H9.663a2.721 2.721 0 01-2.685-2.755V5.8a2.721 2.721 0 012.685-2.755H35.67A2.721 2.721 0 0138.355 5.8v38.643A2.721 2.721 0 0135.67 47.2z"
          transform="translate(794.226 280.801)"
          fill="url(#prefix__a)"
        />
        <Path
          data-name="Path 883"
          d="M14.088 4.18l-5.93 6.086a1.482 1.482 0 01-1.565.367l-.953-.341a1.621 1.621 0 00-2.14 1.565V11a3.609 3.609 0 011.013-2.518l7.8-8 .05-.048.023-.02a.931.931 0 011.479.432l.587 1.73a1.577 1.577 0 01-.358 1.6z"
          transform="translate(793.422 280.052)"
          fill="url(#prefix__d)"
        />
        <G data-name="Group 2450" fill="#e3ceef">
          <G data-name="Group 2448">
            <Path
              data-name="Path 884"
              d="M828.249 293.095h-22.713a.886.886 0 01-.875-.9v-1.34a.886.886 0 01.875-.9h22.713a.886.886 0 01.875.9v1.342a.886.886 0 01-.875.898z"
            />
            <Path
              data-name="Path 885"
              d="M822.354 300.27h-16.818a.886.886 0 01-.875-.9v-1.338a.886.886 0 01.875-.9h16.818a.886.886 0 01.875.9v1.338a.886.886 0 01-.875.9z"
            />
            <Path
              data-name="Path 886"
              d="M828.249 307.448h-22.713a.886.886 0 01-.875-.9v-1.34a.886.886 0 01.875-.9h22.713a.886.886 0 01.875.9v1.342a.886.886 0 01-.875.898z"
            />
          </G>
          <G data-name="Group 2449">
            <Path
              data-name="Path 887"
              d="M823.289 314.712h-17.753a.886.886 0 01-.875-.9v-1.34a.886.886 0 01.875-.9h17.753a.886.886 0 01.875.9v1.342a.886.886 0 01-.875.898z"
            />
            <Path
              data-name="Path 888"
              d="M818.113 321.889h-12.577a.886.886 0 01-.875-.9v-1.34a.886.886 0 01.875-.9h12.577a.886.886 0 01.875.9v1.342a.886.886 0 01-.875.898z"
            />
          </G>
        </G>
        <Path
          data-name="Path 889"
          d="M35.163 40.115V19.491c-.148.038-13.118 13.535-13.17 13.711l-1.176 3.407a.118.118 0 00.029.116l5.988 6.145h5.644a2.721 2.721 0 002.685-2.756z"
          transform="translate(797.418 285.129)"
          fill="url(#prefix__e)"
        />
        <G data-name="Group 2452">
          <G data-name="Group 2451">
            <Path
              data-name="Path 890"
              d="M26.2 31.443l-2.652-2.721-1.545 1.585a1.115 1.115 0 00-.271.467l-.613 2.1.025 1.069 1.008-.009 2.048-.629a1.076 1.076 0 00.455-.278z"
              transform="translate(797.491 287.558)"
              fill="url(#prefix__f)"
            />
            <Path
              data-name="Path 891"
              d="M21.864 32.386a1.375 1.375 0 00-.666-.378l-.381 1.307a.115.115 0 00.142.146l1.273-.391a1.433 1.433 0 00-.368-.684z"
              transform="translate(797.418 288.423)"
              fill="url(#prefix__g)"
            />
            <Path
              data-name="Path 892"
              d="M23.79 33.935v1.184a.437.437 0 00.749.318l12.652-12.985a.909.909 0 000-1.261l-1.423-1.46a.853.853 0 00-1.229 0L21.887 32.716a.452.452 0 00.31.769h1.154a.445.445 0 01.439.45z"
              transform="translate(797.637 285.123)"
              fill="url(#prefix__h)"
            />
          </G>
          <Path
            data-name="Path 893"
            d="M36.834 20.985l-.711-.73L23.3 33.41a.455.455 0 01.128.318v1.184a.437.437 0 00.749.318l12.657-12.984a.908.908 0 000-1.261z"
            transform="translate(797.994 285.33)"
            fill="url(#prefix__i)"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
