'use client'

import { Spinner } from 'components/common/Spinner'
import { NotFound } from 'components/layout/NotFound'
import { Routes } from 'constants/routes'
import type { EventByIdQuery, EventByIdQueryVariables } from 'gql/graphql'
import useChains from 'hooks/useChains'
import { useSquidQuery } from 'hooks/useSquidQuery'
import { useWindowFocus } from 'hooks/useWindowFocus'
import { useParams } from 'next/navigation'
import { FC, useEffect, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { hasValue, isLoading, useQueryStates } from 'states/query'
import type { EventIdParam } from 'types/app'
import { EventDetailsCard } from './EventDetailsCard'
import { QUERY_EVENT_BY_ID } from './query'

export const Event: FC = () => {
  const { ref, inView } = useInView()
  const { eventId } = useParams<EventIdParam>()
  const { isEvm } = useChains()
  const inFocus = useWindowFocus()
  const { loading, setIsVisible } = useSquidQuery<EventByIdQuery, EventByIdQueryVariables>(
    QUERY_EVENT_BY_ID,
    {
      variables: { eventId: eventId ?? '' },
      skip: !inFocus,
      context: { clientName: isEvm ? 'nova' : 'consensus' },
    },
    isEvm ? Routes.nova : Routes.consensus,
    'event',
  )

  const {
    consensus: { event: consensusEntry },
    nova: { event: evmEntry },
  } = useQueryStates()

  const dataLoading = useMemo(() => {
    if (isEvm) return isLoading(evmEntry)
    return isLoading(consensusEntry)
  }, [evmEntry, consensusEntry, isEvm])

  const data = useMemo(() => {
    if (isEvm && hasValue(evmEntry)) return evmEntry.value
    if (hasValue(consensusEntry)) return consensusEntry.value
  }, [consensusEntry, evmEntry, isEvm])

  const event = useMemo(() => data && data.eventById, [data])

  const noData = useMemo(() => {
    if (loading || dataLoading) return <Spinner isSmall />
    if (!data) return <NotFound />
    return null
  }, [data, dataLoading, loading])

  useEffect(() => {
    setIsVisible(inView)
  }, [inView, setIsVisible])

  return (
    <div className='w-full'>
      <div ref={ref}>{!loading && event ? <EventDetailsCard event={event} /> : noData}</div>
    </div>
  )
}
