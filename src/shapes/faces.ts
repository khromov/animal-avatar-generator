import { Shape } from './types'
import { darken } from '../utils/colors'

export const faces: Shape[] = [
  (color) => `
    <g>
      <path fill="${color}" d="M440.72,280.16c0,6.78-0.42,13.17-1.24,19.2c-1.09,7.91-2.86,15.19-5.27,21.89l-0.01,0.01c-4.63,12.92-11.65,23.67-20.66,32.61c-20.58,20.41-51.59,31.32-88.62,36.68c-23,3.34-48.32,4.53-74.92,4.53c-26.59,0-51.92-1.19-74.92-4.53c-68.09-9.86-115.8-38.47-115.8-110.39c0-96.23,85.39-174.24,190.72-174.24c95.69,0,174.92,64.38,188.62,148.31C440,262.69,440.72,271.35,440.72,280.16z"/>
    </g>
  `,
  (color) => `
    <g>
      <path fill="${color}" d="M440.72,280.16c0,6.78-0.42,13.17-1.24,19.2c-1.09,7.91-2.86,15.19-5.27,21.89l-0.01,0.01c-4.63,12.92-11.65,23.67-20.66,32.61c-20.58,20.41-51.59,31.32-88.62,36.68c-23,3.34-48.32,4.53-74.92,4.53c-26.59,0-51.92-1.19-74.92-4.53c-68.09-9.86-115.8-38.47-115.8-110.39c0-96.23,85.39-174.24,190.72-174.24c95.69,0,174.92,64.38,188.62,148.31C440,262.69,440.72,271.35,440.72,280.16z"/>
      <path fill="${darken(color, 30)}" d="M155.95,387.14c-57.73-12.38-96.67-42.01-96.67-106.98c0-9.41,0.82-18.64,2.39-27.64c19.16,3.37,39.38,16.95,53.68,38.13c1.82,2.69,3.48,5.43,5,8.19c5.13,9.35,12.36,17.39,20.95,23.72c4.9,3.62,9.46,8.33,13.29,14C166.92,354.82,167.24,376.53,155.95,387.14z"/>
    </g>
  `,
  (color) => `
    <g>
      <path fill="${color}" d="M440.72,280.16c0,6.78-0.42,13.17-1.24,19.2c-1.09,7.91-2.86,15.19-5.27,21.89l-0.01,0.01c-4.63,12.92-11.65,23.67-20.66,32.61c-20.58,20.41-51.59,31.32-88.62,36.68c-23,3.34-48.32,4.53-74.92,4.53c-26.59,0-51.92-1.19-74.92-4.53c-68.09-9.86-115.8-38.47-115.8-110.39c0-96.23,85.39-174.24,190.72-174.24c95.69,0,174.92,64.38,188.62,148.31C440,262.69,440.72,271.35,440.72,280.16z"/>
      <ellipse fill="${darken(color, 30)}" transform="matrix(0.8435 -0.5371 0.5371 0.8435 -66.1077 207.9553)" cx="323.84" cy="217.43" rx="52.25" ry="77.62"/>
    </g>
  `,
  (color) => `
    <g>
      <path fill="${color}" d="M440.72,280.16c0,6.78-0.42,13.17-1.24,19.2c-1.09,7.91-2.86,15.19-5.27,21.89l-0.01,0.01c-4.63,12.92-11.65,23.67-20.66,32.61c-20.12,19.95-50.2,30.83-86.14,36.32c-23.65,3.61-49.84,4.89-77.4,4.89c-27.55,0-53.74-1.28-77.4-4.9c-1.22-0.19-2.44-0.38-3.65-0.58c-0.01,0-0.02,0-0.03-0.01c-20.39-3.36-38.83-8.54-54.49-16.24c-0.03-0.02-0.04-0.03-0.04-0.03c-8-3.93-15.29-8.53-21.75-13.87c-21.05-17.39-33.36-42.75-33.36-79.29c0-5.54,0.28-11.03,0.84-16.44c0.16-1.58,0.35-3.16,0.56-4.73c0.03-0.22,0.06-0.44,0.09-0.66C72.51,172.4,152.76,105.92,250,105.92c35.7,0,69.12,8.97,97.69,24.57c11.04,6.02,21.35,13.03,30.8,20.9c31.63,26.37,53.52,62.32,60.13,102.84c0.32,1.97,0.61,3.96,0.85,5.95C440.3,266.74,440.72,273.4,440.72,280.16z"/>
      <path fill="#fff" d="M235.05,161.3c14.39,27.54,0,70.98-41.15,115.15c-31.82,34.16-86.59,16.82-100.98-10.72s7.48-67.4,48.86-89.02S220.66,133.75,235.05,161.3z"/>
    </g>
  `,
  (color) => `
    <g>
      <path fill="${color}" d="M440.72,280.16c0,6.78-0.42,13.17-1.24,19.2c-1.09,7.91-2.86,15.19-5.27,21.89l-0.01,0.01c-4.63,12.92-11.65,23.67-20.66,32.61c-20.12,19.95-50.2,30.83-86.14,36.32c-23.65,3.61-49.84,4.89-77.4,4.89c-27.55,0-53.74-1.28-77.4-4.9c-1.22-0.19-2.44-0.38-3.65-0.58c-0.01,0-0.02,0-0.03-0.01c-20.39-3.36-38.83-8.54-54.49-16.24c-0.03-0.02-0.04-0.03-0.04-0.03c-8-3.93-15.29-8.53-21.75-13.87c-21.05-17.39-33.36-42.75-33.36-79.29c0-5.54,0.28-11.03,0.84-16.44c0.16-1.58,0.35-3.16,0.56-4.73c0.03-0.22,0.06-0.44,0.09-0.66C72.51,172.4,152.76,105.92,250,105.92c35.7,0,69.12,8.97,97.69,24.57c11.04,6.02,21.35,13.03,30.8,20.9c31.63,26.37,53.52,62.32,60.13,102.84c0.32,1.97,0.61,3.96,0.85,5.95C440.3,266.74,440.72,273.4,440.72,280.16z"/>
      <path fill="${darken(color, 60)}" d="M402.15,242.19c13.24,38.4,3.65,91.19-46.3,99.36C394.32,310.48,403.02,274.69,402.15,242.19z"/>
      <path fill="${darken(color, 60)}" d="M391.89,270.61c-10.47,24.77-26.76,41.66-55.3,41.94C364.67,323.33,385.14,314.59,391.89,270.61z"/>
      <path fill="${darken(color, 60)}" d="M77.48,257.63c-13.24,38.4-3.65,91.19,46.3,99.36C85.31,325.92,76.61,290.13,77.48,257.63z"/>
      <path fill="${darken(color, 60)}" d="M87.75,286.04c10.47,24.77,26.76,41.66,55.3,41.94C114.96,338.76,94.49,330.02,87.75,286.04z"/>
    </g>
  `,
  (color) => `
    <g>
      <path fill="${color}" d="M440.72,280.16c0,4.64-0.2,9.1-0.59,13.38c-0.17,1.98-0.39,3.92-0.65,5.82c-1.09,7.91-2.86,15.19-5.27,21.89l-0.01,0.01c-4.63,12.92-11.65,23.67-20.66,32.61c-33.36,33.09-94.12,41.21-163.54,41.21c-100.25,0-182.44-16.94-190.13-101.54c-0.39-4.29-0.59-8.74-0.59-13.38c0-96.23,85.39-174.24,190.72-174.24c95.69,0,174.92,64.38,188.62,148.31C440,262.69,440.72,271.35,440.72,280.16z"/>
      <path fill="${darken(color, 30)}" d="M439.5,260.36C423.23,170.95,324.36,112.7,250,209.13c-74.4-96.48-173.33-38.12-189.52,51.37C71.17,173.53,151.94,105.92,250,105.92c95.69,0,174.92,64.38,188.62,148.31C438.95,256.26,439.24,258.31,439.5,260.36z"/>
    </g>
  `,
]
