// styles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

export const TitleSignup = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

export const SubtitleSignup = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 30px;
`;

export const Wrapper = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const CriarText = styled.p`
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
  margin: 0;
  
  a {
    color: #007bff;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

