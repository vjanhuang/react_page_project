import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    list-style:none;
    box-sizing:border-box;
}
body{
    background-color: #03091F;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    font-weight:400;
    color:white;
}
a {
    color:white;
    font-family:inherit;
    text-decoration:none;
}
p{
    line-height:2rem;
}
.title-con{
    text-align:center;
    margin:0 auto;
}
.Before{
    position:relative;
    padding-left:3rem;
    &::before{
        content:'';
        position:absolute;
        left:0;
        top:50%;
        width:35px;
        
    }
}`;
export default GlobalStyle;