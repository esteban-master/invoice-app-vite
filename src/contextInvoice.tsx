import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import dataInvoices from '../data.json'
import { Invoice } from './interfaces'
const InvoiceContext = createContext<null | {
  invoices: Invoice[]
  // filter: 'All' | 'Draft' | 'Pending' | 'Paid',
  deleteInvoice: (id: string) => void
  markAsPaid: (id: string) => void
}>(null)

export const InvoicesContextProvider: React.FC = ({ children }) => {
  const [invoices, setInvoices] = useState<Invoice[]>(dataInvoices)

  const deleteInvoice = useCallback((id: string) => {
    setInvoices((prev) => prev.filter((invoice) => invoice.id !== id))
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
    () => ({ invoices, deleteInvoice, markAsPaid }),
    [invoices, deleteInvoice, markAsPaid]
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
