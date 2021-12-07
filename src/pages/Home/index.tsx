import React from 'react'
import data from '../../../data.json'
import { HeaderInvoices } from '../../components/HeaderInvoices'
import { Outlet } from 'react-router-dom'
import Invoices from '../../components/Invoices'

export const Home = () => {
  return (
    <>
      <HeaderInvoices data={data} />

      <Invoices />
    </>
  )
}
