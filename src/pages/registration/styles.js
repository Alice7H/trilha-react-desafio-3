import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const Column = styled.div`
  flex: 1;
`

export const Wrapper = styled.div`
  max-width: 370px;

  form button {
    max-width: 280px;
  }
`

export const Title = styled.h2`
  color: #FFFFFF;
  font-family: 'Open Sans';
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 44px;
  margin-bottom: 20px;
  max-width: 70%;
`

export const TitleRegister = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;

`

export const SubtitleRegister = styled.p`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;

`

export const PolicyText = styled.p`
  color: #FFFFFF;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  margin-top: 27px;
`

export const LoginText = styled.p`
  color: #FFFFFF;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  margin-top: 11px;

  span {
    color:#23DD7A;
    cursor: pointer;
  }
`