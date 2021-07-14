import * as React from 'react';
import { AppBar, useQueryWithStore, Loading } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useEffect, useState } from 'react';

const MyAppBar = (props) => {
  return <AppBarContainer {...props} />;
};

const AppBarContainer = (props) => {
  const { loaded, error, data } = useQueryWithStore({
    type: 'simpleGet',
    resource: 'memberships',
  });

  if (!loaded) return <Loading />;
  if (!data) return null;

  const lastUsedMembership = data.filter(
    (membership) => membership.last_used === true
  )[0];

  return (
    <AppBarContent
      {...props}
      memberships={data}
      last_used_membership={lastUsedMembership}
    />
  );
};

const AppBarContent = (props) => {
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

  const [selectedMembership, setSelectedMembership] = useState(null);

  useEffect(() => {
    setSelectedMembership(props.last_used_membership.id);
  }, []);

  const handleCompanyChange = (event) => {
    setSelectedMembership(event.target.value);
    localStorage.setItem('selected_membership_id', event.target.value);
    // TODO send backend request to notify this is the new last_used membership
  };

  return (
    <AppBar {...props}>
      <Typography
        color='inherit'
        className={classes.title}
        id='react-admin-title'
      />
      {selectedMembership && (
        <Select
          value={selectedMembership}
          className={classes.select}
          onChange={handleCompanyChange}
          disableUnderline
        >
          {props.memberships.map((membership) => (
            <MenuItem value={membership.id} key={membership.id}>
              {membership.company.name}
            </MenuItem>
          ))}
        </Select>
      )}{' '}
      <Typography className={classes.role}>
        {selectedMembership &&
          // the selected membership role
          props.memberships.filter(
            (membership) => membership.id === selectedMembership
          )[0].role}
      </Typography>
      <span className={classes.spacer} />
    </AppBar>
  );
};

export default MyAppBar;
