import styled from "styled-components";
import { Field as FormikField, ErrorMessage as FormikError} from 'formik';

export const Field = styled(FormikField)`
    position: relative;
    outline: none;
    border: 1px solid #bbb4b4;
    width: 270px;
    padding: 1.5px;
    box-shadow: rgba(0, 0, 0, 0.06) 1px 2px 15px 1px;
    line-height: 25px;
    
    placeholder {
        font: inherit;
        font-size: 18px;    
    }
`;
export const ErrorMessage = styled(FormikError)`
    position: absolute;
    display: block;
    margin-right: 15px;
    width: 170px;
    text-align: end;
    color: tomato;
`

export const Btn = styled.button`
    padding: 5px 10px;
    margin-left: -1px;
`