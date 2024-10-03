import ShareButton from "@/components/button/share.button"
import ShareInput from "@/components/input/share.input"
import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import fb from '@/assets/auth/facebook.png';
import gg from '@/assets/auth/google.png';
import { Link } from "expo-router";
import { useState } from "react";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 30
    },
    inputGroup: {
        marginHorizontal: 20,
        gap: 15
    },
    text: {
        color: 'gray',
        fontSize: 20
    },
    input: {
        borderBlockColor: 'gray',
        borderWidth: 1,
        paddingVertical: 15,
        borderRadius: 10
    },
    btnContainer: {
        flex: 0.4,
        alignItems: 'center',
        alignSelf: 'stretch',
        gap: 30,
    },
    btnContent: {
        padding: 20,
        borderRadius: 20,
        flexDirection: 'row',
        gap: 20
    }
})
const SignupPage = () => {
    const [userName, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignUp = () => {
        setEmail('');
        setUsername('');
        setPassword("");
        alert("check data")
    }
    return (
        <SafeAreaView style={
            {
                flex: 1
            }
        }>
            <View style={styles.container}>
                <View style={
                    {
                        marginLeft: 30,
                        marginTop: 20
                    }
                }>
                    <Text
                        style={{
                            fontSize: 30
                        }}
                    >Sign Up</Text>
                </View>
                <View style={styles.inputGroup}>
                    <ShareInput
                        title="User name"
                        value={userName}
                        setValue={setUsername}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <ShareInput
                        title="Email"
                        keyboardType="email-address"
                        value={email}
                        setValue={setEmail}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <ShareInput
                        secureTextEntry={true}
                        title="Password"
                        value={password}
                        setValue={setPassword}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: "center"
                }}>
                    <ShareButton
                        title="Sign Up"
                        onPress={() => {
                            handleSignUp()
                        }}
                        btnStyle={{
                            borderWidth: 0,
                            paddingHorizontal: 60,
                            paddingVertical: 20,
                            borderRadius: 30
                        }}
                        textStyle={{
                            color: 'white'
                        }}

                    />
                </View>
                <View style={{
                    alignItems: "center"
                }}>
                    <Text style={{
                        color: 'gray'
                    }}>Aready have an account? {' '}
                        <Link style={{
                            textDecorationLine: 'underline'
                        }} href={'/'}>Sign in</Link>
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <View
                        style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1,
                            paddingHorizontal: 50
                        }}
                    />
                    <Text
                        style={{
                            position: 'relative',
                            top: 10,
                            color: 'gray',
                            marginHorizontal: 10
                        }}
                    >Sign in with</Text>
                    <View
                        style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1,
                            paddingHorizontal: 50
                        }}
                    />
                </View>
                <View style={styles.btnContainer}>
                    <View>
                        <View style={styles.btnContent}>
                            <ShareButton
                                title="facebook"
                                onPress={() => {
                                    alert("hihi")
                                }}
                                textStyle={{
                                    textTransform: 'uppercase'
                                }}
                                pressStyle={
                                    {
                                        alignSelf: 'flex-start'
                                    }
                                }
                                btnStyle={
                                    {
                                        justifyContent: 'center',
                                        borderRadius: 100,
                                        backgroundColor: 'white',
                                        borderColor: 'white',
                                        borderWidth: 1
                                    }
                                }
                                icons={
                                    <Image source={fb} />
                                }
                            />
                            <ShareButton
                                title="Google"
                                onPress={() => {
                                    alert("hihi")
                                }}
                                textStyle={{
                                    textTransform: 'uppercase'
                                }}
                                pressStyle={
                                    {
                                        alignSelf: 'flex-start',

                                    }
                                }
                                btnStyle={
                                    {
                                        justifyContent: 'center',
                                        borderRadius: 100,
                                        backgroundColor: 'white',
                                        borderColor: 'white',
                                        borderWidth: 1

                                    }
                                }
                                icons={
                                    <Image source={gg} />
                                }
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            justifyContent: "center"
                        }}
                    >
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignupPage