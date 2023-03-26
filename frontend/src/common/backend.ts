import useSWR from "swr"

class FetcherError extends Error {
  info?: object
  status?: number

  constructor(message: string) {
    super(message)
  }
}

export const fetcher = async (url: string) => {
  const res = await fetch(url)

  if (!res.ok) {
    const error = new FetcherError('An error occurred while fetching the data.')
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  return res.json()
}
export interface ProductData {
  gtin: string,
  inn: string,
  productName: string,
  productShortName: string,
  tnved: string,
  tnved10: string,
  brand: string,
  country: string | null,
  volume: string | null,
}

export interface SalePointData {
  idSp: string,
  inn: string,
  regionCode: string,
  cityWithType: string,
  cityFiasId: string,
  postalCode: string,
}

export interface DistributorData {
  distributor: string,
}

interface UseProductsResult {
  products?: Array<ProductData>,
  isError: boolean,
  isLoading: boolean,
}

export function useProducts(inn: string): UseProductsResult {
  const {data, error, isLoading} = useSWR(
    `http://84.252.136.195:8000/organizations/${inn}/products`,
    fetcher
  )

  return {
    products: data as Array<ProductData> | undefined,
    isError: !!error,
    isLoading: isLoading,
  }
}

interface UseSalePointsResult {
  salePoints?: Array<SalePointData>,
  isError: boolean,
  isLoading: boolean,
}

export function useSalePoints(inn: string, gtin: string): UseSalePointsResult {
  const {data, error, isLoading} = useSWR(
    `http://84.252.136.195:8000/organizations/${inn}/products/${gtin}/salepoints?page=1&size=300`,
    fetcher
  )

  return {
    salePoints: data as Array<SalePointData> | undefined,
    isError: !!error,
    isLoading: isLoading,
  }
}

interface UseSalePointsResult {
  distributors?: Array<DistributorData>,
  isError: boolean,
  isLoading: boolean,
}

export function useDistributors(inn: string, gtin: string): UseSalePointsResult {
  const {data, error, isLoading} = useSWR(
    `http://84.252.136.195:8000/organizations/${inn}/products/${gtin}/distributors?page=1&size=300`,
    fetcher
  )

  let distributors = undefined
  if (data !== undefined) {
    distributors = data.map((distributor: string) => ({distributor}))
  }

  return {
    distributors: distributors as Array<DistributorData> | undefined,
    isError: !!error,
    isLoading: isLoading,
  }
}

export interface LinkPredictionData {
  value: number,
  class: string,
}

interface UseLinkPredictionResult {
  predictions?: Array<LinkPredictionData>,
  isError: boolean,
  isLoading: boolean,
}

export function useLinkPrediction(headInn: string | null, tailInn?: string | null): UseLinkPredictionResult {
  if (headInn === null) {
    return {predictions: [], isError: false, isLoading: false}
  }

  const {data, error, isLoading} = useSWR(
    `http://84.252.136.195:8000/predictions/links?head_inn=${headInn}&tail_inn=${tailInn}`,
    fetcher
  )

  return {
    predictions: data.predictions as Array<LinkPredictionData> | undefined,
    isError: !!error,
    isLoading: isLoading,
  }
}

export interface RelationPredictionData {
  value: number,
  node: string,
}

interface UseRelationPredictionResult {
  predictions?: Array<RelationPredictionData>,
  isError: boolean,
  isLoading: boolean,
}

export function useRelationPrediction(node: string | null, relation?: string): UseRelationPredictionResult {
  const {data, error, isLoading} = useSWR(
    `http://84.252.136.195:8000/predictions/relations?node=${node}&relation=${relation}`,
    fetcher
  )

  return {
    predictions: data as Array<RelationPredictionData> | undefined,
    isError: !!error,
    isLoading: isLoading,
  }
}
