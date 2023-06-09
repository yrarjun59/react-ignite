import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
// Components
import Game from "../components/Game";
// Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";

function Home() {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  // Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

    //Get the data back
    const {popular, newGames, upcoming, searched } = useSelector((state)=>state.games)
  return (
    <GameList>
      { pathId && <GameDetail/>}

      {searched.length ?  (
      <div className="searched">
        <h2>Searched Games</h2>
          <Games> 
              {searched.map((game) => (
                  <Game
                      name={game.name} 
                      released={game.released} 
                      id={game.id} 
                      image={game.background_image}
                      key={game.id}
                  />
              ))}
          </Games>
      </div>
      ): (
        " "
      )}
        <h2>Upcoming Games</h2>
        <Games> 
            {upcoming.map((game) => (
                <Game
                    name={game.name} 
                    released={game.released} 
                    id={game.id} 
                    image={game.background_image}
                    key={game.id}
                 />
            ))}
        </Games>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;