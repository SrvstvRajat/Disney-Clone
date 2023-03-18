import styled from 'styled-components'
import YourSvg from "../images/cta-logo-one.svg";
import mysvg from '../images/cta-logo-two.png';
function Login(props)
{
    return(
        <Container>
        <Content>
            <CTA>
                <CTALogoOne src={YourSvg} alt="" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.</Description>
            </CTA>
                <Bottom src={mysvg} alt=""/>
            <div className='Home'></div>
        </Content>
        </Container>
    )
}

const Container=styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100vh;
`;
const Content=styled.div`
    margin-bottom:10vw;
    width:100%;
    min-height:100vh;
    position:relative;
    display:flex;
    box-sizing:border-box;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:80px 40px;
    height:100;
`
const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;

const SignUp=styled.a`
    font-weight: bold;
    color: aliceblue;
    background-color:#0063e5;
    margin-bottom: 12px;
    width: 100%;
    font-size: 20px;
    padding: 16px;
    border: 1px solid transparent;
    border-radius:5px;
    letter-spacing: 1.5x;

    &:hover{
        background-color: #0483ee;
        cursor: pointer;
    }
`

const Description=styled.p`
margin: 0 0 24px;
font-size: 12px;
line-height: 1.5;
letter-spacing: 1.5px;
    
`
const Bottom=styled.img`
    max-width: 600px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
`   
export default Login;