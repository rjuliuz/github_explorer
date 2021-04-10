import React, { useState } from 'react';
import axios from "axios";
import useRequest from '../../context/GlobalProfileData';
import { BASE_URL, client_id, client_secret } from "../../constants/urls";
import {
  DivContainer, DivTitle, Title, InputSearch, ButtonInput, DivProfile,
  ImageProfile, UserName, UserLogin, DivMain, UserInfo, UserIcon,
  ReposContainer, DivButton, ButtonRepos, DivRepos, NameRepos, RepoStar
}
from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faUserFriends, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';

const MainGitProfile = () => {  
  const {input, setInput, data, getData} = useRequest();
  const [repos, setRepos] = useState([]); 
  const count = 8;
  const sort = "created: asc";  
  
  const getRepos = () => {   
    axios
      .get(`${BASE_URL}/${input}/repos?per_page=${count}&sort=${sort}?client_id=${client_id}&client_secret=${client_secret}`)
      .then((response) => setRepos(response.data))
      .catch((error) => console.log(error.message));
  };

  const getStarreds = () => {    
    axios
      .get(`${BASE_URL}/${input}/starred?per_page=${count}&sort=${sort}?client_id=${client_id}&client_secret=${client_secret}`)
      .then((response) => setRepos(response.data))
      .catch((error) => console.log(error.message));
  };

  const listOfRepos = repos.map((value) => {
    return (
      <div>
        <NameRepos>Repositório: {value.name}</NameRepos>        
        <RepoStar><FontAwesomeIcon icon={faStar} size="sm" style={{color: 'black'}}/> {value.stargazers_count}</RepoStar>
      </div>
    )
  })

  return (
    <DivContainer>
          <DivTitle>         
            <Title><b>Github</b> Search</Title>
            <InputSearch 
              type="text"
              placeholder={input}          
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <ButtonInput onClick={() => getData()}>
              <FontAwesomeIcon icon={faSearch} size="2x" style={{color: 'white'}}/>            
            </ButtonInput>
          </DivTitle>       
          <DivMain>
            <DivProfile>
              <ImageProfile src={data.avatar_url} alt="Avatar Github"/>
              <UserName>{data.name}</UserName>
              <UserLogin>user: {data.login}</UserLogin>
              <UserIcon><FontAwesomeIcon icon={faMapMarkerAlt} size="2x" style={{color: 'black'}}/><UserInfo>{data.location}</UserInfo></UserIcon>
              <UserIcon><FontAwesomeIcon icon={faUsers} size="lg" style={{color: 'black'}}/><UserInfo>{data.followers} seguidores</UserInfo></UserIcon>
              <UserIcon><FontAwesomeIcon icon={faUserFriends} size="lg" style={{color: 'black'}}/><UserInfo>{data.following} seguindo</UserInfo></UserIcon>
            </DivProfile>
            <ReposContainer>
              <DivButton>
                <ButtonRepos onClick={() =>  getRepos()}>REPOS</ButtonRepos>
                <ButtonRepos onClick={() =>  getStarreds()}>STARRED</ButtonRepos>
              </DivButton>
              <DivRepos>
                {listOfRepos}
              </DivRepos>
            </ReposContainer>  
          </DivMain>      
    </DivContainer>
  );
}

export default MainGitProfile;