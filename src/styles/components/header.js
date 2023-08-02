export const styles = (theme) => ({
    link: {
      color: theme.secondaryColor,
      fontWeight: 'bold',
      '& :active': {
        color: 'white',
        fontWeight: 'bold',
      },
      marginRight: '10px'
    },
    container: {
        backgroundColor: theme.backgroundColor,
        boxShadow:'rgba(0, 179, 159, 0.2) 0px 10px 25px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem ',
    },
    logo: {
      width: '100px',
      height: '50px'
    },
    menu: {
      listStyle: 'none'
    }
  })