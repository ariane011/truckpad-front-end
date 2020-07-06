import React from "react";
import {Form, FormGroup, Label, Input, Container, CustomInput, Button } from 'reactstrap';

const FormInput = ({
  label,
  id,
  placeholder,
  inputType,
  value,
  name,
  handleChange
}) => {
  const handleInputChange = e => {
    handleChange(e.target.name, e.target.value);
  };
  return (
      <FormGroup>
        <Label>{label}</Label>
        <Input 
          id={id}
          placeholder={placeholder}
          type={inputType} 
          value={value}
          name={name} 
          onChange={handleInputChange}/>
    </FormGroup>
  );
};

export default FormInput;
