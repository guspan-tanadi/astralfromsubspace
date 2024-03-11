import { FC } from 'react'

type Props = {
  fillColor?: string
}

export const LogoIcon: FC<Props> = ({ fillColor = 'white' }) => {
  return (
    <svg
      width='138'
      height='16'
      viewBox='0 0 138 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.02065 9.03735C1.67461 9.03735 0.00158435 7.53038 0.00158435 4.51962C0.00158435 1.50727 1.67461 0.00189209 5.02065 0.00189209L15.0604 0.00189209V3.01424L5.5224 3.01424C3.84938 3.01424 3.01208 3.51603 3.01208 4.5212C3.01208 5.52479 3.84938 6.02816 5.5224 6.02816L10.0397 6.02816C13.3858 6.02816 15.0588 7.53354 15.0588 10.5459C15.0588 13.5582 13.3858 15.0636 10.0397 15.0636L0 15.0636L0 12.0513L9.53796 12.0513C11.211 12.0513 12.0483 11.5495 12.0483 10.5443C12.0483 9.53913 11.211 9.03735 9.53796 9.03735L5.02065 9.03735Z'
        fill={fillColor}
      />
      <path
        d='M30.1186 0L33.1307 0V10.0406C33.1307 13.387 31.4576 15.0601 28.1116 15.0601L23.0925 15.0601C19.7465 15.0601 18.0735 13.387 18.0735 10.0406V0L21.0856 0V9.62905C21.0856 11.2421 21.888 12.0494 23.4946 12.0494L27.7017 12.0494C29.3145 12.0494 30.1218 11.2389 30.1218 9.61955V0L30.1186 0Z'
        fill={fillColor}
      />
      <path
        d='M46.3419 0C49.688 0 51.361 1.50538 51.361 4.51772C51.361 6.1909 50.8593 7.19448 49.8542 7.53007C50.8577 7.86565 51.361 8.86923 51.361 10.5424C51.361 13.5547 49.688 15.0601 46.3419 15.0601L36.3022 15.0601V0L46.3419 0ZM45.913 5.96928C47.2394 5.96928 47.9026 5.47224 47.9026 4.47657C47.9026 3.48089 47.0732 2.98385 45.416 2.98385L38.9503 2.98385V5.9677L45.913 5.9677V5.96928ZM46.3419 9.03703L39.3143 9.03703V12.0494L45.8402 12.0494C47.5132 12.0494 48.3505 11.5476 48.3505 10.5424C48.3505 9.53723 47.681 9.03703 46.3419 9.03703Z'
        fill={fillColor}
      />
      <path
        d='M59.3934 9.0371C56.0474 9.0371 54.3744 7.53013 54.3744 4.51937C54.3744 1.50703 56.0474 0.00164795 59.3934 0.00164795L69.4331 0.00164795V3.01399L59.8952 3.01399C58.2222 3.01399 57.3849 3.51579 57.3849 4.52096C57.3849 5.52454 58.2222 6.02792 59.8952 6.02792L64.4125 6.02792C67.7585 6.02792 69.4316 7.5333 69.4316 10.5456C69.4316 13.558 67.7585 15.0634 64.4125 15.0634L54.3728 15.0634V12.051L63.9108 12.051C65.5838 12.051 66.4211 11.5492 66.4211 10.5441C66.4211 9.53889 65.5838 9.0371 63.9108 9.0371L59.3934 9.0371Z'
        fill={fillColor}
      />
      <path
        d='M75.9403 15.0601H72.9282V0L82.9679 0C86.314 0 87.987 1.50538 87.987 4.51772C87.987 7.53007 86.314 9.03545 82.9679 9.03545L75.9403 9.03545V15.0601ZM81.7017 5.96928C83.3589 5.96928 84.1883 5.47224 84.1883 4.47657C84.1883 3.48089 83.3589 2.98385 81.7017 2.98385L76.2359 2.98385V5.9677L81.7017 5.9677V5.96928Z'
        fill={fillColor}
      />
      <path
        d='M91.4487 12.0494L90.1429 15.0618L86.8601 15.0618L93.3955 0.00164795L96.6687 0.00164795L103.204 15.0618L99.9309 15.0618L98.6251 12.0494L91.4487 12.0494ZM97.3129 9.0371L95.0337 3.78647L92.7545 9.0371L97.3129 9.0371Z'
        fill={fillColor}
      />
      <path
        d='M119.641 12.0495V15.0619L109.601 15.0619C106.255 15.0619 104.582 13.3887 104.582 10.0424V5.02285C104.582 1.6765 106.255 0.00332642 109.601 0.00332642L119.641 0.00332642V3.01567L110.013 3.01567C108.4 3.01567 107.593 3.81822 107.593 5.42491V9.63238C107.593 11.2454 108.403 12.0527 110.022 12.0527L119.641 12.0527V12.0495Z'
        fill={fillColor}
      />
      <path
        d='M125.504 12.0494L137.552 12.0494V15.0617L122.494 15.0617V0L137.552 0V3.01234L125.504 3.01234V6.02469L137.552 6.02469V9.03703L125.504 9.03703V12.0494Z'
        fill={fillColor}
      />
    </svg>
  )
}
