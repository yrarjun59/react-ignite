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

export const popularGamesURL = () => `${base_url}${popular_games}`;


