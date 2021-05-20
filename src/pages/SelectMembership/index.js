import React, { useEffect, useState } from 'react';
import { ROOT } from 'navigation/CONSTANTS';
import { Typography, Select, FormControl, InputLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { CenteredWrapper } from 'components';
import { userActionCreator } from 'redux/actions/userActions';

const SelectMembership = (props) => {
  useEffect(() => {
    props.getMemberships();
    props.getUserData();
  }, []);

  return (
    <CenteredWrapper>
      <Link to={ROOT}>Inicio</Link>

      <Typography variant='h4'>Hola, {props.user.firstName}.</Typography>
      <FormControl variant='outlined'>
        <InputLabel htmlFor='select'>Selecciona una compañía</InputLabel>
        <Select
          native
          // onChange={handleChange}
          label='Selecciona una compañía'
        >
          {props.user.memberships.map((memb) => (
            <option
              value={memb.company.id}
            >{`${memb.company.name} - (${memb.role})`}</option>
          ))}
        </Select>
      </FormControl>
    </CenteredWrapper>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...userActionCreator(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectMembership);
