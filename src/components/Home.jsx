import React from 'react'
import { useState } from 'react'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import CountriesList from './CountiresList'
import { useOutletContext } from 'react-router-dom' 
import {ThemeContext} from '../contexts/ThemeContext'

export default function Home() {
  const [query, setQuery] = useState('')
  const [isDark] = useOutletContext()
  console.log(ThemeContext)
  return (
    <main className={`${isDark? 'dark': ''}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {query === 'unmount' ? '' : <CountriesList query={query} />}
    </main>
  )
}
