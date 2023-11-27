import { FC } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Link } from 'react-router-dom'
import Identicon from '@polkadot/react-identicon'

// gql
import { Account } from 'gql/graphql'

// common
import { Table, Column } from 'common/components'
import { INTERNAL_ROUTES } from 'common/routes'
import { bigNumberToNumber, numberWithCommas, shortString } from 'common/helpers'
import useMediaQuery from 'common/hooks/useMediaQuery'
import { PAGE_SIZE } from 'common/constants'
import useDomains from 'common/hooks/useDomains'

// rewards
import RewardListCard from './RewardListCard'

dayjs.extend(relativeTime)

interface Props {
  accounts: Account[]
  page: number
}

const RewardTable: FC<Props> = ({ accounts, page }) => {
  const { selectedChain } = useDomains()
  const isDesktop = useMediaQuery('(min-width: 640px)')

  const isLargeLaptop = useMediaQuery('(min-width: 1440px)')

  const newCount = PAGE_SIZE * Number(page + 1) - 10

  // methods
  const generateColumns = (accounts: Account[]): Column[] => [
    {
      title: 'Rank',
      cells: accounts.map((id, index) => (
        <div key={`${id}-account-index`}>{page + 1 > 1 ? newCount + index + 1 : index + 1}</div>
      )),
    },
    {
      title: 'Account',
      cells: accounts.map(({ id }, index) => (
        <div key={`${id}-account-id`} className='flex row items-center gap-3'>
          <Identicon value={id} size={26} theme='beachball' />
          <Link
            data-testid={`account-link-${index}`}
            to={INTERNAL_ROUTES.accounts.id.page(selectedChain.urls.page, id)}
            className='hover:text-[#DE67E4]'
          >
            <div>{isLargeLaptop ? id : shortString(id)}</div>
          </Link>
        </div>
      )),
    },
    {
      title: 'Block rewards',
      cells: accounts.map(({ blockRewardsTotal, id }) => (
        <div key={`${id}-reward-block`}>
          {blockRewardsTotal
            ? `${numberWithCommas(bigNumberToNumber(blockRewardsTotal, 18))} tSSC`
            : 0}
        </div>
      )),
    },
    {
      title: 'Vote rewards',
      cells: accounts.map(({ voteRewardsTotal, id }) => (
        <div key={`${id}-reward-vote`}>
          {voteRewardsTotal
            ? `${numberWithCommas(bigNumberToNumber(voteRewardsTotal, 18))} tSSC`
            : 0}
        </div>
      )),
    },
    {
      title: 'Total rewards',
      cells: accounts.map(({ total, id }) => (
        <div key={`${id}-reward-total`}>
          {total ? `${numberWithCommas(bigNumberToNumber(total, 18))} tSSC` : 0}
        </div>
      )),
    },
    {
      title: 'Total rewards (Vote+Block) %',
      cells: accounts.map(({ total, id, voteRewardsTotal, blockRewardsTotal }) => (
        <div key={`${id}-reward-total-percent`} className='text-right'>
          {total
            ? `${(
                (bigNumberToNumber(voteRewardsTotal + blockRewardsTotal, 18) /
                  bigNumberToNumber(total, 18)) *
                100
              ).toFixed(2)}%`
            : 0}
        </div>
      )),
    },
  ]

  // constants
  const columns = generateColumns(accounts)

  return isDesktop ? (
    <div className='w-full'>
      <div className='rounded my-6'>
        <Table
          columns={columns}
          emptyMessage='There are no rewards to show'
          tableProps='bg-white rounded-[20px] dark:bg-gradient-to-r dark:from-[#4141B3] dark:via-[#6B5ACF] dark:to-[#896BD2] dark:border-none'
          tableHeaderProps='border-b border-gray-200'
          id='rewards-list'
        />
      </div>
    </div>
  ) : (
    <div className='w-full'>
      {accounts.map((account, index) => (
        <RewardListCard index={index} account={account} key={`reward-list-card-${account.id}`} />
      ))}
    </div>
  )
}

export default RewardTable
