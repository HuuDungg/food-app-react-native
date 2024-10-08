import ShareButton from "@/components/button/share.button"
import ShareInput from "@/components/input/share.input"
import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import fb from '@/assets/auth/facebook.png';
import gg from '@/assets/auth/google.png';
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import { registerApi } from "@/utils/api";
import Toast from 'react-native-root-toast';
import { APP_COLOR } from "@/utils/constant";
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
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
    }, [])
    const clearData = () => {
        setEmail('');
        setName('');
        setPassword("");
    }
    const handleSignUp = async () => {
        try {
            setIsLoading(true)
            const res = await registerApi(email, password, name);
            if (res.data) {
                router.push({ pathname: '/(auth)/verify', params: { mail: email } })
            } else {
                Toast.show(Array.isArray(res.message) ? res.message[0] : res.message, {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.BOTTOM,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0,
                    backgroundColor: APP_COLOR.ORANGE,
                    opacity: 1
                });
            }
            setIsLoading(false)
        } catch (error) {
            console.log(">>> check error: ", error)
        }

    }
    return (

        <View style={styles.container}>

            <View style={
                {
                    marginLeft: 30,
                    marginTop: 20
                }
            }>
                <Ionicons
                    name="chevron-back"
                    size={24}
                    color="black"
                    style={{
                        borderWidth: 1,
                        alignSelf: 'flex-start',
                        borderRadius: 10,
                        padding: 7,
                        marginVertical: 20,
                        backgroundColor: 'white'
                    }}
                    onPress={() => {
                        router.navigate('/')
                    }}
                />
                <Text
                    style={{
                        fontSize: 30
                    }}
                >Sign Up</Text>
            </View>
            <View style={styles.inputGroup}>
                <ShareInput
                    title="User name"
                    value={name}
                    setValue={setName}
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
                    loading={isLoading}

                />
            </View>
            <View style={{
                alignItems: "center"
            }}>
                <Text style={{
                    color: 'gray'
                }}>Already have an account? {' '}
                    <Link style={{
                        textDecorationLine: 'underline',
                        color: APP_COLOR.ORANGE
                    }} href={'/(auth)/login'}>Sign in</Link>
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

    )
}

export default SignupPage