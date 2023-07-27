export const styles = (theme) => ({
    link: {
      color: theme.secondaryColor,
      fontWeight: 'bold',
      '& :active': {
        color: 'white',
        fontWeight: 'bold',
      }
    },
    container: {
        backgroundColor: theme.primaryColor,
        display: 'flex',
        justifyContent: 'space between',
        padding: '2rem',
        width: '100%'
    }
  })