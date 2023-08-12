export const styles = (theme) => ({
    primaryButton: {
      backgroundColor: theme.primaryColor,
      borderRadius: 30,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.primaryButtonHoverColor,
      },
    }
  })