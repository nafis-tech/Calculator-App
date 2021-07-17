import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Calculator = () => {
  const [output, setOuput] = useState('')
  const [operation, setOperation] = useState(null)

  const numberPress = (value) => {
    const res = output + value
    setOuput(res)
  }

  const oprPress = (opr) => {
    let res = output
    if (opr === 'plus') {
      res += '+'
      setOperation('+')
    }
    else if (opr === 'minus') {
      res += '-'
      setOperation('-')
    }
    else if (opr === 'divide') {
      res += '/'
      setOperation('/')
    }
    else if (opr === 'times') {
      res += 'x'
      setOperation('x')
    }
    setOuput(res)
  }

  const onReset = () => {
    setOuput('')
  }

  const onResult = () => {
    let breaking = output.split(operation)
    let result = +breaking[0]
    if (operation === '+') {
      result += +breaking[1]
    }
    else if (operation === '-') {
      result -= +breaking[1]
    }
    else if (operation === '/') {
      result /= +breaking[1]
    }
    else if (operation === 'x') {
      result *= +breaking[1]
    }
    setOuput(`${output}=${result}`)
  }

  const onBackspace = () => {
    let res = output.substr(0, output.length - 1)
    setOuput(res)
  }

  const renderBtnOperation = () => {
    const icon = ['plus', 'minus', 'divide', 'times']
    return icon.map((item, index) => {
      return (
        <TouchableOpacity key={index} style={styles.btnOperation} onPress={() => oprPress(item)}>
          <FontAwesome5 name={item} size={40} />
        </TouchableOpacity>
      )
    })
  }

  const renderBtnNumber = () => {
    const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return number.map((item, index) => {
      return (
        <TouchableOpacity key={index} style={styles.btnNumber} onPress={() => numberPress(item)}>
          <Text style={{ fontSize: 30 }}>{item}</Text>
        </TouchableOpacity>
      )
    })
  }

  return (
    <View style={styles.mainCont}>
      <View>
        <Text style={styles.judul}>Calculator</Text>
      </View>
      <View style={styles.output}>
        <Text style={{ fontSize: 40, textAlign: 'right' }}>{output}</Text>
      </View>
      <View style={styles.contButton}>
        <View style={styles.contBtnOperation}>
          {renderBtnOperation()}
          <TouchableOpacity style={styles.btnOperation} onPress={onResult}>
            <FontAwesome5 name="equals" size={40} />
          </TouchableOpacity>
        </View>
        <View style={styles.contBtnNumber}>
          {renderBtnNumber()}
          <TouchableOpacity style={styles.btnNumber} onPress={onReset}>
            <FontAwesome5 name="copyright" size={40} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnNumber} onPress={() => numberPress('0')}>
            <Text style={{ fontSize: 30 }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnNumber} onPress={onBackspace}>
            <FontAwesome5 name="backspace" size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  judul: {
    backgroundColor: '#F3C583',
    fontSize: 25,
    paddingStart: 10,
    color: 'brown'
  },
  mainCont: {
    flex: 1
  },
  output: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingHorizontal: 10
  },
  contButton: {
    backgroundColor: '#E8E46E',
    flex: 2
  },
  contBtnOperation: {
    backgroundColor: '#F98404',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5
  },
  btnOperation: {
    flex: 1,
    backgroundColor: "#F7FD04",
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 20,
    borderRadius: 10
  },
  contBtnNumber: {
    flex: 4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  btnNumber: {
    width: 120,
    height: 83,
    backgroundColor: "#F9B208",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    margin: 5
  }
});

export default Calculator;