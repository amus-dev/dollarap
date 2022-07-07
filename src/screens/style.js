import { StyleSheet } from 'react-native'
import { colors } from '../theme/colors'

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: colors.WHITE,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  title: {
    color: colors.ROSE,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20,
  },
  input: {
    backgroundColor: 'transparent',
  },
  contentButton: {
    backgroundColor: colors.ROSE,
    marginVertical: 20,
  },
})
