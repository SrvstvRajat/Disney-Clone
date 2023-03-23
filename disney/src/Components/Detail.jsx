import styled from "styled-components";
import img1 from '../images/playblack.png'
import img2 from '../images/playwhite.png'
import img3 from '../images/group-icon.png'
import { useEffect,useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";
import db from "../firebase";
const Detail=(props)=>{
    const { id }=useParams();
    console.log(id)
    const [detail,setDetail]=useState({});
    useEffect(()=>{
        const q=query(collection(db,'movies'));
        onSnapshot(q,(snapshot)=>{
            snapshot.docs.forEach((doc)=>{
                if(id===doc.id){
                    console.log(id)
                    console.log(doc.id)
                    console.log('kuch to hua h')
                    setDetail(doc.data());
                }
                else{
                 console.log('No such documebr')
                }
        })
        });
    },[id]); 
    return(
        <Container>
            <BackGround>
                <img alt={detail.title} src={detail.backgroundImg}/>
            </BackGround>
            <ImageTitle>
                <img alt={detail.title} src={detail.titleImg}/>
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src={img1} alt=""/> 
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src={img2} alt=""/>
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span/><span/>
                        {/* AddList */}
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src={img3} alt=""/>
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>
                    {detail.subTitle}
                </SubTitle>
                <Description>
                    {detail.description}
                </Description>
            </ContentMeta>
        </Container>
    )
}


const Container=styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x:hidden;
    display:block;
    top:72px;
    padding: 0 calc(3.5vw+5px);
`

const BackGround=styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;
    img{
        width: 100vw;
        height: 100vh;
        @media (max-width:768px)
        {
            width: initial;
        }
    }

`

const ImageTitle=styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin-left: 20px;
    height: 25vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`

const ContentMeta=styled.div`
    max-width: 874px;
`

const Controls=styled.div`
    align-items: center;
    display: flex;
    flex-flow:row nowrap;
    margin-left: 44px ;
    min-height: 56px;
`

const Player=styled.button`
    font-size:15px;
    margin: 0px 22px 0px 0px;
    padding: 0px 24px;
    height: 56px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249,249,249);
    border: none;
    color: rgb(0,0,0);
    img{
        width: 32px;
    }
    &:hover{
        background: rgb(198,198,198);
    }
    @media (max-width:768px)
    {
        height: 45px;
        padding: 0px 22px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;
        img{
            width: 25px;
        }
    }

`


const Trailer=styled(Player) `
    background: rgba(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
`


const AddList=styled.div`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.6);
    border-radius: 50%;
    cursor: pointer;
    span{
        background-color: rgb(249,249,249);
        display: inline-block;
        &:first-child{
            height: 2px;
            transform: translate(1px,0px) rotate(0deg);
            width: 16px;
        }
        &:nth-child(2){
            height: 16px;
            transform: translateX(-8px) rotate(0deg);
            width: 2px;

        }
    }
`

const GroupWatch=styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    div{
        height: 40px;
        width: 40px;
        background: rgb(0,0,0);
        border-radius: 50%;
        img{
            width: 100%;
        }
    }
`

const SubTitle=styled.div`
    color: rgb(249,249,249);
    font-size: 35px;
    min-height: 20px;
    margin: 45px;
    @media (max-width:768px)
    {
        font-size: 12px; 
    }

`;
const Description=styled.div`
    line-height: 1.4;
    font-size: 20px;
    padding: 16px 0px;
    margin-left:42px;
    color: rgb(249,249,249);
    @media(max-width:768px){
        font-size: 14px;

    }
`
export default Detail