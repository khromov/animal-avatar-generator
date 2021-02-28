import { Shape } from './types'
import { darken } from '../utils/colors'

export const eyes: Shape[] = [
  (_color) => `
    <g>
      <g>
        <circle cx="168.96" cy="250" r="20.43"/>
        <circle fill="#fff" cx="175.39" cy="255.78" r="9.62"/>
        <circle fill="#fff" cx="159.37" cy="241.04" r="4.23"/>
      </g>
      <g>
        <circle cx="331.04" cy="250" r="20.43"/>
        <circle fill="#fff" cx="324.61" cy="255.78" r="9.62"/>
        <circle fill="#fff" cx="340.63" cy="241.04" r="4.23"/>
      </g>
    </g>
  `,
  (_color) => `
    <g>
      <g>
        <circle cx="168.96" cy="254.23" r="18.89"/>
        <circle fill="#fff" cx="175.94" cy="258.32" r="6.3"/>
      </g>
      <g>
        <circle cx="331.04" cy="254.23" r="18.89"/>
        <circle fill="#fff" cx="324.06" cy="258.32" r="6.3"/>
      </g>
    </g>
  `,
  (_color) => `
    <g>
      <g>
        <circle cx="168.96" cy="254.49" r="17.23"/>
        <circle fill="#fff" cx="175.26" cy="247.77" r="5.87"/>
      </g>
      <g>
        <circle cx="331.04" cy="254.49" r="17.23"/>
        <circle fill="#fff" cx="324.74" cy="247.77" r="5.87"/>
      </g>
    </g>
  `,
  (_color) => `
    <g>
      <g>
        <circle cx="331.04" cy="253.21" r="22.21"/>
        <circle fill="#fff" cx="338.81" cy="246.07" r="8.97"/>
        <circle fill="#fff" cx="322.5" cy="263.97" r="5.01"/>
      </g>
      <g>
        <circle cx="168.96" cy="253.21" r="22.21"/>
        <circle fill="#fff" cx="161.19" cy="246.07" r="8.97"/>
        <circle fill="#fff" cx="177.5" cy="263.97" r="5.01"/>
      </g>
    </g>
  `,
  (_color) => `
    <g>
      <g>
        <circle cx="168.62" cy="248.28" r="15.49"/>
        <circle fill="#fff" cx="163.62" cy="242.97" r="4.95"/>
      </g>
      <g>
        <circle cx="331.04" cy="248.28" r="15.49"/>
        <circle fill="#fff" cx="336.04" cy="242.97" r="4.95"/>
      </g>
    </g>
  `,
  (_color) => `
    <g>
      <path d="M339.29,256.81c0,15.33-8,15.14-17.87,15.14c-9.87,0-17.87,0.19-17.87-15.14c0-15.33,8-27.76,17.87-27.76C331.29,229.05,339.29,241.48,339.29,256.81z"/>
      <ellipse fill="#fff" transform="matrix(0.927 -0.375 0.375 0.927 -66.7051 141.1201)" cx="329.23" cy="241.94" rx="5.11" ry="7.47"/>
      <path d="M196.46,256.81c0,15.33-8,15.14-17.87,15.14s-17.87,0.19-17.87-15.14c0-15.33,8-27.76,17.87-27.76S196.46,241.48,196.46,256.81z"/>
      <ellipse fill="#fff" transform="matrix(0.927 -0.375 0.375 0.927 -77.1287 87.5573)" cx="186.4" cy="241.94" rx="5.11" ry="7.47"/>
    </g>
  `,
  (_color) => `
    <g>
      <g>
        <circle cx="180.11" cy="258.32" r="17.11"/>
        <circle fill="#fff" cx="174.66" cy="252.88" r="5.44"/>
      </g>
      <g>
        <circle cx="320.02" cy="258.32" r="17.11"/>
        <circle fill="#fff" cx="314.58" cy="252.88" r="5.44"/>
      </g>
    </g>
  `,
  (color) => `
    <g>
      <g>
        <path d="M190.15,253.98c0,1.19-0.1,2.35-0.29,3.49c-1.66,10.04-10.39,17.7-20.9,17.7c-10.52,0-19.24-7.66-20.9-17.7c-0.19-1.14-0.29-2.3-0.29-3.49c0-11.71,9.48-21.19,21.19-21.19C180.66,232.79,190.15,242.27,190.15,253.98z"/>
        <circle fill="#fff" cx="178.49" cy="259.16" r="5.95"/>
        <path fill="${darken(color, 30)}" d="M191.25,254.44c0,1.25-0.11,2.47-0.31,3.67h-43.97c-0.2-1.2-0.31-2.42-0.31-3.67c0-12.32,9.97-22.29,22.29-22.29C181.27,232.15,191.25,242.12,191.25,254.44z"/>
      </g>
      <g>
        <path d="M352.23,253.98c0,1.19-0.1,2.35-0.29,3.49c-1.66,10.04-10.39,17.7-20.9,17.7c-10.52,0-19.24-7.66-20.9-17.7c-0.19-1.14-0.29-2.3-0.29-3.49c0-11.71,9.48-21.19,21.19-21.19C342.74,232.79,352.23,242.27,352.23,253.98z"/>
        <circle fill="#fff" cx="340.57" cy="259.16" r="5.95"/>
        <path fill="${darken(color, 30)}" d="M353.04,254.32c0,1.24-0.1,2.44-0.3,3.62h-43.4c-0.2-1.18-0.3-2.39-0.3-3.62c0-12.16,9.84-22,22-22C343.19,232.32,353.04,242.16,353.04,254.32z"/>
      </g>
    </g>
  `,
  (_color) => `
    <g>
      <circle cx="168.96" cy="250" r="23.36"/>
      <ellipse fill="#fff" transform="matrix(0.7711 -0.6367 0.6367 0.7711 -115.5773 155.2659)" cx="158.16" cy="238.38" rx="9.93" ry="2.39"/>
      <circle cx="331.04" cy="250" r="23.36"/>
      <ellipse fill="#fff" transform="matrix(0.7711 -0.6367 0.6367 0.7711 -78.4767 258.4669)" cx="320.24" cy="238.38" rx="9.93" ry="2.39"/>
    </g>
  `,
  (_color) => `
    <g>
      <g>
        <circle cx="168.96" cy="262.77" r="18.38"/>
        <circle fill="#fff" cx="163.12" cy="256.93" r="5.84"/>
      </g>
      <g>
        <circle cx="331.04" cy="262.77" r="18.38"/>
        <circle fill="#fff" cx="325.2" cy="256.93" r="5.84"/>
      </g>
    </g>
  `,
]
