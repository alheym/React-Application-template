import styled, { css } from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: white;
    border-radius: 2rem;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25)
  `
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    
    h1 {
        font-size: 3rem;
    }
    
    p {
        font-size: 1.5rem;
        color: rgb(96, 95, 35);
    }
  `
export const MainIcon = styled.span`
    font-size:  6rem;
    height: 4rem;
`

export const RulesWrapper = styled.div`
    background: rgba(96, 95, 35, .4);
    padding: 1rem;
    border-radius: 1rem;
    font-size: 14px;
    line-height: 1rem;
    
    span {
        font-weight: bold;
    }
`

export const ReadyText = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: rgb(96, 95, 35);
`

export const GoButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(94, 66, 52);
    color: rgb(244, 238, 228);
    border-radius: 24px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    outline: none;
    border: none;
    font-size: 2rem;
    padding: 16px 8px;
`

export const MainHeader = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-align: start;
    gap: 4px;
    
    h1 {
        font-size: 22px;
    }
    
    p {
        font-size: 14px;
        color: rgb(96, 95, 35);
    }
`

export const Card = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-align: start;
    gap: 1.5rem;
`

export const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
`

export const ShowAnswer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(94, 66, 52);
    color: rgb(244, 238, 228);
    border-radius: 16px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    outline: none;
    border: none;
    font-size: 1.5rem;
    padding: 16px 10px;
    margin-top: 1rem;
`

export const NavButtonWrapper = styled.div`
    width: 100%;
    display: flex;
   justify-content: space-between; 
`

export const NavNextButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(151, 146, 91);
    color: rgb(244, 238, 228);
    border-radius: 16px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    outline: none;
    border: none;
    padding: 8px 12px;
    font-size: 14px;
    
    &:disabled {
      opacity: .4;
    }
`

export const NavPrevButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(121, 120, 118);
    color: rgb(244, 238, 228);
    border-radius: 16px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    outline: none;
    border: none;
    padding: 8px 12px;
    font-size: 14px;
    
    &:disabled {
      opacity: .4;
    }
`

export const AnswerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-shadow:  0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    background: rgba(96, 95, 35, .2);
    padding: 16px 4px;
    border-radius: 1rem;
    
    p {
        font-size: 20px;
        color: rgb(96, 95, 35);
    }

`

export const AnswerButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

export const AnswerRightButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(96, 94, 35);
    color: rgb(244, 238, 228);
    border-radius: 16px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    outline: none;
    border: none;
    padding: 8px 12px;
    font-size: 16px;
    text-align: center;
    width: 155px;
`

export const AnswerNotRightButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(112, 40, 51);
    color: rgb(244, 238, 228);
    border-radius: 16px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    outline: none;
    border: none;
    padding: 10px 12px;
    font-size: 16px;
    text-align: center;
    width: 155px;
`

// Контейнер прогресс-бара (фон)
export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 12px; /* h-3 ≈ 12px */
  background-color: #e5e7eb; /* bg-gray-200 */
  border-radius: 9999px; /* rounded-full */
  overflow: hidden;
  margin-top: 4px;
`;

// Заполнение прогресса
export const ProgressBarFill = styled.div<{ width: number }>`
    height: 100%;
    width: ${(props) => props.width}%;
    background: linear-gradient(to right, #605e23, #97925b);
    border-radius: 9999px; /* rounded-full */
    transition: width 0.5s ease; /* transition-all duration-500 */
`;

export const ProgressWrapper = styled.div`
width: 100%;
    margin-top: 12px;
`
export const Footer = styled.div`
  font-size: 14px;
    line-height: 1rem;
`

export const ResultWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100dvh;
`

export const ResultIcon = styled.span`
    font-size:  6rem;
    margin-top: 3rem;
`