import styled from 'styled-components';



export const Container = styled.div`
  
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  

  input{
    flex: 1;
    border: none;
    border-bottom: 1px solid #6e6e6e;
    padding: 10px 15px;
    font-size: 15px;
  }
 
`;

export const Span = styled.span`

  color: #d43939;

`;


export const SubmitButton = styled.button.attrs({
    type: 'submit'
})`
    background: #3b76e3;
    border: none;
    height: 50px;
    padding: 0 15px;
    margin-left: 15px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    font-weight: bold;
    font-size: 25px;
`;
