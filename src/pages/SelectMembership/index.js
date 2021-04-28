import React, { useEffect, useState } from 'react';
import { ROOT } from 'navigation/CONSTANTS';
import { Typography, Select, FormControl, InputLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { CenteredWrapper } from 'components';
import { userActionCreator } from 'redux/actions/userActions';

const SelectMembership = (props) => {
  const [memberships, setMemberships] = useState(null);
  useEffect(() => {
    setMemberships(props.getMemberships());
  }, []);

  return (
    <CenteredWrapper>
      <Link to={ROOT}>Inicio</Link>

      <Typography variant='h4'>Hola, {props.user.firstName}.</Typography>
      <FormControl variant='outlined'>
        <InputLabel htmlFor='select'>Selecciona una compañía</InputLabel>
        <Select
          native
          // value={state.age}
          // onChange={handleChange}
          label='Selecciona una compañía'
          inputProps={{
            name: 'age',
            id: 'select',
          }}
        >
          <option aria-label='None' value='' />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
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
