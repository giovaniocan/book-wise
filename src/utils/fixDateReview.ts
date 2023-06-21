import { format, formatDistanceToNow, isValid, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function fixDateReview(date: string, justYear?: boolean) {
  if (justYear) {
    const parsedDate = parseISO(date)
    const dateFixed = format(parsedDate, 'yyyy')
    return dateFixed
  }

  let distanceToNow = ''

  if (isValid(parseISO(date))) {
    const parsedDate = parseISO(date)
    distanceToNow = formatDistanceToNow(parsedDate, {
      addSuffix: true,
      locale: ptBR,
    })
  }

  return distanceToNow
}
