// Convert to USD format
const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const UsdFormatCurrency = (value: number) => {
  return USDollar.format(value)
}

// Convert number to hours and minutes
export const ConvertNumberToHoursAndMinutes = (value: number) => {
  const hours = Math.floor(value / 60)
  const minutes = value % 60
  return `${hours}h ${minutes}m`
}
