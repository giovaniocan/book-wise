import { formatDistanceToNow, isValid, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function fixDateReview(date: string, justYear?: boolean) {
  if (justYear) {
    return date.substring(0, 4)
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
