import { ActivityIndicator, Pressable, StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { ReactNode } from "react";
import { APP_COLOR } from "@/utils/constant";

const styles = StyleSheet.create({
    btnContainer: {
        borderWidth: 1,
        borderColor: "green",
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        backgroundColor: APP_COLOR.ORANGE
    },
    text: {
        textTransform: "uppercase",

    }
})
interface IProps {
    title: string;
    onPress: () => void;
    textStyle?: StyleProp<TextStyle>;
    pressStyle?: StyleProp<TextStyle>;
    btnStyle?: StyleProp<TextStyle>;
    icons?: ReactNode;
    loading?: boolean
}
const ShareButton = (props: IProps) => {
    const { title, onPress, pressStyle, textStyle, btnStyle, icons, loading = false } = props;
    return (
        <Pressable
            style={({ pressed }) => ([
                {
                    opacity: pressed === true ? 0.5 : 1,
                    alignSelf: "flex-start",
                },
                pressStyle
            ])}
            onPress={onPress}
            disabled={loading}
        >
            <View style={[styles.btnContainer, btnStyle]}>
                {icons}
                <Text style={textStyle}>{title}</Text>
                {loading &&
                    <ActivityIndicator size="small" color="#0000ff" />
                }

            </View>

        </Pressable>
    )
}

export default ShareButton;