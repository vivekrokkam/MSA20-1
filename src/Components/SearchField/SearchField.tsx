import React, {useState} from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import {IUserInput} from '../../Common/Interface';
import "./SearchField.css";


interface ISearchFieldProps{
    SetUserInput: (a: IUserInput) => void;
}


function SearchField( props: ISearchFieldProps) {

    const [SearchQuery, setSearchQuery] = useState<string | null>("");
    const handleSearchQueryChange = (s: string | null) =>{
        setSearchQuery(s);          
    }

    const handleSubmit = () => {
        if (SearchQuery?.length !== 0 && SearchQuery !== null && SearchQuery !== "") {
            let UserInput: IUserInput = {
                SearchQuery: SearchQuery,
                
            }
            props.SetUserInput(UserInput);
        } else {
            setHasFocus(true);
        }
    }

    const [HasFocus, setHasFocus] = useState<boolean>(false);

    return <div className="SearchBarContainer">
        <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
                <TextField
                    required
                    id="outlined-required"
                    label="Search"
                    variant="outlined"
                    error={HasFocus && SearchQuery === ""}
                    onClick={() => setHasFocus(true)}
                    value={SearchQuery}
                    onChange={e => handleSearchQueryChange(e.target.value)}
                />
            </Grid>
            <Grid item xs={6} sm={3}>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Grid>
        </Grid>
    </div>
}
    export default SearchField