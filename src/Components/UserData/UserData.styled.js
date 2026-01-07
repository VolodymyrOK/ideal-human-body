import { Field, Form } from 'formik'
import styled from 'styled-components'

export const FormTitle = styled.h1`
  margin-bottom: 22px;
  width: 100%;
`

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

export const FormLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 242px;
  font-size: 18px;
  & > div {
    text-align: right;
  }
  & > div > input {
    width: 100px;
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
