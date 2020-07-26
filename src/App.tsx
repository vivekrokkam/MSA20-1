import React, { useState } from 'react'
import SearchField from './Components/SearchField/SearchField'
import MCardList from "./Components/CardList/CardList"
import { IUserInput } from '../src/Common/Interface';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';


const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
})
function App () {
  const [UserInput, setUserInput] = useState<IUserInput>({
    SearchQuery: "Mars",
    
  });
  function SetUserInput(a: IUserInput) {
    setUserInput(a);    
  }
    return (
      <div>
        <MuiThemeProvider theme={theme}>
        <SearchField SetUserInput={(a: IUserInput) => SetUserInput(a)}/>
        <MCardList SearchQuery={UserInput.SearchQuery}/>
        </MuiThemeProvider>
      </div>
    )
  
}

export default App

