import '../CountryDetailShimmer.css'

export default function CountryDetailShimmer() {
  return (
    <div className="country-details-container">
      {Array.from({ length: 1}).map(() => {
        return <div className="country-details"></div>
      })}
    </div>
  )
}