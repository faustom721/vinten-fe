import * as React from 'react';
import {
  SimpleForm,
  TextInput,
  RadioButtonGroupInput,
  NumberInput,
} from 'react-admin';
import Button from '@material-ui/core/Button';

export const RegisterClientOrProvider = (registeringClient) => (
  <>
    <SimpleForm>
      <TextInput label='Nombre' source='name' required />
      <NumberInput
        label='Documento de identidad'
        source='identity_document'
        required
      />
      <TextInput label='Email' source='email' />
      <NumberInput label='Teléfono' source='phone' />
      <RadioButtonGroupInput
        label='Tipo'
        source='kind'
        choices={[
          { id: 'person', name: 'Persona' },
          { id: 'company', name: 'Empresa' },
        ]}
        required
      />
    </SimpleForm>
  </>
);
