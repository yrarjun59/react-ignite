import React from 'react'

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";


function Home() {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames())
  })
  return (
    <div className='Home'>
        <h1>Home</h1>
    </div>
  )
}

export default Home