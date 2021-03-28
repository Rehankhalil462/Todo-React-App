import styled from 'styled-components';

export const AppStyles = styled.div`
  min-height: 530px;
  background: linear-gradient(45deg, black, transparent);
  width: 400px;
  margin: 40px auto;
  overflow: auto;
  max-height: 70px;
  @media screen and (max-width: 800px) {
    min-height: 560px;
    margin: 15px auto;
    width: 360px;
  }
`;

export const HeaderStyles = styled.header`
  padding: 10px;
`;

export const FormStyles = styled.input`
  background: linear-gradient(45deg, black, transparent);
  border: 0;
  color: #fff;
  width: 200px;
  height: 50px;
  margin: 20px;
  padding: 0 20px;
  font-size: 18px;
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    margin: 15px;
    padding: 0 5px;
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  :focus {
    outline: none;
  }
`;

export const ButtonStyles = styled.button`
  height: 50px;
  width: 80px;
  border-radius: 5px;
  border: 0;
  background: linear-gradient(45deg, black, transparent);
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  :focus {
    outline: none;
  }
`;
