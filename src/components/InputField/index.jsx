import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

const InputField = props => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    inputValue: ''
  });

  const handleChange = propName => event => {
    setValues({ ...values, [propName]: event.target.value });
    props.validate(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label={props.label}
        className={classes.textField}
        value={values.inputValue}
        onChange={handleChange('inputValue')}
        margin="normal"
        variant="outlined"
        fullWidth
        type={values.showPassword ? 'text' : props.type}
        InputProps={
          props.InputProps && {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="Toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
        }
        // required
        // error
        helperText="some important text"
      />
    </form>
  );
};

export default InputField;