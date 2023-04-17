import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikError } from 'formik';
export const Form = styled(FormikForm)`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ErrorMessage = styled(FormikError)`
  color: tomato;
`;
