export const styles = (theme) => ({
    primaryButton: {
      backgroundColor: theme.backgroundColorSecondary,
      borderRadius: 30,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.primaryButtonHoverColor,
      },
    }
  })