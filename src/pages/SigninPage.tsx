import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Formik, Form } from "formik";
import InputField from "../components/form/InputField";
import { SigninValidationSchema } from "../components/form/validationSchemas/SigninValidationSchema";
import Spacer from "../components/Spacer";
import HeticLogo from "../assets/svg/HeticLogo";
import fetchUserLogin from "../common/fetch/fetchUserLogin";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormStyled = styled(Form)`
  margin-top: 3em;
  width: 80%;
  max-width: 28em;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: 0;
  border-radius: 0.5em;
  padding: 1em;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

type FormValues = {
  email: string;
  password: string;
};

export default function SigninPage() {
  const router = useHistory();
  const [errorFailedMessage, setErrorFailedMessage] = useState<string>("");

  async function handleSubmit(values: FormValues) {
    const body = {
      email: values.email,
      password: values.password,
    };

    await fetchUserLogin(body);

    if (localStorage.getItem("userToken")) {
      router.push("/");
    } else {
      setErrorFailedMessage("Les identifiants sont incorrectes");
    }
  }

  return (
    <Container>
      <HeticLogo />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={SigninValidationSchema}
      >
        {({ errors, touched }) => (
          <FormStyled>
            <InputField
              label="Adresse e-mail*"
              type="email"
              name="email"
              touched={touched.email}
              error={errors.email}
            />

            <Spacer axis="vertical" size={1} />

            <InputField
              label="Mot de passe*"
              type="password"
              name="password"
              touched={touched.password}
              error={errors.password}
            />

            <Spacer axis="vertical" size={2} />

            <SubmitButton type="submit">Se connecter</SubmitButton>
          </FormStyled>
        )}
      </Formik>

      {errorFailedMessage && (
        <>
          <Spacer axis="vertical" size={1} />
          <p>{errorFailedMessage}</p>
        </>
      )}
    </Container>
  );
}
