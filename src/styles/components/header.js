export const styles = (theme) => ({
    link: {
      color: theme.secondaryColor,
      fontWeight: 'bold',
      '& :active': {
        color: theme.primaryColor
      }
    },
    container: {
        backgroundColor: theme.primaryColor,
        display: 'flex',
        justifyContent: 'space between',
        padding: '3rem 2rem',
        width: '100%'
    }
  })