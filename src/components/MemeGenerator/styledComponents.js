import styled from 'styled-components'

export const MainDiv = styled.div`
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
export const MemeDiv = styled.div`
  padding: 20px;
`
export const MemeHeading = styled.h1`
  font-size: 30px;
  font-family: 'Open Sans';
  color: #35469c;
`
export const Label = styled.label`
  font-size: 20px;
  font-family: 'Open Sans';
  color: #7e858e;
`
export const Input = styled.input`
  width: 230px;
  margin-bottom: 10px;
  outline: none;
  height: 26
  margin-top:4px;
  border:#d7dfe9 2px solid;
  border-radius:4px;
`
export const Select = styled.select`
    width: 230px;
  margin-bottom: 10px;
  outline: none;
  height: 26
  margin-top:4px;
  border:#d7dfe9 2px solid;
  border-radius:4px;
`
export const Button = styled.button`
  background-color: #0b69ff;
  border-radius: 6px;
  height: 40px;
  width: 90px;
  border-width: 0px;
  color: #ffffff;
`
export const ImageDiv = styled.div`
  background-image: url(${props => props.bgImage});
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-size: cover;
  width: 600px;
`
export const TopText = styled.p`
  font-size: ${props => props.fontSize}px;
  font-family: 'Open Sans';
  color: #ffffff;
`
export const BottomText = styled.p`
  font-size: ${props => props.fontSize}px;
  font-family: 'Open Sans';
  color: #ffffff;
`
