import { ErrorMessage, Formik } from 'formik'
import { format } from 'date-fns'
import Result from '../Result'
import {
  ErrorText,
  FormContainer,
  FormField,
  FormLabel,
  FormTitle,
} from './UserData.styled'
import '../../index.css'
import * as yup from 'yup'
import { USER_DATA } from '../../constans'
import { useState } from 'react'
import Calculator from '../Calculator/Calculator'
import Button from '../Button'
import { nanoid } from 'nanoid'

const userSchema = yup.object().shape({
  name: yup.string().min(2).max(15).required(),
  weight: yup.number().min(10).max(150).integer().required(),
  height: yup.number().min(100).max(220).integer().required(),
  age: yup.number().min(18).max(100).integer().required(),
  gender: yup.string().required(),
})

const initialValues = {
  id: '',
  name: '',
  weight: '',
  height: '',
  age: '',
  gender: '',
  date: '',
  time: '',
}

const FormData = ({ toggleUserData, toggleMainPage, updateDataList }) => {
  const [result, setResult] = useState()
  const [userData, setUserData] = useState(initialValues)

  const handleSubmit = (values, { resetForm }) => {
    const date = format(new Date(), 'dd-MM-yyyy')
    const time = format(new Date(), 'HH-mm-ss')
    const updatedValues = { ...values, id: nanoid(), date, time }

    const prevDataUsers = JSON.parse(localStorage.getItem(USER_DATA) || '[]')
    localStorage.setItem(
      USER_DATA,
      JSON.stringify([...prevDataUsers, updatedValues])
    )
    updateDataList(updatedValues)
    setResult(Calculator.calculate(values))
    setUserData(updatedValues)
    resetForm()
  }

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <ErrorText>{message}</ErrorText>}
      />
    )
  }

  return (
    <div>
      <Button
        className="back"
        onClick={() => {
          toggleUserData()
          toggleMainPage()
        }}
      >
        На главную
      </Button>
      <FormTitle>Введите необходимые данные</FormTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <FormContainer autoComplete="off">
          <FormLabel htmlFor="name">
            Ваше имя
            <div>
              <FormField type="text" name="name" />
              <FormError name="name" />
            </div>
          </FormLabel>
          <FormLabel htmlFor="weight">
            Факт.вес, кг
            <div>
              <FormField type="number" name="weight" />
              <FormError name="weight" component="div" />
            </div>
          </FormLabel>
          <FormLabel htmlFor="height">
            Факт.рост, см
            <div>
              <FormField type="number" name="height" />
              <FormError name="height" component="div" />
            </div>
          </FormLabel>
          <FormLabel htmlFor="age">
            Возраст
            <div>
              <FormField type="number" name="age" />
              <FormError name="age" component="div" />
            </div>
          </FormLabel>
          <FormLabel htmlFor="gender">
            Пол
            <div>
              <FormField type="radio" name="gender" value="male" />
              муж.
              <FormField type="radio" name="gender" value="female" />
              жен.
              <FormError name="gender" component="div" />
            </div>
          </FormLabel>
          <Button type="submit">Рассчитать</Button>

          {result && <Result result={result} userData={userData} />}
        </FormContainer>
      </Formik>
    </div>
  )
}

export default FormData
