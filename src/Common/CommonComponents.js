import styled from 'styled-components';

export const NavbarContainer = styled.nav`
background-color: #952323;
color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0;
border-radius: 0 0 12px 12px;
`;

export const UserCircle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #F5EBEB; 
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #952323;
  margin-left:10px
`;


export const H2 = styled.h2`
    color: #F5EBEB;
    margin-left: 15px;
    font-family: 'Inter', sans-serif;
`;

export const UserProfile = styled.div`
  width: 50px;
  height: 50px;
  background-color: #F5EBEB; 
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #952323;
  margin-right:10px;
`;

export const MainDIV = styled.div`
    background-color: #F5EBEB;
    color: #952323;
    height: 100vh;
`;

export const TaskContainer = styled.div`
background-color: #EEE5E5;
height: 75%;
width: 85%;
box-shadow: 0px 0px 5px 5px gray;
border-radius:12px;
margin:auto;
margin-top:25px;
display:flex;
overflow:hidden;
`;