import { createSlice, nanoid } from "@reduxjs/toolkit";
// side bar change value
const initialState = {
    value: true,
}
const FavoriteValue={
    value:false
}
const cardData = [
    {
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},


]
const Comedy=[{
    id: nanoid(),
    title: "Bruno mike",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
]
const Horror=[{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
]
const News=[{
    id: nanoid(),
    title: "Wooden House, Florida",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
]
const Crime=[{
    id: nanoid(),
    title: "crime",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
]
const Sport=[{
    id: nanoid(),
    title: "sport",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
]
const Favorites=[{
    id: nanoid(),
    title: "sport",
    description: "hello",
    image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: "Author name",
    avatar: "https://images.unsplash.com/photo-1499696010",
    views: "100 views",
},
]
const Categories=[{

        title: "Culture",
        img: "https://images.unsplash.com/photo-1543906965-f9520aa2ed8a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{

    title: "Sports",
    img: "https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{

    title: "NEWS",
    img: "https://plus.unsplash.com/premium_photo-1679496830187-5b7a3def833e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D",
},
{

    title: "Crime",
    img: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNyaW1lfGVufDB8fDB8fHww",
},
{

    title: "hORROR",
    img: "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{

    title: "Comedy",
    img: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{

    title: "Science",
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{

    title: "Business",
    img: "https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
{

    title: "Religion",
    img: "https://plus.unsplash.com/premium_photo-1678305037622-474d23a7d906?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVsaWdpb258ZW58MHx8MHx8fDA%3D",
},


]

// CATERGORIES SLICE
 
    const categoriesSlice = createSlice({
        name: 'categories', 
        initialState: { Categories },    
        reducers: { 
            Updatecard: (state, action) => {
                state.cardData = action.payload;
            }
        }

        })

//sport slice
const sportSlice = createSlice({
    name:'sport',
    initialState: { Sport },
    reducers: {
        Updatecard: (state, action) => {
            state.cardData = action.payload;
        }
    }
})

//crime slice
const crimeSlice = createSlice({
    name: 'crime',
    initialState: { Crime },
    reducers: {
        Updatecard: (state, action) => {
            state.cardData = action.payload;
        }
    }
})

//news slice
const newsSlice = createSlice({
    name: 'news',
    initialState: { News },
    reducers: {
        Updatecard: (state, action) => {
            state.cardData = action.payload;
        }
    }
})

//Horror slice with reducer
const horrorSlice = createSlice({
    name: 'horror',
    initialState: { Horror },
    reducers: {
        Updatecard: (state, action) => {
            state.cardData = action.payload;
        }
    }
})



const comedySlice = createSlice({
    name: 'comedy',
    initialState: { Comedy },
    reducers: {
        Updatecard: (state, action) => {
            state.cardData = action.payload;
        }
    }
})




     const cardSlice = createSlice({
    name: 'card',
    initialState: { cardData },
    reducers: {
            
        }
    })

    //favorite slice
    const favoriteSlice = createSlice({
            name:'favorite',
            initialState: { Favorites },
            reducers:{

            }})


const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
          changeValue: (state, action) => {
                state.value = action.payload;
            },
        }
    })
const FavoriteValueSlice=createSlice({
    name: 'FavoriteValue',
    initialState:{FavoriteValue},
    reducers: {
        changeFavoriteValue: (state, action) => {
                state.value = action.payload;
                console.log("state of value____"+state.value)
            },
        }

})
export const { changeFavoriteValue } = FavoriteValueSlice.actions;
    export const { changeValue } = sideBarSlice.actions;
    export const { Updatecard } = cardSlice.actions;
    export const { Updatecomedy } = comedySlice.actions;
    export const { Updatehorror } = horrorSlice.actions;
    export const { UpdateNews } = newsSlice.actions;
    export const selectFavoriteValue=state=>state.FavoriteValue
    export const selectCard = state => state.card.cardData;
    export const selectComedy = state => state.comedy.Comedy;
    export const selectHorror = state => state.horror.Horror;
    export const selectNews = state => state.news.News;
    export const selectCrime = state => state.crime.Crime;
    export const selectSport = state => state.sport.Sport;
    export const selectFavorites=state=>state.favorite.Favorites
    export const selectCategories=state=>state.categories.Categories
    export const selectSideBar = state => state.sidebar.value;
    export const sideBarReducer= sideBarSlice.reducer;
    export const cardReducer= cardSlice.reducer;
    export const comedyReducer= comedySlice.reducer;
    export const horrorReducer= horrorSlice.reducer;
    export const newsReducer= newsSlice.reducer;
    export const crimeReducer= crimeSlice.reducer;
    export const sportReducer= sportSlice.reducer;
    export const favoriteReducer=favoriteSlice.reducer;
    export const cateoriesReducer=categoriesSlice.reducer;
    export const FavoriteValueReducer=FavoriteValueSlice.reducer

  console.log(selectCard)
