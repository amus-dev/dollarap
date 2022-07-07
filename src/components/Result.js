import { StyleSheet, Text, View } from 'react-native'
import { priceCLP, priceSale } from '../utils/formatters'

// Styles
import { colors } from '../theme/colors'
const Result = ({ dolarPrice, montoDollar, sale }) => {
  return (
    <View>
      <Text style={styles.label}>
        Monto en CLP: <Text style={styles.value}>${priceCLP(dolarPrice, montoDollar)}</Text>
      </Text>
      <Text>
        Total en CLP + Descuento:{' '}
        <Text style={styles.value}>${priceSale(dolarPrice, montoDollar, sale)}</Text>
      </Text>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: colors.DARK,
  },
  value: {
    fontSize: 16,
    color: colors.DARK,
    fontWeight: 'bold',
  },
})
