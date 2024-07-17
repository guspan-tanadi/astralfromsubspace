import { DownloadPage } from '@/components/Farming'
import { chains } from 'constants/chains'
import { metadata } from 'constants/metadata'
import { Metadata } from 'next'
import { FC } from 'react'
import type { ChainPageProps } from 'types/app'

export async function generateMetadata({ params: { chain } }: ChainPageProps): Promise<Metadata> {
  const chainTitle = chains.find((c) => c.urls.page === chain)?.title || 'Unknown chain'
  const title = `${metadata.title} - ${chainTitle} - Farming`
  return {
    ...metadata,
    title,
    openGraph: {
      ...metadata.openGraph,
      title,
    },
    twitter: {
      ...metadata.twitter,
      title,
    },
  }
}

const Page: FC = () => {
  return <DownloadPage />
}

export default Page
