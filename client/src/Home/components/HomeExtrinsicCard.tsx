import { FC } from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// gql
import { Extrinsic } from 'gql/graphql'

// common
import { StatusIcon, MobileCard } from 'common/components'
import { INTERNAL_ROUTES } from 'common/routes'

dayjs.extend(relativeTime)

type Props = {
  extrinsic: Extrinsic
}
// TODO: similar to ExtrinsicListCard, consider refactoring
const HomeExtrinsicCard: FC<Props> = ({ extrinsic }) => {
  const blockDate = dayjs(extrinsic.block.timestamp).fromNow(true)

  const body = [
    { name: 'Block', value: extrinsic.block.height },
    { name: 'Call', value: extrinsic.name.split('.')[1].toUpperCase() },
    { name: 'Time', value: `${blockDate} ago` },
  ]
  return (
    <MobileCard
      id='home-extrinsic-list-mobile'
      header={
        <Link className='flex gap-1' to={INTERNAL_ROUTES.extrinsics.id.page(extrinsic.id)}>
          <StatusIcon status={extrinsic.success} />
          <h3 className='font-medium text-[#241235] text-sm dark:text-white'>{`${extrinsic.pos}.${extrinsic.block.height}`}</h3>
        </Link>
      }
      body={body}
    />
  )
}

export default HomeExtrinsicCard
