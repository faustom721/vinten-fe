// in src/MyAppBar.js
import * as React from 'react';
import {
  AppBar,
  useQuery,
  useQueryWithStore,
  Loading,
  Error,
  useNotify,
  useRedirect,
  fetchStart,
  fetchEnd,
} from 'react-admin';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useEffect, useState } from 'react';

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
    role: {
      fontSize: '14px',
    },
  });
  const classes = useStyles();

  const handleCompanyChange = (event) => {
    console.log('cambió la company', event.target.value);
  };

  const { data, loading, error } = useQuery({
    type: 'getListSimple',
    resource: 'memberships',
  });

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;

  return (
    <AppBar {...props}>
      <Typography
        color='inherit'
        className={classes.title}
        id='react-admin-title'
      />
      <Select
        value={10}
        className={classes.select}
        onChange={handleCompanyChange}
        disableUnderline
      >
        <MenuItem value={10}>Company 1</MenuItem>
        <MenuItem value={20}>Company 2</MenuItem>
        <MenuItem value={30}>Company 3</MenuItem>
      </Select>{' '}
      <Typography className={classes.role}>(Gerente)</Typography>
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default MyAppBar;
