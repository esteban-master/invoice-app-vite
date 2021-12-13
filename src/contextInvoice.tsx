import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import dataInvoices from '../data.json'
import { Invoice } from './interfaces'

export type Filters = 'draft' | 'pending' | 'paid'

const InvoiceContext = createContext<null | {
  invoices: Invoice[]
  filters: Filters[]
  deleteInvoice: (id: string) => void
  markAsPaid: (id: string) => void
  changeFilters: (id: Filters) => void
}>(null)

export const InvoicesContextProvider: React.FC = ({ children }) => {
  const [invoices, setInvoices] = useState<Invoice[]>(dataInvoices as Invoice[])
  const [filters, setFilters] = useState<Filters[]>([])

  const deleteInvoice = useCallback((id: string) => {
    setInvoices((prev) => prev.filter((invoice) => invoice.id !== id))
  }, [])

  const changeFilters = useCallback((filter: Filters) => {
    setFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : prev.concat(filter)
    )
  }, [])

  const markAsPaid = useCallback((id: string) => {
    setInvoices((prev) =>
      prev.map((invoice) => {
        if (invoice.id === id) {
          return { ...invoice, status: 'paid' }
        }
        return invoice
      })
    )
  }, [])

  const value = useMemo(
    () => ({ invoices, filters, deleteInvoice, markAsPaid, changeFilters }),
    [invoices, filters, deleteInvoice, markAsPaid]
  )
  return (
    <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>
  )
}

export const useInvoiceContext = () => {
  const context = useContext(InvoiceContext)
  if (!context) {
    throw new Error('Inicializar Invoice Context antes de usar')
  }
  return context
}
