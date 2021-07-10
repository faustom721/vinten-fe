import * as React from 'react';
import { Card, CardContent, CardHeader, Grid } from '@material-ui/core';

import { RegisterClient } from '../components/RegisterClient';

export default () => (
  <>
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Card>
          <CardHeader title='vinten dashboard' />
          <CardContent>ssss</CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='Registrar nuevo cliente' />
          <CardContent>
            <RegisterClient />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardHeader title='vinten dashboard' />
          <CardContent>ssss</CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card>
          <CardHeader title='vinten dashboard' />
          <CardContent>ssss</CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card>
          <CardHeader title='vinten dashboard' />
          <CardContent>ssss</CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card>
          <CardHeader title='vinten dashboard' />
          <CardContent>ssss</CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card>
          <CardHeader title='vinten dashboard' />
          <CardContent>ssss</CardContent>
        </Card>
      </Grid>
    </Grid>
  </>
);
