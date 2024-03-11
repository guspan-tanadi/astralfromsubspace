import { FC, ReactElement } from 'react'

type Props = {
  title: string
  value: string
  icon: ReactElement
  darkBgClass?: string
  additionalClass?: string
}

export const HomeInfoCard: FC<Props> = ({
  title,
  icon,
  value,
  darkBgClass,
  additionalClass = '',
}) => {
  return (
    <div
      className={`h-[216px] w-1/5 min-w-[200px] grow font-['Montserrat'] md:min-w-[228px] ${additionalClass}`}
    >
      <div className={`flex h-full flex-col justify-center rounded-[20px] bg-white ${darkBgClass}`}>
        <div className='mb-6 flex w-full items-center justify-center align-middle'>{icon}</div>
        <div className='flex w-full flex-col  items-center justify-center align-middle'>
          <h2 className='mb-2.5 text-center text-xs font-normal text-gray-900 dark:text-white'>
            {title}
          </h2>
          <p className='text-center text-xl font-medium leading-relaxed dark:text-white'>{value}</p>
        </div>
      </div>
    </div>
  )
}

export default HomeInfoCard
