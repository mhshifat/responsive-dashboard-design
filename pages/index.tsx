import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Page from './../components/layouts/Page'
import DashboardPageLayout from './../components/layouts/dashboard/PageLayout'
import Table from './../components/common/Table'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ROUTER_PATHS } from '../constants'

const Home: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push(ROUTER_PATHS.INVENTORY)
  }, [])

  return null
}

export default Home
