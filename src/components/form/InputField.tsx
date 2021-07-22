import styled from "styled-components";
import { Field, FormikErrors, FormikTouched } from "formik";

const InputWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas: "Label" "Input" "ErrorMessage";
`;

const LabelStyled = styled.label`
  grid-area: Label;
  margin: 0.5em 0;
`;

const InputStyled = styled(Field)`
  grid-area: Input;
  border: 1px solid #85858530;
  border-radius: 0.5em;
  min-height: 2em;
  padding: 0.5em;

  &::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }
  &:focus {
    border-radius: 8px;
    outline-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ErrorMessage = styled.p`
  // NOTE: to prevent layout glitches when no errors
  min-height: 1.5em;
  grid-area: ErrorMessage;
  color: red;
  font-size: 0.75rem;
  margin-top: 0.25em;
`;

type Props = {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  touched?: boolean | FormikTouched<unknown> | FormikTouched<unknown>[];
  error?: string | string[] | FormikErrors<unknown> | FormikErrors<unknown>[];
};

export default function InputField({
  label,
  name,
  type,
  placeholder,
  touched,
  error,
}: Props) {
  return (
    <InputWrapper>
      {label && <LabelStyled htmlFor={name}>{label}</LabelStyled>}

      <InputStyled name={name} type={type} placeholder={placeholder} />

      <ErrorMessage>{touched && error}</ErrorMessage>
    </InputWrapper>
  );
}
