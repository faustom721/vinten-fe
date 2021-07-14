// in src/MyAppBar.js
import * as React from 'react';
import { AppBar, useQueryWithStore, Loading, Error } from 'react-admin';
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

  // const [lastUsedMembership, setLastUsedMembership] = useState(null);
  // const [memberships, setMemberships] = useState([]);

  const { loaded, error, data } = useQueryWithStore({
    type: 'simpleGet',
    resource: 'memberships',
  });

  // setMemberships(data);

  // useEffect(() => {
  //   setLastUsedMembership(
  //     memberships.filter((membership) => membership.last_used === true)
  //   );

  //   console.log('mmmmmmmmmmmmmeeeeeeeeeeem');
  //   console.log(data);
  //   console.log(memberships);
  //   console.log(lastUsedMembership);
  // }, [memberships]);

  if (!loaded) return <Loading />;
  if (error) return <Error />;
  if (!data) return null;

  const lastUsedMembership = data.filter(
    (membership) => membership.last_used === true
  )[0];

  return (
    <AppBar {...props}>
      <Typography
        color='inherit'
        className={classes.title}
        id='react-admin-title'
      />
      {lastUsedMembership && (
        <Select
          value={lastUsedMembership.id}
          className={classes.select}
          onChange={handleCompanyChange}
          disableUnderline
        >
          {data.map((membership) => (
            <MenuItem value={membership.id} key={membership.id}>
              {membership.company.name}
            </MenuItem>
          ))}
        </Select>
      )}{' '}
      <Typography className={classes.role}>(Gerente)</Typography>
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default MyAppBar;
