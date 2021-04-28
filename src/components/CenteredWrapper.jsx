import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Container } from '@material-ui/core';

export const CenteredWrapper = ({ children }) => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '35px',
    },
  }));

  const styles = useStyles();

  return (
    <Container maxWidth='xs'>
      <Box alignItems='center' minHeight='80vh' display='flex'>
        <Paper elevation={2} className={styles.paper}>
          {children}
        </Paper>
      </Box>
    </Container>
  );
};
