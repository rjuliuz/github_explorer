import styled from 'styled-components';

export const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const DivTitle = styled.div`  
  display: flex; 
`

export const Title = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  line-height: 84px;

  @media (max-width: 750px) {
    font-size: 2.5rem;
  }
`

export const Title2 = styled.p`
  font-family: 'Rubik', sans-serif;
  font-size: 4rem;
  font-weight: 300;
  line-height: 84px;
  margin-left: 15px;

  @media (max-width: 750px) {
    font-size: 2.5rem;
  }
`

export const DivInput = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;    
`

export const InputSearch = styled.input`
  width: 37.5rem;
  height: 3.125rem;
  font-size: 1.5rem;
  padding-left: 10px;
  border: 2px solid #000;
  box-sizing: border-box; 

  @media (max-width: 1024px) {
    width: 28rem;
  } 

  @media (max-width: 750px) {
    width: 15rem;
  } 
`

export const ButtonInput = styled.button`
  width: 6.25rem;
  height: 3.125rem;
  border: 2px solid #000;
  background: #000;
  cursor: pointer;
  margin-left: -2px;  

  @media (max-width: 1024px) {
    width: 4rem;
  } 

  @media (max-width: 750px) {
    width: 3rem;
  } 
`

