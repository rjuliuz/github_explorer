import styled from "styled-components";

export const DivContainer = styled.div`
  width: 1500px;
  height: 100%;
  display: flex;
  flex-direction: column;    
`

export const DivTitle = styled.div`  
   max-width: 1500px;
   height: 100%;
   max-height: 150px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: row;
   border-bottom: 1px solid black;  

   @media (max-width: 470px) {
    flex-direction: column;
  }   
`

export const Title = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 4rem;
  font-weight: 300;
  line-height: 84px;

  @media (max-width: 1250px) {
    font-size: 3rem;
  }

  @media (max-width: 980px) {
    font-size: 2.5rem;
  }

  @media (max-width: 690px) {
    font-size: 1.8rem;
  }
`

export const InputSearch = styled.input`
  width: 37.5rem;
  height: 3.125rem;
  font-size: 1.5rem;
  padding-left: 10px;
  margin-left: 100px;
  border: 2px solid #000;
  box-sizing: border-box; 

  @media (max-width: 1250px) {
    width: 28rem;
  } 

  @media (max-width: 980px) {
    width: 15rem;
  } 

  @media (max-width: 690px) {
    width: 10rem;
    margin-left: 30px;
  }

  @media (max-width: 470px) {    
    margin-left: 0px;
    width: 90%;
  }
`

export const ButtonInput = styled.button`
  width: 6.25rem;
  height: 3.125rem;
  border: 2px solid #000;
  background: #000;
  cursor: pointer;
  margin-left: -2px;  

  @media (max-width: 1250px) {
    width: 4rem;
  } 

  @media (max-width: 980px) {
    width: 3rem;
  } 
`

export const DivMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;   
    align-items: center;
  }  
`

export const DivProfile = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 30px;
  border-right: 1px solid black;  

  @media (max-width: 900px) {
    border-right: none;
    border-bottom: 2px solid black;
    padding-bottom: 30px;
    margin-bottom:30px;
  }       
`

export const ImageProfile = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-left: 15px;
`

export const UserName = styled.p`
  font-family: 'Robot', sans-serif;
  font-size: 2.25rem;
  font-weight: 300;
  margin: 20px 15px; 
`

export const UserLogin = styled.p`
  font-family: 'Robot', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 10px;
  margin-bottom: 20px;  
  margin-left: 15px;
`

export const UserInfo = styled.span`
  font-family: 'Robot', sans-serif;
  margin-left: 15px;
  font-size: 1.25rem;
  font-weight: 300;
`

export const UserIcon = styled.p`
  margin-top: 10px;
  margin-left: 15px;
`

export const ReposContainer = styled.div`  
  margin: 20px 0;  
  display: flex;
  flex-direction: column;   
`

export const DivButton = styled.div`
  display: flex;
`

export const ButtonRepos = styled.button`
  font-family: 'Robot', sans-serif;
  width: 300px;
  height: 50px;
  background-color: black;
  color: white;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 50px;

  @media (max-width: 1250px) {
    width: 200px;
    font-size: 1.2rem;
    margin: 0 20px;
  }
`

export const DivRepos = styled.div`
  width: 100%;
  height: 100%;
  max-height: 800px;
  margin: 15px 20px;
  overflow-y: auto;  
  scrollbar-width: none;
`

export const NameRepos = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 2.25rem;
  font-weight: 300;
  margin: 10px auto;

  @media (max-width: 1250px) {    
    font-size: 1.5rem;
  }
`

export const RepoStar = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 10px auto;

  @media (max-width: 1250px) {    
    font-size: 1rem;
  }
`

