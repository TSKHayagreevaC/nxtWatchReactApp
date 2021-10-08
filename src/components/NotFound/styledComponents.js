import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`

export const NotFoundContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const NotFoundMainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #f1f5f9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
`

export const NotFoundImage = styled.img`
  width: 60%;
  margin: 20px;
`

export const NotFoundHeading = styled.h1`
  margin: 10px 0px 10px 0px;
  text-align: center;
`

export const NotFoundPara = styled.p`
  margin: 5px 0px 5px 0px;
  text-align: center;
`
