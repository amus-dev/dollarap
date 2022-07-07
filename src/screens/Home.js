import { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
// Components
import Result from '../components/Result'
// Utils
import { fetchDolar } from '../services/dataDolar'
// Styles
import { styles } from './style'
import { colors } from '../theme/colors'

const Home = () => {
  const [isLoading, setIsLoading] = useState(null)
  const [dolarPrice, setDolarPrice] = useState(null)
  const [montoDollar, setMontoDollar] = useState('')
  const [sale, setSale] = useState('')

  const handleClickCalcular = async () => {
    setIsLoading(true)
    const dataDolar = await fetchDolar()
    setDolarPrice(dataDolar)
    setIsLoading(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcular Oferta</Text>
      <TextInput
        label='Ingrese Precio (USD)'
        activeUnderlineColor={colors.ROSE}
        selectionColor={colors.ROSE}
        theme={{ colors: { text: colors.ROSE, placeholder: colors.GRAY } }}
        underlineColor={colors.GRAY}
        style={styles.input}
        onChangeText={text => setMontoDollar(text)}
        value={montoDollar}
      />
      <TextInput
        label='Ingrese descuento'
        activeUnderlineColor={colors.ROSE}
        selectionColor={colors.ROSE}
        theme={{ colors: { text: colors.ROSE, placeholder: colors.GRAY } }}
        underlineColor={colors.GRAY}
        style={styles.input}
        onChangeText={text => setSale(text)}
        value={sale}
      />
      <Button
        icon='currency-usd'
        mode='contained'
        onPress={handleClickCalcular}
        style={styles.contentButton}
        loading={isLoading}
      >
        Calcular
      </Button>
      {isLoading === false && (
        <Result dolarPrice={dolarPrice.dolar.valor} montoDollar={montoDollar} sale={sale} />
      )}
    </View>
  )
}

export default Home
