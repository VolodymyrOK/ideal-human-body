import { ErrorMessage, Formik } from 'formik'
import { format } from 'date-fns'
import Result from '../Result'
import {
  DivContainer,
  ErrorText,
  FormContainer,
  FormField,
  FormLabel,
  FormTitle,
} from './EnterUserData.styled'
import '../../index.css'
import * as yup from 'yup'
import { USER_DATA } from '../../constans'
import { useEffect, useState } from 'react'
import Calculator from '../Calculator/Calculator'
import Button from '../Button'
import { nanoid } from 'nanoid'
import useLocaleStorage from '../../hooks/useLocalStorage'
import GetDataLanguage from '../../hooks/GetDataLanguage'

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

const EnterUserData = ({ lang }) => {
  const [dataUsersLS, setDataUsersLS] = useLocaleStorage(USER_DATA, [])
  const [userData, setUserData] = useState(null)
  const [result, setResult] = useState()

  useEffect(() => {
    // console.log('dataUsers updated:', dataUsersLS)
  }, [dataUsersLS])

  useEffect(() => {
    // console.log('userData has been updated:', userData)
  }, [userData])

  const handleSubmit = (values, { resetForm }) => {
    const date = format(new Date(), 'dd-MM-yyyy')
    const time = format(new Date(), 'HH-mm-ss')
    const updatedValues = { ...values, id: nanoid(), date, time }
    setDataUsersLS((prevData) => [...prevData, updatedValues])

    setResult(Calculator.calculate(updatedValues))
    setUserData(updatedValues)
    resetForm()
  }

  const handleReturn = () => {
    setUserData(null)
  }

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={(message) => <ErrorText>{message}</ErrorText>}
      />
    )
  }

  const {
    formTitle,
    formName,
    formWeight,
    formHeight,
    formAge,
    formGender,
    formMale,
    formFemale,
    formSubmit,
  } = GetDataLanguage(lang) || {}

  return (
    <DivContainer>
      {!userData && (
        <>
          <FormTitle>{formTitle}</FormTitle>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={userSchema}
          >
            <FormContainer autoComplete="off">
              <FormLabel htmlFor="name">
                {formName}
                <div>
                  <FormField type="text" name="name" />
                  <FormError name="name" />
                </div>
              </FormLabel>
              <FormLabel htmlFor="weight">
                {formWeight}
                <div>
                  <FormField type="number" name="weight" />
                  <FormError name="weight" component="div" />
                </div>
              </FormLabel>
              <FormLabel htmlFor="height">
                {formHeight}
                <div>
                  <FormField type="number" name="height" />
                  <FormError name="height" component="div" />
                </div>
              </FormLabel>
              <FormLabel htmlFor="age">
                {formAge}
                <div>
                  <FormField type="number" name="age" />
                  <FormError name="age" component="div" />
                </div>
              </FormLabel>
              <FormLabel htmlFor="gender">
                {formGender}
                <div>
                  <FormField type="radio" name="gender" value="male" />
                  {formMale}
                  <FormField type="radio" name="gender" value="female" />
                  {formFemale}.
                  <FormError name="gender" component="div" />
                </div>
              </FormLabel>
              <Button type="submit">{formSubmit}</Button>
            </FormContainer>
          </Formik>
        </>
      )}
      {result && userData && (
        <Result
          lang={lang}
          result={result}
          userData={userData}
          returnEnterData={handleReturn}
        />
      )}
    </DivContainer>
  )
}

export default EnterUserData
