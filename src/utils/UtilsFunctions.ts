// Convert to USD format
const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export const UsdFormatCurrency = (value: number) => {
  return USDollar.format(value)
}
