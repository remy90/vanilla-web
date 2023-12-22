export const getYearDiff = (now: Date, comparator: Date) => {
  const diff = now.getTime() - comparator.getTime()
  return Math.floor(diff / 1000 / 60 / 60 / 24 / 365)
}
