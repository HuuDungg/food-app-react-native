import LoadingOverlay from "@/components/loading/overlay";
import { resendCode, verifyCodeApi } from "@/utils/api";
import { APP_COLOR } from "@/utils/constant";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import OTPTextView from 'react-native-otp-textinput';
import Toast from "react-native-root-toast";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 20,
    },
    heading: {
        fontSize: 25,
        fontWeight: "600",
        marginVertical: 20
    }
})
const VerifyPage = () => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const otpRef = useRef(null);
    const params = useLocalSearchParams();
    const [mail, setmail] = useState<string>('');
    const handleVerifyCode = async (email: string, code: string) => {
        try {
            const res = await verifyCodeApi(email, code);
            if (res.data) {
                setIsSubmit(false);
                Toast.show('Verify successfuly',
                    {
                        duration: Toast.durations.LONG,
                        position: Toast.positions.BOTTOM,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        backgroundColor: APP_COLOR.ORANGE,
                        opacity: 1
                    }
                );
                //@ts-ignore:next-line
                otpRef?.current?.clear();
                router.navigate('/(tab)/')
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
                setIsSubmit(false);
            }
        } catch (error) {
            console.log("check error: ", error)
        }
    }
    const handleTextChange = (otp: string) => {
        if (otp && otp.length === 6) {
            setIsSubmit(true);
            Keyboard.dismiss();
            handleVerifyCode(mail, otp);
        }
    }
    const handleResend = async () => {
        try {
            const res = await resendCode(mail)
            if (res.data) {
                Toast.show('Resend code successfuly',
                    {
                        duration: Toast.durations.LONG,
                        position: Toast.positions.BOTTOM,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        backgroundColor: APP_COLOR.ORANGE,
                        opacity: 1
                    }
                );
            } else {
                Toast.show('Something went wrong, try again',
                    {
                        duration: Toast.durations.LONG,
                        position: Toast.positions.BOTTOM,
                        shadow: true,
                        animation: true,
                        hideOnPress: true,
                        delay: 0,
                        backgroundColor: APP_COLOR.ORANGE,
                        opacity: 1
                    }
                );
            }
        } catch (error) {
            console.log("check error: ", error);
        }

    }
    useEffect(() => {
        setmail(params.mail as string);
    }, [])

    return (
        <>
            <View>
                <View style={styles.container}>
                    <Text style={styles.heading}> Xác thực tài khoản</Text>
                    <Text style={{ marginVertical: 10 }}>Vui lòng nhập mã xác nhận đã được gửi tới địa chỉ {mail}</Text>
                    <View style={{ marginVertical: 20 }}>
                        <OTPTextView
                            ref={otpRef}
                            autoFocus={true}
                            inputCount={6}
                            inputCellLength={1}
                            tintColor={APP_COLOR.ORANGE}
                            textInputStyle={{
                                borderWidth: 1,
                                borderColor: APP_COLOR.GREY,
                                borderBottomWidth: 1,
                                borderRadius: 5,
                                // @ts-ignore:next-line
                                color: APP_COLOR.ORANGE
                            }}
                            handleTextChange={handleTextChange}
                        />
                    </View>
                    <View style={{ flexDirection: "row", marginVertical: 10 }}>
                        <Text >Không nhận được mã xác nhận,</Text>
                        <Text onPress={handleResend} style={{ textDecorationLine: 'underline' }}> gửi lại</Text>
                    </View>
                </View>
            </View>
            {isSubmit && <LoadingOverlay />}
        </>
    )
}

export default VerifyPage