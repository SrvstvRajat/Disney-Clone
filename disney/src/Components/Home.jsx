import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommended from "./Recommended";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import db from '../firebase'
import { doc, snapshot, collection, query, where, onSnapshot } from "firebase/firestore";
import { setMovies } from "../features/movie/movieSlice";
import { selectuserName } from "../features/user/userSlice";
const Home=(props)=>{
    const dispatch=useDispatch();
    const userName=useSelector(selectuserName);
    let recommends=[];
    let newDisneys=[];
    let originals=[];
    let trendings=[];
    useEffect(()=>{
        const q=query(collection(db,'movies'));
        const unsub=onSnapshot(q,(snapshot)=>{
            snapshot.docs.map((doc)=>{
                switch(doc.data().type){
                    case 'recommend':
                        recommends=[...recommends,{id:doc.id,...doc.data()}];
                        break;
                    case 'new':
                        newDisneys=[...newDisneys,{id:doc.id,...doc.data()}]
                        break;
                    case 'original':
                        originals=[...originals,{id:doc.id,...doc.data()}]
                        break;
                    case 'trending':
                        trendings=[...trendings,{id:doc.id,...doc.data()}]
                        break;
                }
            });
        dispatch(setMovies({
            recommend:recommends,
            newDisney:newDisneys,
            original:originals,
            trending:trendings,
        })
        );
    })
    },[userName]);
    return(<>
        <div className="llo">
           <ImageSlider/>
           <Viewers/>
           <Recommended/>
           <NewDisney/>
           <Originals/>
           <Trending/>
        </div>
    </>)
}

export default Home;