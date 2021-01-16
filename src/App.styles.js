import styled from 'styled-components';


export const AppStyles=styled.div`
background: #0a1f44;
min-height:580px;
width: 400px;
margin: 40px auto;
overflow: auto;
max-height: 70px;
@media screen and (max-width:800px){
    min-height: 600px;
    margin: 15px auto;
    width: 360px;
}
`;

export const HeaderStyles=styled.header`
padding: 10px;
`;

export const FormStyles=styled.input`
background-color:#0a931e;
border: 0; 
color: #fff;
width: 200px;
height: 50px;
margin: 20px;
padding: 0 20px;
font-size: 18px;
border-radius: 10px;
@media only screen and (max-width:768px){
    margin: 15px;
    padding: 0 5px;
}
::placeholder{
    color: rgba(255,255,255,0.5);
}
:focus{
    outline: none;
}
`;

export const ButtonStyles=styled.button`
height: 50px;
width: 80px;
border-radius: 5px;
border: 0;
background-color:#0a931e; 
cursor: pointer;
color: #fff;
font-size: 18px;
:focus{
    outline: none;
}
`;
