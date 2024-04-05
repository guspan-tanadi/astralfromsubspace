import { TabTitle } from 'components/common/Tabs'
import React, { FC, ReactElement, useState } from 'react'

type Props = {
  children: ReactElement[]
  isDesktop?: boolean
}

export const AccountRewardsTabs: FC<Props> = ({ children, isDesktop = false }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  const tabStyle = isDesktop
    ? 'bg-white border border-slate-100 shadow rounded-[20px] p-4 dark:bg-gradient-to-r dark:from-[#4141B3] dark:via-[#6B5ACF] dark:to-[#896BD2] dark:border-none'
    : ''

  const tabTitleStyle = !isDesktop
    ? 'bg-white rounded-full mb-5 px-5 dark:bg-[#1E254E] dark:bg-gradient-to-r dark:from-[#4141B3] dark:via-[#6B5ACF] dark:to-[#896BD2] justify-center items-center'
    : ''

  const activePillStyle = 'dark:text-white text-white bg-[#241235] dark:bg-[#1E254E]'

  return (
    <div className={`flex w-full flex-wrap ${tabStyle}`}>
      <div className='w-full'>
        <div className='flex w-full flex-col md:items-center md:justify-between lg:flex-row'>
          <div className='hidden items-baseline gap-4 lg:flex'></div>

          <div className='w-full lg:w-auto'>
            <ul
              className={`grid w-full list-none grid-cols-2 flex-row flex-wrap justify-items-center pb-4 pt-3 lg:flex ${tabTitleStyle}`}
              role='tablist'
            >
              {children.map((item, index) => (
                <TabTitle
                  key={index}
                  title={item.props.title}
                  onClick={item.props.onClick}
                  index={index}
                  isSelected={selectedTab === index}
                  setSelectedTab={setSelectedTab}
                  pillStyle='text-gray-600 bg-white dark:bg-transparent dark:text-white '
                  activePillStyle={activePillStyle}
                />
              ))}
            </ul>
          </div>
        </div>

        {children[selectedTab]}
      </div>
    </div>
  )
}
