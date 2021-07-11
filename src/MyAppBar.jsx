// in src/MyAppBar.js
import * as React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const MyAppBar = (props) => {
  const useStyles = makeStyles({
    title: {
      flex: 1,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    spacer: {
      flex: 1,
    },
    select: {
      color: 'white',
      fontSize: '24px',
    },
  });
  const classes = useStyles();

  const handleCompanyChange = (event) => {
    console.log('cambió la company', event.target.value);
  };

  return (
    <AppBar {...props}>
      <Typography
        variant='h6'
        color='inherit'
        className={classes.title}
        id='react-admin-title'
      />
      <Select
        value={10}
        className={classes.select}
        disableUnderline
        onChange={handleCompanyChange}
      >
        <MenuItem value={10}>Company 1</MenuItem>
        <MenuItem value={20}>Company 2</MenuItem>
        <MenuItem value={30}>Company 3</MenuItem>
      </Select>
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default MyAppBar;
