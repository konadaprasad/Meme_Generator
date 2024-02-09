import Styled from 'styled-components'

export const MainContainer = Styled.div`
display:flex;
flex-direction:column;
padding:40px;
height:100vh;
`

export const InnerCont = Styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
padding:20px;
width:100%;
margin:30px;
align-items:center;

`

export const Heading = Styled.h1`
font-size:35;
color:#0070c1;
font-weight:bold;
text-align:center;
`
export const FormContainer = Styled.form`
display:flex;
flex-direction :column;
width:50%; 
margin:20px;

`
export const Input = Styled.input`
height:40px;
width:100%;
border:solid 1px black;
color:#1e293b;
padding-left:10px;
border-radius:5px;
margin-bottom:20px;
`

export const Label = Styled.label`
color :#5a7184;
font-size:18px;
margin-bottom:5px;
`
export const Option = Styled.option`
height:40px;
width:100%;
border:solid 1px black;
color:#1e293b;
padding-left:10px;
border-radius:5px;
margin-bottom:20px;

`
export const ImageCont = Styled.div`
background-image:url(${props => props.image});
background-size:cover;
height:400px;
padding:20px;
width:50%;
font-family:"open sans";
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;


`
export const Button = Styled.button`
 height:40px;
 width:100px;
 background-color:#0b69ff;
 color:#ffffff;
 border-radius:5px;
 border:none;
 margin-top:20px;
 align-self:center;
`
export const Heading1 = Styled.p`
font-size:${props => props.size}px;
color:#ffffff;


`
