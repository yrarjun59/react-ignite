// BASE URL 
const base_url = 'https://api.rawg.io/api/'
const MY_API_KEY = "1ea7682af62147babc4b8d263d4ae142"

// getting date to dynamic update
const getCurrentMonth = ()=>{
    const month = new Date().getMonth()+1
    if(month<10) return `0${month}`
    else return month
}

const getCurrentDay = ()=>{
    const month = new Date().getDate()
    if(month<10) return `0${month}`
    else return month
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear-1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear+1}-${currentMonth}-${currentDay}`


// Popular Game
const popular_games = `games?key=${MY_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?key=${MY_API_KEY}&dates=${currentDate},${nextYear}&ordering=-rating&page_size=10`
const newGames = `games?key=${MY_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
// Game Details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${MY_API_KEY}`;
//Screenshots
export const gameScreenshotsURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${MY_API_KEY}`;