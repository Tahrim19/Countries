import '../CountryDetailShimmer.css'

export default function CountryDetailShimmer() {
  return (
    <div className="country-details-container">
      {Array.from({ length: 2}).map((el, i) => {
        return <div key={i} className="country-details"></div>
      })}
    </div>
  )
}