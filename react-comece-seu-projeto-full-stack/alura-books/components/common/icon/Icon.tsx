import { JSX } from "preact/jsx-runtime";

type SVGKey =
  | "arrow01"
  | "arrow02"
  | "arrow03"
  | "user"
  | "twitter"
  | "help"
  | "logout"
  | "phone"
  | "whatsapp"
  | "triangle"
  | "lupa"
  | "update"
  | "copy"
  | "filter"
  | "ellipsis"
  | "checked"
  | "close";

type Props = JSX.IntrinsicElements["svg"] & {
  id: SVGKey;
};

export default function Icon({ id, ...svgAttributes }: Props) {
  const SVG_MAP = {
    "arrow01": (
      <svg
        width="19"
        height="10"
        viewBox="0 0 19 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <path
          d="M13.3219 0.786926C13.2615 0.846793 13.2136 0.918018 13.1809 0.996494C13.1482 1.07497 13.1314 1.15914 13.1314 1.24416C13.1314 1.32917 13.1482 1.41334 13.1809 1.49182C13.2136 1.57029 13.2615 1.64152 13.3219 1.70139L16.2842 4.66373L1.12476 4.66373C0.953965 4.66373 0.790164 4.73158 0.669393 4.85235C0.548622 4.97312 0.480774 5.13692 0.480774 5.30771C0.480774 5.47851 0.548622 5.64231 0.669393 5.76308C0.790164 5.88385 0.953965 5.9517 1.12476 5.9517L16.2713 5.9517L13.3219 8.89472C13.2019 9.01538 13.1346 9.1786 13.1346 9.34873C13.1346 9.51886 13.2019 9.68208 13.3219 9.80274C13.4425 9.92269 13.6058 9.99001 13.7759 9.99001C13.946 9.99001 14.1092 9.92269 14.2299 9.80274L18.3257 5.70698C18.3808 5.65409 18.4246 5.5906 18.4546 5.52033C18.4846 5.45006 18.5 5.37445 18.5 5.29805C18.5 5.22166 18.4846 5.14605 18.4546 5.07578C18.4246 5.0055 18.3808 4.94201 18.3257 4.88912L14.2363 0.786926C14.1765 0.726566 14.1052 0.678657 14.0268 0.645963C13.9483 0.613268 13.8641 0.596436 13.7791 0.596436C13.6941 0.596436 13.6099 0.613268 13.5314 0.645963C13.453 0.678657 13.3817 0.726566 13.3219 0.786926Z"
          fill="currentColor"
        />
      </svg>
    ),

    "user": (
      <svg
        width="20"
        height="25"
        viewBox="0 0 20 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <path
          d="M9.72222 11.1111C10.821 11.1111 11.8951 10.7853 12.8087 10.1748C13.7223 9.56438 14.4344 8.69672 14.8549 7.68158C15.2754 6.66643 15.3854 5.54939 15.171 4.47172C14.9567 3.39405 14.4276 2.40414 13.6506 1.62719C12.8736 0.850228 11.8837 0.321113 10.8061 0.106751C9.72838 -0.107611 8.61135 0.00240713 7.5962 0.422894C6.58106 0.843381 5.7134 1.55545 5.10295 2.46906C4.49249 3.38266 4.16667 4.45677 4.16667 5.55556C4.16667 7.02898 4.75198 8.44206 5.79385 9.48393C6.83572 10.5258 8.2488 11.1111 9.72222 11.1111ZM9.72222 2.77778C10.2716 2.77778 10.8087 2.94069 11.2655 3.24592C11.7223 3.55115 12.0783 3.98498 12.2886 4.49255C12.4988 5.00012 12.5538 5.55864 12.4466 6.09748C12.3394 6.63631 12.0749 7.13126 11.6864 7.51974C11.2979 7.90822 10.803 8.17278 10.2641 8.27996C9.7253 8.38714 9.16678 8.33213 8.65921 8.12189C8.15164 7.91165 7.71781 7.55561 7.41258 7.09881C7.10736 6.642 6.94444 6.10495 6.94444 5.55556C6.94444 4.81885 7.2371 4.11231 7.75804 3.59137C8.27897 3.07044 8.98551 2.77778 9.72222 2.77778ZM9.72222 13.8889C7.14373 13.8889 4.67084 14.9132 2.84757 16.7365C1.0243 18.5597 0 21.0326 0 23.6111C0 23.9795 0.146329 24.3327 0.406796 24.5932C0.667264 24.8537 1.02053 25 1.38889 25C1.75724 25 2.11051 24.8537 2.37098 24.5932C2.63145 24.3327 2.77778 23.9795 2.77778 23.6111C2.77778 21.7693 3.50942 20.003 4.81176 18.7006C6.11409 17.3983 7.88044 16.6667 9.72222 16.6667C11.564 16.6667 13.3303 17.3983 14.6327 18.7006C15.935 20.003 16.6667 21.7693 16.6667 23.6111C16.6667 23.9795 16.813 24.3327 17.0735 24.5932C17.3339 24.8537 17.6872 25 18.0556 25C18.4239 25 18.7772 24.8537 19.0376 24.5932C19.2981 24.3327 19.4444 23.9795 19.4444 23.6111C19.4444 21.0326 18.4201 18.5597 16.5969 16.7365C14.7736 14.9132 12.3007 13.8889 9.72222 13.8889Z"
          fill="#545454"
        />
      </svg>
    ),

    "help": (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22 12C22 14.6522 20.9464 17.1957 19.0711 19.0711C17.1957 20.9464 14.6522 22 12 22C9.34784 22 6.8043 20.9464 4.92893 19.0711C3.05357 17.1957 2 14.6522 2 12C2 9.34784 3.05357 6.8043 4.92893 4.92893C6.8043 3.05357 9.34784 2 12 2C14.6522 2 17.1957 3.05357 19.0711 4.92893C20.9464 6.8043 22 9.34784 22 12ZM12 8.25C11.7804 8.24979 11.5646 8.30744 11.3743 8.41716C11.1841 8.52688 11.0261 8.6848 10.9163 8.875C10.837 9.02235 10.7289 9.15227 10.5985 9.25708C10.468 9.36188 10.3179 9.43943 10.1569 9.48513C9.99593 9.53082 9.82743 9.54374 9.66138 9.52311C9.49533 9.50248 9.33512 9.44871 9.19023 9.36501C9.04534 9.28131 8.91874 9.16937 8.81791 9.03584C8.71709 8.9023 8.64411 8.74987 8.60329 8.5876C8.56246 8.42533 8.55464 8.25652 8.58027 8.09117C8.6059 7.92582 8.66447 7.7673 8.7525 7.625C9.16527 6.91014 9.80239 6.35145 10.565 6.03558C11.3277 5.7197 12.1732 5.6643 12.9706 5.87795C13.7679 6.0916 14.4725 6.56237 14.975 7.21725C15.4776 7.87213 15.75 8.67453 15.75 9.5C15.7502 10.2758 15.5099 11.0325 15.0622 11.6661C14.6145 12.2996 13.9813 12.7787 13.25 13.0375V13.25C13.25 13.5815 13.1183 13.8995 12.8839 14.1339C12.6495 14.3683 12.3315 14.5 12 14.5C11.6685 14.5 11.3505 14.3683 11.1161 14.1339C10.8817 13.8995 10.75 13.5815 10.75 13.25V12C10.75 11.6685 10.8817 11.3505 11.1161 11.1161C11.3505 10.8817 11.6685 10.75 12 10.75C12.3315 10.75 12.6495 10.6183 12.8839 10.3839C13.1183 10.1495 13.25 9.83152 13.25 9.5C13.25 9.16848 13.1183 8.85054 12.8839 8.61612C12.6495 8.3817 12.3315 8.25 12 8.25ZM12 18.25C12.3315 18.25 12.6495 18.1183 12.8839 17.8839C13.1183 17.6495 13.25 17.3315 13.25 17C13.25 16.6685 13.1183 16.3505 12.8839 16.1161C12.6495 15.8817 12.3315 15.75 12 15.75C11.6685 15.75 11.3505 15.8817 11.1161 16.1161C10.8817 16.3505 10.75 16.6685 10.75 17C10.75 17.3315 10.8817 17.6495 11.1161 17.8839C11.3505 18.1183 11.6685 18.25 12 18.25Z"
          fill="currentColor"
        />
      </svg>
    ),

    "logout": (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <path
          d="M6.53846 4H13.4615C13.8696 4 14.2609 4.16857 14.5494 4.46863C14.8379 4.76869 15 5.17565 15 5.6V6.4C15 6.61217 14.919 6.81566 14.7747 6.96569C14.6304 7.11571 14.4348 7.2 14.2308 7.2C14.0268 7.2 13.8311 7.11571 13.6868 6.96569C13.5426 6.81566 13.4615 6.61217 13.4615 6.4V5.6H6.53846V18.4H13.4615V17.6C13.4615 17.3878 13.5426 17.1843 13.6868 17.0343C13.8311 16.8843 14.0268 16.8 14.2308 16.8C14.4348 16.8 14.6304 16.8843 14.7747 17.0343C14.919 17.1843 15 17.3878 15 17.6V18.4C15 18.8243 14.8379 19.2313 14.5494 19.5314C14.2609 19.8314 13.8696 20 13.4615 20H6.53846C6.13044 20 5.73912 19.8314 5.4506 19.5314C5.16209 19.2313 5 18.8243 5 18.4V5.6C5 5.17565 5.16209 4.76869 5.4506 4.46863C5.73912 4.16857 6.13044 4 6.53846 4Z"
          fill="currentColor"
        />
        <path
          d="M14.9568 15.744C15.2549 16.0853 15.7363 16.0853 16.0343 15.744L18.7763 12.6036C18.9195 12.4395 19 12.2169 19 11.9848C19 11.7528 18.9195 11.5302 18.7763 11.366L16.0343 8.22569C15.8891 8.07532 15.6989 7.99462 15.5032 8.00028C15.3074 8.00594 15.1211 8.09752 14.9826 8.2561C14.8442 8.41467 14.7642 8.62811 14.7593 8.8523C14.7543 9.07649 14.8248 9.29428 14.9561 9.46065L16.3897 11.1096H9.76419C9.56151 11.1096 9.36714 11.2018 9.22383 11.366C9.08051 11.5301 9 11.7527 9 11.9848C9 12.217 9.08051 12.4396 9.22383 12.6037C9.36714 12.7679 9.56151 12.8601 9.76419 12.8601H16.3897L14.9561 14.509C14.8134 14.6731 14.7334 14.8952 14.7335 15.1267C14.7337 15.3582 14.814 15.5802 14.9568 15.744Z"
          fill="currentColor"
        />
      </svg>
    ),

    "phone": (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <path
          d="M9.10156 12.2238C9.7447 13.5519 10.8187 14.6231 12.1484 15.2628C12.2465 15.3093 12.355 15.3294 12.4632 15.3212C12.5715 15.313 12.6757 15.2767 12.7656 15.216L14.7187 13.9113C14.805 13.8528 14.9048 13.817 15.0086 13.8075C15.1124 13.7979 15.217 13.8148 15.3125 13.8566L18.9688 15.4269C19.0937 15.4789 19.1981 15.5706 19.2659 15.6877C19.3336 15.8049 19.361 15.9411 19.3438 16.0753C19.2279 16.9798 18.7864 17.8111 18.1019 18.4136C17.4174 19.0161 16.5369 19.3486 15.625 19.3488C12.8071 19.3488 10.1046 18.2294 8.11199 16.2368C6.11942 14.2442 5 11.5417 5 8.72378C5.00021 7.8119 5.33267 6.93134 5.93518 6.24687C6.53769 5.5624 7.36895 5.12091 8.27344 5.00503C8.40769 4.98779 8.54388 5.01515 8.66105 5.08291C8.77822 5.15067 8.86987 5.25507 8.92187 5.38003L10.4922 9.04409C10.533 9.13811 10.5501 9.24074 10.5419 9.34292C10.5338 9.4451 10.5006 9.5437 10.4453 9.63003L9.14062 11.6144C9.08254 11.7042 9.04845 11.8073 9.04161 11.914C9.03477 12.0207 9.05541 12.1273 9.10156 12.2238Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),

    "whatsapp": (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.9114 5.54871C16.2706 3.906 14.0886 3.00095 11.7637 3C6.97353 3 3.07481 6.8984 3.07294 11.6901C3.07227 13.2218 3.47247 14.7169 4.23302 16.0348L3.00006 20.5383L7.60716 19.3298C8.87652 20.0221 10.3057 20.3871 11.7603 20.3876H11.7638C11.7635 20.3876 11.7641 20.3876 11.7638 20.3876C16.5535 20.3876 20.4525 16.4888 20.4545 11.697C20.4554 9.37483 19.5522 7.19135 17.9114 5.54871ZM11.7638 18.9198H11.7608C10.4647 18.9194 9.19342 18.5711 8.08436 17.913L7.82062 17.7565L5.0867 18.4736L5.81646 15.8081L5.64469 15.5347C4.92164 14.3847 4.53976 13.0554 4.54032 11.6906C4.54187 7.70792 7.78234 4.4678 11.7667 4.4678C13.696 4.4684 15.5097 5.22077 16.8735 6.58612C18.2373 7.95148 18.9879 9.76634 18.9871 11.6964C18.9855 15.6794 15.7451 18.9198 11.7638 18.9198Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.7259 13.5099C15.5088 13.4012 14.4411 12.876 14.2421 12.8035C14.0431 12.731 13.8983 12.6948 13.7535 12.9121C13.6088 13.1295 13.1926 13.6187 13.0659 13.7636C12.9393 13.9085 12.8126 13.9267 12.5955 13.8179C12.3783 13.7092 11.6786 13.4799 10.8492 12.7401C10.2037 12.1643 9.76786 11.4532 9.64115 11.2358C9.5145 11.0184 9.62767 10.9009 9.7364 10.7926C9.83408 10.6953 9.95357 10.539 10.0622 10.4122C10.1707 10.2854 10.2069 10.1948 10.2793 10.05C10.3517 9.905 10.3155 9.77818 10.2612 9.66953C10.2069 9.56084 9.77263 8.49199 9.59169 8.05712C9.41537 7.63375 9.23637 7.69112 9.10306 7.68438C8.97659 7.67806 8.83163 7.67676 8.68688 7.67676C8.54214 7.67676 8.30684 7.73112 8.10784 7.94847C7.9088 8.16588 7.34778 8.69127 7.34778 9.76001C7.34778 10.8289 8.1259 11.8615 8.23448 12.0064C8.34303 12.1513 9.76571 14.3446 11.944 15.2852C12.4621 15.509 12.8666 15.6426 13.182 15.7427C13.7022 15.908 14.1756 15.8846 14.5497 15.8287C14.967 15.7664 15.8345 15.3034 16.0154 14.7962C16.1964 14.2889 16.1964 13.8541 16.1421 13.7636C16.0878 13.673 15.9431 13.6187 15.7259 13.5099Z"
          fill="currentColor"
        />
      </svg>
    ),

    "triangle": (
      <svg
        width="17"
        height="9"
        viewBox="0 0 17 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <path
          d="M2.42894 8.51471C1.53803 8.51471 1.09187 7.43757 1.72183 6.8076L7.79289 0.736529C8.18342 0.346004 8.81658 0.346005 9.20711 0.736529L15.2782 6.8076C15.9081 7.43757 15.462 8.51471 14.5711 8.51471L2.42894 8.51471Z"
          fill="currentColor"
        />
      </svg>
    ),

    "lupa": (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <path
          d="M19 19L15.375 15.375M17.3333 10.6667C17.3333 14.3486 14.3486 17.3333 10.6667 17.3333C6.98477 17.3333 4 14.3486 4 10.6667C4 6.98477 6.98477 4 10.6667 4C14.3486 4 17.3333 6.98477 17.3333 10.6667Z"
          stroke="currentColor"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),

    "arrow02": (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <path d="M8 10L12 14L16 10" stroke="currentColor" />
      </svg>
    ),

    "update": (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <path
          d="M19.9321 9C18.6461 6.05682 15.7094 4 12.2921 4C7.97106 4 4.4181 7.2889 4 11.5"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.459 8.99998H20.1257C20.4018 8.99998 20.6257 8.77612 20.6257 8.49998V4.83331"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.69336 15.6666C5.97929 18.6098 8.91609 20.6666 12.3333 20.6666C16.6544 20.6666 20.2074 17.3777 20.6255 13.1666"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.16667 15.6666H4.5C4.22386 15.6666 4 15.8905 4 16.1666V19.8333"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),

    "ellipsis": (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <path
          d="M8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12ZM14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12ZM18 14C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12C16 12.5304 16.2107 13.0391 16.5858 13.4142C16.9609 13.7893 17.4696 14 18 14Z"
          fill="#444444"
        />
      </svg>
    ),

    "arrow03": (
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <path
          d="M8.9275 6.48515L8.8825 6.44138L5.4825 3.17926C5.3675 3.06879 5.195 3 5.0025 3C4.81 3 4.6375 3.07087 4.5225 3.17926L1.125 6.43512L1.0675 6.48932C1.025 6.54143 1 6.60396 1 6.67066C1 6.85201 1.185 7 1.415 7L8.585 7C8.815 7 9 6.85201 9 6.67066C9 6.60188 8.9725 6.53726 8.9275 6.48515Z"
          fill="currentColor"
        />
      </svg>
    ),

    "copy": (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <path
          d="M18.3077 9H10.6923C9.75767 9 9 9.75767 9 10.6923V18.3077C9 19.2423 9.75767 20 10.6923 20H18.3077C19.2423 20 20 19.2423 20 18.3077V10.6923C20 9.75767 19.2423 9 18.3077 9Z"
          stroke="currentColor"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.07692 13H5.38462C5.01739 13 4.66521 12.8541 4.40554 12.5945C4.14588 12.3348 4 11.9826 4 11.6154V5.38462C4 5.01739 4.14588 4.66521 4.40554 4.40554C4.66521 4.14588 5.01739 4 5.38462 4H11.6154C11.9826 4 12.3348 4.14588 12.5945 4.40554C12.8541 4.66521 13 5.01739 13 5.38462V6.07692"
          stroke="currentColor"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),

    "filter": (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <path
          d="M6.5 12H16.5M4 7H19M9 17H14"
          stroke="currentColor"
          stroke-width="1.67"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),

    "checked": (
      <svg
        width="18"
        height="13"
        viewBox="0 0 18 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <g clip-path="url(#clip0_1004_27)">
          <path
            d="M6.57694 13C6.42307 12.9995 6.27095 12.9686 6.13003 12.9092C5.98911 12.8498 5.8624 12.7631 5.75777 12.6546L0.30417 7.07416C0.100307 6.86518 -0.00890163 6.58686 0.00056827 6.30043C0.0100382 6.014 0.137411 5.74292 0.354667 5.54682C0.571922 5.35073 0.861263 5.24568 1.15904 5.25479C1.45681 5.2639 1.73863 5.38642 1.9425 5.59539L6.56572 10.3339L16.0029 0.403536C16.0987 0.288821 16.2178 0.19415 16.353 0.125338C16.4882 0.0565253 16.6366 0.0150243 16.7891 0.00338381C16.9415 -0.00825669 17.0949 0.0102091 17.2397 0.0576468C17.3845 0.105085 17.5176 0.180492 17.631 0.279239C17.7444 0.377987 17.8356 0.497988 17.899 0.631872C17.9624 0.765757 17.9967 0.910699 17.9998 1.05779C18.0028 1.20489 17.9746 1.35104 17.9168 1.48725C17.859 1.62347 17.7729 1.74689 17.6637 1.84992L7.40732 12.6438C7.30368 12.7543 7.17741 12.843 7.03644 12.9043C6.89547 12.9656 6.74285 12.9981 6.58816 13H6.57694Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_1004_27">
            <rect width="18" height="13" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),

    "close": (
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...svgAttributes}
      >
        <path
          d="M8.38243 7.5L14.8109 1.07155C15.063 0.819384 15.063 0.416148 14.8109 0.189126C14.5587 -0.0377199 14.1555 -0.063042 13.9284 0.189126L7.5 6.61757L1.07155 0.189126C0.819384 -0.063042 0.416148 -0.063042 0.189126 0.189126C-0.063042 0.441294 -0.063042 0.84453 0.189126 1.07155L6.61757 7.5L0.189126 13.9284C-0.063042 14.1806 -0.063042 14.5839 0.189126 14.8109C0.441294 15.063 0.844531 15.063 1.07155 14.8109L7.5 8.38243L13.9284 14.8109C14.1806 15.063 14.5839 15.063 14.8109 14.8109C15.063 14.5587 15.063 14.1555 14.8109 13.9284L8.38243 7.5Z"
          fill="currentColor"
        />
      </svg>
    ),

    "twitter": (
      <svg width={20} height={30} {...svgAttributes}>
        <path />
      </svg>
    ),
  };

  return SVG_MAP[id as keyof typeof SVG_MAP];
}