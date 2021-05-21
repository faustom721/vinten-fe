import React, { useEffect, useState } from 'react';
import { ROOT } from 'navigation/CONSTANTS';
import {
  Typography,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Button,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { CenteredWrapper } from 'components';
import { userActionCreator } from 'redux/actions/userActions';

const SelectMembership = (props) => {
  useEffect(() => {
    props.getMemberships();
    props.getUserData();
  }, []);

  const [selectedMembership, setSelectedMembership] = useState(1);

  return (
    <CenteredWrapper>
      {/* <Link to={ROOT}>Inicio</Link> */}

      <Grid item>
        <Typography variant='h4'>Hola, {props.user.firstName}.</Typography>
      </Grid>

      <Grid item>
        <FormControl variant='outlined'>
          <InputLabel htmlFor='select'>Selecciona una compañía</InputLabel>
          <Select
            native
            // onChange={handleChange}
            label='Selecciona una compañía'
            // value={props.user.lastUsedCompany || ''}
          >
            {props.user.memberships.map((memb) => (
              <option
                value={memb.company.id}
              >{`${memb.company.name} - (${memb.role})`}</option>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item>
        <Button color='secondary' variant='contained'>
          Continuar <NavigateNextIcon />
        </Button>
      </Grid>
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
