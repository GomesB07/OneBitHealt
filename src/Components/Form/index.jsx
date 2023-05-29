import React, {useState} from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc";

export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState('Preencha o Peso e Altura')
    const [imc, setImc] = useState()
    const [textButton, setTextButton] = useState('Calcular')

    const imcCalculator = () => {
        return setImc(
            (
              (weight.replace(",", ".") * 1) /
              (height.replace(",", ".") * 1 * (height.replace(",", ".") * 1))
            ).toFixed(2)
          );
    }

    const validationImc = () => {
       if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular Novamente")
        return
       }
       setImc(null)
       setTextButton("Calcular")
       setMessageImc("Preencha o Peso e Altura")
    }


    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput onChangeText={setHeight} value={height} placeholder="Ex. 1.75" keyboardType="numeric" />
                <Text>Peso</Text>
                <TextInput onChangeText={setWeight} value={weight} placeholder="Ex. 75.365" keyboardType="numeric" />
                <Button title={textButton} onPress={() => validationImc()} />
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    )
}