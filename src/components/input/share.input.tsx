import { APP_COLOR } from "@/utils/constant";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput, KeyboardTypeOptions } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const styles = StyleSheet.create({
    inputGroup: {
        padding: 5,
        gap: 10
    },

    text: {
        fontSize: 18,
    },
    input: {
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
    },
    eye: {
        position: 'absolute',
        right: 10,
        top: 10
    }
})

interface IProps {
    title?: string;
    keyboardType?: KeyboardTypeOptions,
    secureTextEntry?: boolean
}
const ShareInput = (props: IProps) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const { title, keyboardType, secureTextEntry = false } = props;
    const [showEye, setShowEye] = useState<boolean>(secureTextEntry)

    return (
        <View style={styles.inputGroup}>
            {title && <Text style={styles.text}>{title}</Text>}
            <View style={{
                position: 'relative'
            }}>
                <TextInput
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    keyboardType={keyboardType}
                    style={[styles.input,
                    { borderColor: isFocus ? APP_COLOR.ORANGE : APP_COLOR.GREY }
                    ]}
                    secureTextEntry={showEye}
                />
                {
                    secureTextEntry ?
                        showEye ?
                            <FontAwesome5
                                style={styles.eye}
                                name="eye"
                                size={20}
                                color="black"
                                onPress={() => {
                                    setShowEye(false)
                                }}
                            />
                            :
                            <FontAwesome5
                                style={styles.eye}
                                name="eye-slash"
                                size={20}
                                color="black"
                                onPress={() => {
                                    setShowEye(true)
                                }}
                            />

                        :
                        <></>

                }

            </View>

        </View>
    )
}

export default ShareInput;