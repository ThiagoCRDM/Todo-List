import styled from 'styled-components';

export const List = styled.ul`

list-style: none;
margin-top: 30px;

li{
    padding: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    :hover{ 
        background: #ebebeb;
        transition-delay: 2ms;
    }

    & + li{
        border-top: 2px solid #eee;
    }
}

`;

export const Button = styled.button.attrs(
    { type: 'button' }
)`
    background: #3b76e3;
    border: none;
    
    padding: 0 12px;
    height: 40px;
    margin-left: 15px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    font-weight: bold;
    font-size: 15px;
    :hover{
        
      color: #000;
      background: #d43939;
      transition-delay: 5ms;
    }

`;


export const Done = styled.button.attrs( props =>
   ( { type: 'button', disabled: props.disabled })
)`

    background: #3b76e3;
    border: none;
    height: 35px;
    padding: 0 15px;
    margin-left: 15px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    font-weight: bold;
    font-size: 15px;

    &[disabled]{
        background: #19a63c;
        cursor: not-allowed;
        opacity: 0.8;
        :hover{
            color: #fff;
            background:  #19a63c;
        }
    }

    :hover{
      color: #000;
      background: #19a63c;
      transition-delay: 5ms;
    }
 
 `;
