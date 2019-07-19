import React from "react"

// nodejs library that concatenates classes
import className from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import customInputStyle from "./styles"

function CustomInput({ ...props }) {
  const {
    classes,
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
    errors,
    onChange,
    value,
    name,
  } = props

  const labelClasses = className({
    [" " + classes.labelRootError]: error,
    [" " + classes.labelRootSuccess]: success && !error,
  })
  const underlineClasses = className({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  })
  const marginTop = className({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  })
  const inputClasses = className({
    [classes.input]: true,
    [classes.whiteInput]: white,
  })
  var formControlClasses
  if (formControlProps !== undefined) {
    formControlClasses = className(
      formControlProps.className,
      classes.formControl
    )
  } else {
    formControlClasses = classes.formControl
  }
  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={classes.labelRoot + " " + labelClasses}
          htmlFor={id}
          {...labelProps}
        >
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        onChange={onChange}
        name={name}
        value={value}
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      />
      <ul
        style={{ padding: 0, margin: 0, marginTop: 10, listStyleType: "none" }}
      >
        {errors &&
          errors.map(message => (
            <li key={message}>
              <p style={{ color: "red", margin: 0 }}>{message}</p>
            </li>
          ))}
      </ul>
    </FormControl>
  )
}

export default withStyles(customInputStyle)(CustomInput)