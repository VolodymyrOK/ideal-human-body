import { Field, Form } from 'formik'
import styled from 'styled-components'

export const DivContainer = styled.div`
  /* width: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 360px) {
    min-width: 348px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  } */
`

export const FormTitle = styled.h1`
  margin: 22px auto 22px;
  padding: 10px;
  text-align: center;
  color: rgb(27, 20, 88);
`

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  & label:last-of-type {
    margin-bottom: 15px;
  }
`

export const FormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 320px;
  font-size: 18px;
  @media (max-width: 420px) {
    width: 242px;
  }
  & > div {
    text-align: right;
  }
  & > div > input {
    width: 115px;
    @media (max-width: 420px) {
      width: 100px;
    }
  }
  &:last-of-type > div > input {
    cursor: pointer;
    width: 30px;
  }
`

export const FormField = styled(Field)`
  text-align: left;
  margin-left: 15px;
  width: 50px;
`

export const ErrorText = styled.p`
  font-size: 11px;
  margin: 0;
  color: red;
`
