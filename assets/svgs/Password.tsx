import * as React from "react"
import Svg, {
  SvgProps,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
  Circle,
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
          id="prefix__a"
          x1={0.295}
          y1={0.211}
          x2={0.966}
          y2={1.156}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#0b799d" />
          <Stop offset={1} stopColor="#07485e" />
        </LinearGradient>
        <LinearGradient
          id="prefix__e"
          x1={0.877}
          y1={1.054}
          x2={0.001}
          y2={-0.233}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__f"
          x1={0.715}
          y1={0.72}
          x2={0.347}
          y2={-0.039}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#07485e" stopOpacity={0} />
          <Stop offset={1} stopColor="#03232e" />
        </LinearGradient>
        <LinearGradient
          id="prefix__g"
          x1={0.242}
          y1={0.106}
          x2={0.758}
          y2={0.894}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#edf5ff" />
          <Stop offset={1} stopColor="#d5e8fe" />
        </LinearGradient>
        <LinearGradient
          id="prefix__b"
          x1={-0.103}
          y1={-0.016}
          x2={1.245}
          y2={1.138}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#b9dd39" />
          <Stop offset={1} stopColor="#0b799d" />
        </LinearGradient>
        <LinearGradient
          id="prefix__h"
          x1={1.25}
          y1={1.25}
          x2={-0.457}
          y2={-0.457}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__i"
          x1={1.25}
          y1={-295.109}
          x2={-0.457}
          y2={-296.816}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__j"
          x1={0.257}
          y1={0.257}
          x2={1.34}
          y2={1.34}
          xlinkHref="#prefix__b"
        />
        <LinearGradient
          id="prefix__k"
          x1={0.667}
          y1={0.694}
          x2={0.351}
          y2={-0.343}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#b5dbff" stopOpacity={0} />
          <Stop offset={0.173} stopColor="#8fc5e9" stopOpacity={0.173} />
          <Stop offset={0.454} stopColor="#56a4c8" stopOpacity={0.455} />
          <Stop offset={0.696} stopColor="#2d8db1" stopOpacity={0.694} />
          <Stop offset={0.885} stopColor="#147ea2" stopOpacity={0.886} />
          <Stop offset={1} stopColor="#0b799d" />
        </LinearGradient>
        <LinearGradient
          id="prefix__l"
          x1={0.213}
          y1={0.257}
          x2={0.681}
          y2={1.068}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#edf5ff" />
          <Stop offset={1} stopColor="#b5dbff" />
        </LinearGradient>
        <LinearGradient
          id="prefix__m"
          x1={0.5}
          y1={0.807}
          x2={0.5}
          y2={-1.537}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#b5dbff" stopOpacity={0} />
          <Stop offset={0.243} stopColor="#93cef6" stopOpacity={0.243} />
          <Stop offset={0.576} stopColor="#6abfec" stopOpacity={0.576} />
          <Stop offset={0.84} stopColor="#51b5e5" stopOpacity={0.839} />
          <Stop offset={1} stopColor="#48b2e3" />
        </LinearGradient>
        <LinearGradient
          id="prefix__c"
          x1={0.236}
          y1={0.176}
          x2={0.679}
          y2={0.719}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ffda2d" />
          <Stop offset={1} stopColor="#fdbf00" />
        </LinearGradient>
        <LinearGradient
          id="prefix__n"
          x1={1.005}
          y1={0.82}
          x2={-0.148}
          y2={-0.003}
          xlinkHref="#prefix__c"
        />
        <LinearGradient
          id="prefix__o"
          x1={1.035}
          y1={0.797}
          x2={-0.186}
          y2={0.005}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__p"
          x1={0.5}
          y1={0.526}
          x2={0.5}
          y2={1.018}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ff9100" stopOpacity={0} />
          <Stop offset={1} stopColor="#ff9100" />
        </LinearGradient>
        <ClipPath id="prefix__d">
          <Path
            data-name="Rectangle 421"
            transform="translate(1139 280)"
            fill="#b7b7b7"
            d="M0 0h48v48H0z"
          />
        </ClipPath>
      </Defs>
      <G transform="translate(-1139 -280)" clipPath="url(#prefix__d)">
        <G data-name="Group 2557">
          <G data-name="Group 2556">
            <G data-name="Group 2555">
              <G data-name="Group 2554" transform="translate(1141.113 296.933)">
                <Path
                  data-name="Path 1044"
                  d="M42.668 44.472H4.452a2.779 2.779 0 01-2.779-2.779V16.185a2.779 2.779 0 012.779-2.779h38.216a2.779 2.779 0 012.779 2.779v25.508a2.779 2.779 0 01-2.779 2.779z"
                  transform="translate(-1.673 -13.406)"
                  fill="url(#prefix__a)"
                />
                <Path
                  data-name="Path 1045"
                  d="M40.728 42H5.526a2.209 2.209 0 01-2.209-2.209V17.237a2.209 2.209 0 012.209-2.209h35.2a2.209 2.209 0 012.209 2.209v22.55A2.209 2.209 0 0140.728 42z"
                  transform="translate(-1.24 -12.979)"
                  fill="url(#prefix__e)"
                />
                <Path
                  data-name="Path 1046"
                  d="M42.737 41.693V26.415L29.728 13.406H11.971v3.715a1.914 1.914 0 00.767 1.534l25.818 25.817h1.4a2.779 2.779 0 002.781-2.779z"
                  transform="translate(1.038 -13.405)"
                  fill="url(#prefix__f)"
                />
                <Path
                  data-name="Path 1047"
                  d="M39.379 40.387H6.348a2.029 2.029 0 01-2.029-2.029V18.111a2.029 2.029 0 012.029-2.029h33.031a2.029 2.029 0 012.029 2.029v20.247a2.029 2.029 0 01-2.029 2.029z"
                  transform="translate(-.976 -12.701)"
                  fill="url(#prefix__g)"
                />
                <G data-name="Group 2553">
                  <Path
                    data-name="Path 1048"
                    d="M16.278 33.609H7.317a1.127 1.127 0 01-1.127-1.127V21.65a1.127 1.127 0 011.127-1.127h8.961a1.127 1.127 0 011.127 1.127v10.832a1.127 1.127 0 01-1.127 1.127z"
                    transform="translate(-.483 -11.533)"
                    fill="url(#prefix__b)"
                  />
                  <G data-name="Group 2552" fill="#b5dbff">
                    <G data-name="Group 2549">
                      <Path
                        data-name="Path 1049"
                        d="M26.129 12.251h-6.146a.815.815 0 01-.815-.815V9.805a.815.815 0 01.815-.815h6.145a.815.815 0 01.815.815v1.631a.815.815 0 01-.814.815z"
                      />
                      <Path
                        data-name="Path 1050"
                        d="M37.253 12.251h-7.656a.815.815 0 01-.815-.815V9.805a.815.815 0 01.815-.815h7.656a.815.815 0 01.815.815v1.631a.816.816 0 01-.815.815z"
                      />
                    </G>
                    <G data-name="Group 2550">
                      <Path
                        data-name="Path 1051"
                        d="M34.179 17.164h3.073a.815.815 0 00.815-.815v-1.631a.815.815 0 00-.815-.815h-3.073a.815.815 0 00-.815.815v1.631a.815.815 0 00.815.815z"
                      />
                      <Path
                        data-name="Path 1052"
                        d="M19.983 17.164h10.729a.815.815 0 00.815-.815v-1.631a.815.815 0 00-.815-.815H19.983a.815.815 0 00-.815.815v1.631a.816.816 0 00.815.815z"
                      />
                    </G>
                    <G data-name="Group 2551">
                      <Path
                        data-name="Path 1053"
                        d="M26.129 22.076h-6.146a.815.815 0 01-.815-.815V19.63a.815.815 0 01.815-.815h6.145a.815.815 0 01.815.815v1.631a.815.815 0 01-.814.815z"
                      />
                      <Path
                        data-name="Path 1054"
                        d="M37.253 22.076h-7.656a.815.815 0 01-.815-.815V19.63a.815.815 0 01.815-.815h7.656a.815.815 0 01.815.815v1.631a.815.815 0 01-.815.815z"
                      />
                    </G>
                  </G>
                </G>
                <Circle
                  data-name="Ellipse 66"
                  cx={0.849}
                  cy={0.849}
                  r={0.849}
                  transform="translate(21.038 1.2)"
                  fill="url(#prefix__h)"
                />
                <Circle
                  data-name="Ellipse 67"
                  cx={0.533}
                  cy={0.533}
                  r={0.533}
                  transform="translate(21.355 1.516)"
                  fill="url(#prefix__i)"
                />
              </G>
            </G>
          </G>
          <Path
            data-name="Path 1055"
            d="M6.01 37.756h-.631a.655.655 0 01-.655-.655v-.631a.655.655 0 01.655-.655h.631a.655.655 0 01.655.655v.63a.655.655 0 01-.655.656z"
            transform="translate(1140.244 289.425)"
            fill="url(#prefix__j)"
          />
        </G>
        <G
          data-name="Group 2558"
          transform="translate(1147.867 307.27)"
          fill="#07485e"
        >
          <Circle
            data-name="Ellipse 68"
            cx={3.541}
            cy={3.541}
            r={3.541}
            transform="translate(1.007)"
          />
          <Path
            data-name="Path 1056"
            d="M9.005 9.502a.449.449 0 01-.3.746c-1.056.09-2.453.145-3.987.145-1.7 0-3.228-.067-4.313-.175a.448.448 0 01-.294-.743l.006-.006a5.957 5.957 0 018.82-.04l.066.073z"
          />
        </G>
        <Path
          data-name="Path 1057"
          d="M33.069 16.082H12.12v.334a1.775 1.775 0 00.58 1.534l22.436 22.437h2.19a2.029 2.029 0 002.029-2.029v-15.99z"
          transform="translate(1142.19 284.232)"
          fill="url(#prefix__k)"
        />
        <G data-name="Group 2562">
          <G data-name="Group 2559">
            <Path
              data-name="Path 1058"
              d="M27.9 8.71h-2.744V7.55a4.808 4.808 0 00-9.617 0v1.16H12.8V7.55a7.55 7.55 0 1115.1 0z"
              transform="translate(1142.368 280)"
              fill="url(#prefix__l)"
            />
            <Path
              data-name="Path 1059"
              d="M20.08 1.175a6.27 6.27 0 00-6.263 6.263V8.4h1.455V7.241a4.808 4.808 0 019.617 0V8.4h1.455v-.961a6.271 6.271 0 00-6.264-6.264z"
              transform="translate(1142.636 280.309)"
              fill="url(#prefix__m)"
            />
          </G>
          <G data-name="Group 2561">
            <G data-name="Group 2560">
              <Path
                data-name="Path 1060"
                d="M27.812 20.883H13.888a1.917 1.917 0 01-1.917-1.917V8.312a1.917 1.917 0 011.917-1.917h13.924a1.917 1.917 0 011.917 1.917v10.654a1.917 1.917 0 01-1.917 1.917z"
                transform="translate(1142.151 281.683)"
                fill="url(#prefix__c)"
              />
              <Path
                data-name="Path 1061"
                d="M23.113 11.758a3.4 3.4 0 10-4.93 3.042v1.566a1.526 1.526 0 103.053 0V14.8a3.4 3.4 0 001.877-3.042z"
                transform="translate(1143.292 282.199)"
                fill="url(#prefix__n)"
              />
              <Path
                data-name="Path 1062"
                d="M19.525 16.823a.642.642 0 01-.642-.642V14.07l-.487-.245a2.519 2.519 0 112.258 0l-.487.245v2.112a.642.642 0 01-.642.641z"
                transform="translate(1143.476 282.383)"
                fill="url(#prefix__o)"
              />
              <Path
                data-name="Path 1063"
                d="M11.971 14.05v2.9a1.917 1.917 0 001.917 1.917h13.924a1.917 1.917 0 001.917-1.917v-2.9z"
                transform="translate(1142.151 283.698)"
                fill="url(#prefix__p)"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
