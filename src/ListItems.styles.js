import styled from 'styled-components';


export const TotalListItems=styled.div`
color: #fff;
width:300px;
background-color:#0a931e;
margin: 20px auto;
height:50px;
border-radius:5px;

`;

export const ListItemsParagraph=styled.p`

padding:10px;
font-size:18px;
font-weight:500;
position:relative;
.editabletext{
    background-color:transparent;
    border:0;
    color:#fff;
    font-size:18px;
   &:focus{
       outline:none;
   }
}
.icon{
    position:absolute;
    right:10px;
    cursor:pointer;
    margin:0 5px;
}
`;
