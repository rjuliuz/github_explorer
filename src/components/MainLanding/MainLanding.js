import useRequest from '../../context/GlobalProfileData';
import { useHistory } from "react-router-dom";
import { 
  DivContainer, 
  DivTitle, 
  Title, 
  Title2,
  DivInput,
  InputSearch,
  ButtonInput
  } 
from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MainLanding = () => {
  const history = useHistory();
  const {input, setInput, getData} = useRequest();    
  
  return (
    <DivContainer>
      <DivTitle>
        <Title>Github</Title><Title2>Search</Title2>      
      </DivTitle>
      <DivInput>
        <InputSearch 
          type="text"   
          placeholder="Digita um nome de usuário"       
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <ButtonInput onClick={() => getData("landing", history)}>       
          <FontAwesomeIcon icon={faSearch} size="2x" style={{color: 'white'}}/>
        </ButtonInput>    
      </DivInput>      
    </DivContainer>
  );
}

export default MainLanding;