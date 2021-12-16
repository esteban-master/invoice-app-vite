import { format } from 'date-fns'
import esLocale from 'date-fns/locale/es'

export function formatDateEs(date: Date, formatDate: string) {
  return format(date, formatDate, {
    locale: esLocale
  })
}
