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
          id="prefix__d"
          x1={0.748}
          y1={0.719}
          x2={0.937}
          y2={0.882}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#97aaaa" />
          <Stop offset={1} stopColor="#e8efee" />
        </LinearGradient>
        <LinearGradient
          id="prefix__e"
          x1={0.453}
          y1={0.661}
          x2={0.453}
          y2={-0.004}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#e8e8e8" />
          <Stop offset={1} stopColor="#e8efee" />
        </LinearGradient>
        <LinearGradient
          id="prefix__a"
          x1={0.453}
          y1={-8.142}
          x2={0.453}
          y2={-8.828}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#c2cece" stopOpacity={0} />
          <Stop offset={0.179} stopColor="#afbcbc" stopOpacity={0.18} />
          <Stop offset={1} stopColor="#5b6a6a" />
        </LinearGradient>
        <LinearGradient
          id="prefix__f"
          x1={0.7}
          y1={0.454}
          x2={2.059}
          y2={0.383}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__g"
          x1={1.033}
          y1={1.057}
          x2={-0.582}
          y2={2.03}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__h"
          x1={0.45}
          y1={0.585}
          x2={-0.489}
          y2={1.26}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__i"
          x1={0.398}
          y1={1.823}
          x2={0.398}
          y2={0.944}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ffcf95" />
          <Stop offset={0.427} stopColor="#ffc954" />
          <Stop offset={1} stopColor="#ffc200" />
        </LinearGradient>
        <LinearGradient
          id="prefix__b"
          x1={0.129}
          y1={2.778}
          x2={0.717}
          y2={2.778}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#ffc200" stopOpacity={0} />
          <Stop offset={0.203} stopColor="#fb0" stopOpacity={0.204} />
          <Stop offset={0.499} stopColor="#ffa700" stopOpacity={0.498} />
          <Stop offset={0.852} stopColor="#f80" stopOpacity={0.851} />
          <Stop offset={1} stopColor="#ff7800" />
        </LinearGradient>
        <LinearGradient
          id="prefix__j"
          x1={0.512}
          y1={1.528}
          x2={1.003}
          y2={1.528}
          xlinkHref="#prefix__b"
        />
        <LinearGradient
          id="prefix__k"
          x1={-0.383}
          y1={1.841}
          x2={0.346}
          y2={1.841}
          xlinkHref="#prefix__b"
        />
        <LinearGradient
          id="prefix__l"
          x1={0.96}
          y1={11.343}
          x2={-1.725}
          y2={10.714}
          xlinkHref="#prefix__b"
        />
        <LinearGradient
          id="prefix__m"
          x1={-0.039}
          y1={2.752}
          x2={0.329}
          y2={3.159}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={1} stopColor="#e8efee" />
        </LinearGradient>
        <ClipPath id="prefix__c">
          <Path
            data-name="Rectangle 379"
            transform="translate(446 280)"
            fill="#b7b7b7"
            d="M0 0h48v48H0z"
          />
        </ClipPath>
      </Defs>
      <G
        data-name="attach document"
        transform="translate(-446 -280)"
        clipPath="url(#prefix__c)"
      >
        <Path
          data-name="Path 867"
          d="M41.853 5.828v38.788a2.512 2.512 0 01-2.511 2.511H6.539a2.512 2.512 0 01-2.511-2.511V5.828a2.512 2.512 0 012.511-2.511h32.8a2.512 2.512 0 012.514 2.511z"
          transform="translate(447.06 280.873)"
          fill="url(#prefix__d)"
        />
        <Path
          data-name="Path 868"
          d="M29.211 3.317H6.539a2.511 2.511 0 00-2.512 2.511v38.788a2.511 2.511 0 002.511 2.511h32.8a2.511 2.511 0 002.511-2.511V15.3a1.463 1.463 0 00-.421-1.027l-9.8-9.942a3.4 3.4 0 00-2.417-1.014z"
          transform="translate(447.06 280.873)"
          fill="url(#prefix__e)"
        />
        <Path
          data-name="Path 869"
          d="M41.853 34.422v2.009a2.512 2.512 0 01-2.511 2.511H6.539a2.512 2.512 0 01-2.511-2.511v-2.009h37.825z"
          transform="translate(447.06 289.058)"
          fill="url(#prefix__a)"
        />
        <G data-name="Group 2447" fill="#c2cece">
          <Path
            data-name="Rectangle 375"
            d="M457.513 299.531h24.973v1.71h-24.973z"
          />
          <Path
            data-name="Rectangle 376"
            d="M457.513 306.061h24.973v1.71h-24.973z"
          />
          <Path
            data-name="Rectangle 377"
            d="M457.513 312.59h24.973v1.71h-24.973z"
          />
          <Path
            data-name="Rectangle 378"
            d="M457.513 319.119h15.064v1.71h-15.064z"
          />
        </G>
        <Path
          data-name="Path 870"
          d="M22.94 3.317H6.28a2.393 2.393 0 00-2.253 2.511v38.788a2.392 2.392 0 002.253 2.511h16.66z"
          transform="translate(447.06 280.873)"
          fill="url(#prefix__f)"
        />
        <Path
          data-name="Path 872"
          d="M25.407 4.823v7.367a2.5 2.5 0 00.827 1.859l10.39 10.39v-9.888L26.464 4.39A3.329 3.329 0 0023.9 3.317s1.507 1.472 1.507 1.506z"
          transform="translate(452.289 280.873)"
          fill="url(#prefix__g)"
        />
        <Path
          data-name="Path 873"
          d="M12.475 6.426v11.853a5.373 5.373 0 001.775 3.991l24.678 24.679a2.51 2.51 0 001.586-2.333V21.391L22.439 3.317H9.115z"
          transform="translate(448.398 280.873)"
          fill="url(#prefix__h)"
        />
        <Path
          data-name="Path 874"
          d="M23.248 7.441v11.616a5.465 5.465 0 01-5.479 5.481 5.393 5.393 0 01-5.294-5.386V6.744a3.352 3.352 0 016.7 0v8.518a1.2 1.2 0 01-1.2 1.2 1.2 1.2 0 01-1.2-1.2V6.778a.98.98 0 00-.892-.989.959.959 0 00-1.023.955v12.34a3.048 3.048 0 003.045 3.06 3 3 0 002.94-2.992V7.441a5.048 5.048 0 00-8.908-3.251H9.115a6.867 6.867 0 01.34-.625 7.441 7.441 0 0113.793 3.876z"
          transform="translate(448.398 280)"
          fill="url(#prefix__i)"
        />
        <Path
          data-name="Path 875"
          d="M15.522 3.483a3.346 3.346 0 011.185 2.554v8.518a1.2 1.2 0 01-.6 1.036 1.2 1.2 0 001.8-1.036V6.037a3.352 3.352 0 00-3.95-3.3 3.338 3.338 0 011.565.746z"
          transform="translate(449.672 280.707)"
          fill="url(#prefix__b)"
        />
        <Path
          data-name="Path 876"
          d="M21.23 4.189A7.45 7.45 0 0014.538 0c-.2 0-.4.009-.6.024a7.441 7.441 0 016.843 7.416v11.617a5.485 5.485 0 01-4.8 5.447c.17.019.343.031.517.034a5.465 5.465 0 005.479-5.481V7.441a7.4 7.4 0 00-.747-3.252z"
          transform="translate(449.668 280)"
          fill="url(#prefix__j)"
        />
        <Path
          data-name="Path 877"
          d="M13.919 17.879V5.538a.955.955 0 01.355-.742.922.922 0 00-.528-.213.959.959 0 00-1.023.955v12.34a3.048 3.048 0 003.045 3.06 3 3 0 00.553-.062 3.073 3.073 0 01-2.402-2.997z"
          transform="translate(449.348 281.205)"
          fill="url(#prefix__k)"
        />
        <Path
          data-name="Path 878"
          d="M15.807 0a7.4 7.4 0 00-6.352 3.565 6.9 6.9 0 00-.34.625h2.831a5.008 5.008 0 013.861-1.8h.168V0h-.168z"
          transform="translate(448.398 280)"
          fill="url(#prefix__l)"
        />
        <Path
          data-name="Path 879"
          d="M36.495 14.7a1.546 1.546 0 00-.366-.5c-.108-.108-9.664-9.809-9.664-9.809A3.6 3.6 0 0023.9 3.317a1.507 1.507 0 011.507 1.507v7.366a2.511 2.511 0 002.511 2.51h8.577z"
          transform="translate(452.289 280.873)"
          fill="url(#prefix__m)"
        />
      </G>
    </Svg>
  )
}

export default SvgComponent
