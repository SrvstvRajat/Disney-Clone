import styled from "styled-components"
import logo from '../images/logo.svg'
import home from '../images/home-icon.svg'
import search from '../images/search-icon.svg'
import series from '../images/series-icon.svg'
import watchlist from '../images/watchlist-icon.svg'
import originals from '../images/original-icon.svg'
import movies from '../images/movie-icon.svg'
import { useEffect } from "react"
import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase"
import {useDispatch,useSelector} from 'react-redux'
import{useNavigate} from 'react-router-dom'
import { selectuserName,selectuserPhoto,setUserLoginDetails, setSignOutState } from "../features/user/userSlice"
function Navbar(){
    const dispatch=useDispatch();
    const history=useNavigate();
    const username=useSelector(selectuserName);
    const userphoto=useSelector(selectuserPhoto);
    const setUser=(user)=>{
        dispatch(setUserLoginDetails({
            name:user.displayName,
            email:user.email,
            photo:user.photoURL,
        }))
    }

    useEffect(() => {
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                setUser(user);
                history.push('/home');
            }
        })
    }, [username])
    const handleAuth=()=>{
        if(!username)
        {
        signInWithPopup(auth,provider).then((result)=>{
            setUser(result.user);
            console.log(result);
        }).catch((err)=>{
            alert(err.message);
        })
        }
        else
        {
            auth.signOut().then(()=>{
                dispatch(setSignOutState());
                history.push("/");
                console.log("logout")
            })
        }

    }
    return(
        <>
        <Container>
            <Logo img src={logo} alt=""/>
            {!username ? (<Login onClick={handleAuth}>Login</Login>):
            (
            <>
            <NavMenu>
                <a href='/home'>
                    <img src={home} alt="" />
                    <span>HOME</span>
                </a>
                <a href='/search'>
                    <img src={search} alt="" />
                    <span>SEARCH</span>
                </a>
                <a href='/watchlist'>
                    <img src={watchlist} alt="" />
                    <span>WATCHLIST</span>
                </a>
                <a href='/originals'>
                    <img src={originals} alt="" />
                    <span>ORIGINALS</span>
                </a>
                <a href='/movies'>
                    <img src={movies} alt="" />
                    <span>MOVIES</span>
                </a>
                <a href='/series'>
                    <img src={series} alt="" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <SignOut>
            <UserImg src={userphoto} alt={username}/>
            <DropDown><span onClick={handleAuth}>SignOut</span></DropDown>
            </SignOut>
            </>
        )}
        </Container>
        </>
    )
}

const Container=styled.div`
    display: flex;
    background-color: black;
    height:70px;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:0 26px;
    letter-spacing: 16px;
    z-index: 3;
`
const Logo=styled.img`
    padding: 0%;
    width:80px;
    margin-top: 4px;
    max-height: 70px;
    display: inline-block;
    img{
        display: block;
        width: 100%;
    }
`

const NavMenu=styled.div`
    align-items:center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position:relative;
    margin-right: auto;
    margin-left: 25px;
    a{
        padding: 0 12px;
        align-items: center;
        display: flex;
        img{
            height: 20px;
            min-width: 20px;
            width: 20px;
        }
        span{
            color: rgb(249,249,249);
            font-size: 13px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
            &:before{
                background-color: rgb(249,249,249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: "";
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin:left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
                visibility: hidden;
                width: auto;
            }
        }
        &:hover{
            span:before{
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
        }
    }
    @media (max-width:768px){
        display: none;
    }
`

const Login=styled.a`
    background-color: black;
    border-radius: 4px;
    border: 1px solid white;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    transition: all .2s ease 0s;
    &:hover{
        background-color: white;
        color:black;
        cursor: pointer;
    }
`
const UserImg=styled.img`
height: 100%;
`

const DropDown=styled.div`
    position:absolute;
    top:48px;
    right: 0px;
    background: rgb(19,19,19);
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;
`
const SignOut=styled.div`
    position: relative;
    height: 48px;
    display: flex;
    width: 48px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    ${UserImg}{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
    &:hover{
        ${DropDown}{
            opacity: 1;
            transition-duration:1s;
        }
    }


`
export default Navbar