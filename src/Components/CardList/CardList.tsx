import React, { useState, useEffect } from 'react';
import MCard from '../Card/Card';
import { Grid } from '@material-ui/core';
//import './MediaGrid.css';

interface IState {
    users: any[];
    
}
interface ICardProps {
    SearchQuery: (string | null);
    
}
function MCardList(props: ICardProps) {
    const [ItemArray, setItemArray] = useState<IState[]>([{ users: []}]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            
            .then(response => {
                setItemArray(response)
            })
            
            .catch(() => console.log("it didn't work")
            );
console.log()
    }, [ ]);
console.log(ItemArray)
    var Cards: JSX.Element[] = [];
    ItemArray.forEach((el: IState, i: Number) => {
        if (!el ||!el.users) {
            return;
        }
        Cards.push(
            <Grid key={"card_"+i} item sm={6} md={4} lg={3} className="MediaGridCard">
                <MCard User={el.users}/>
                {console.log(el.users)}
            </Grid>)
    })
    return (
        <div>
            <p>hello</p>
        </div>
    )
}

export default MCardList