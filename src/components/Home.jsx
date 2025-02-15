import React from 'react'
import { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountiresList'
import useTheme from '../hooks/useTheme'

export default function Home() {
  const [query, setQuery] = useState('')
  // const [isDark] = useOutletContext()
  // const [isDark] = useContext(ThemeContext)
  const [isDark] = useTheme();
  return (
    <main className={`${isDark? 'dark': ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu setQuery={setQuery}/>
      </div>
      <CountriesList query={query} />
    </main>
  )
}
