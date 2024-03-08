import { ApolloClient, DocumentNode } from '@apollo/client'
import { MAX_DOWNLOADER_BATCH_SIZE } from 'common/constants'
import { formatEther } from 'ethers'

export const shortString = (value: string, initialLength = 6, endLength = -4): string =>
  `${value.slice(0, initialLength)}...${value.slice(endLength)}`

export const generateArrayOfNumbers = (length: number): number[] => {
  return Array.from(Array(length).keys())
}

export const formatUnitsToNumber = (value: string): number => {
  const convertedEthers = formatEther(value)

  return parseFloat(convertedEthers)
}

export const formatUnits = (value: string): string => {
  const convertedEthers = formatEther(value)

  return convertedEthers
}

export const floatToStringWithDecimals = (value: number, decimals = 4): string =>
  BigInt(value * 10 ** decimals).toString()

export const bigNumberToNumber = (bigNumber: string, precision = 4): number => {
  const number = formatUnits(bigNumber)

  return limitNumberDecimals(number, precision)
}

export const bigNumberToString = (bigNumber: string, precision = 4): string => {
  const number = formatUnits(bigNumber)

  return limitStringDecimals(number, precision)
}

export const limitNumberDecimals = (number: number | string, precision = 4): number => {
  if (number === 0) {
    return number
  }

  const [integer, decimals] = String(number).split('.')

  if (!decimals) return Number(integer)

  const decimalsToUse = Number(integer) >= 1 ? decimals.slice(0, 2) : decimals.slice(0, precision)

  return Number(integer + '.' + decimalsToUse)
}

export const limitStringDecimals = (number: string, precision = 4): string => {
  if (number === '0') {
    return number
  }

  const [integer, decimals] = String(number).split('.')

  if (!decimals) return integer.toString()

  const decimalsToUse = Number(integer) >= 1 ? decimals.slice(0, 2) : decimals.slice(0, precision)

  return integer + '.' + decimalsToUse
}

export const formatSpacePledged = (value: number, decimals = 2) => {
  if (value === 0) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']

  const i = Math.floor(Math.log(value) / Math.log(k))

  return parseFloat((value / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i]
}

export const numberWithCommas = (value: number) => {
  if (value < 1000) {
    return value.toString()
  }

  const parts = value.toString().split('.')
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  const decimalPart = parts[1] || ''
  const formattedNumber = decimalPart ? integerPart + '.' + decimalPart : integerPart

  return formattedNumber
}

export const downloadFullData = async (apolloClient: ApolloClient<object>, query: DocumentNode) => {
  const entries: unknown[] = []

  let hasNextPage = true
  while (hasNextPage) {
    const { data } = await apolloClient.query({
      query,
      variables: {
        first: MAX_DOWNLOADER_BATCH_SIZE,
        after: entries.length ? entries.length.toString() : undefined,
      },
    })

    const accounts = extractNestedData(data, 'accountRewardsConnection.edges')

    entries.push(...accounts)

    hasNextPage = entries.length < data.accountRewardsConnection.totalCount
  }

  return entries
}

export const extractNestedData = (data, path) => {
  const keys = path.split('.')
  let result = data

  for (const key of keys) {
    if (result[key] === undefined) {
      return []
    }
    result = result[key]
  }

  return Array.isArray(result) ? result.map((item) => item.node) : []
}

export const numberPositionSuffix = (number: number) => {
  const j = number % 10,
    k = number % 100
  if (j === number && k !== 11) return number + 'st'
  if (j === 2 && k !== 12) return number + 'nd'
  if (j === 3 && k !== 13) return number + 'rd'
  return number + 'th'
}
