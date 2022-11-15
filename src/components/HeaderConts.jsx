import React from 'react'

import { SearchBar } from './'

import { AiFillYoutube } from 'react-icons/ai'

const HeaderConts = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <AiFillYoutube className="icon" />
        Youtube
      </h1>
      <SearchBar />
    </header>
  )
}

export default HeaderConts
