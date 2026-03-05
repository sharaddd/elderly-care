import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    Dimensions
} from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, ChevronDown, ArrowRight } from "lucide-react-native";
import { LinearGradient } from 'expo-linear-gradient';
import LogoIcon from "@/components/LogoIcon";

const { width, height } = Dimensions.get('window');

const WelcomeScreen = () => {
    const router = useRouter();
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleProceed = () => {
        // For now, any click on the arrow proceeds to the home tabs
        router.replace("/(tabs)");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={styles.content}
            >
                <LinearGradient
                    colors={['#f8fafc', '#ffffff']}
                    style={styles.logoSection}
                >
                    <View style={styles.logoContainer}>
                        <LogoIcon width={100} height={100} />
                    </View>
                    <Text style={styles.title}>ElderlyCare</Text>
                    <Text style={styles.subtitle}>Compassionate care for your loved ones</Text>
                </LinearGradient>

                <View style={styles.inputSection}>
                    <View style={styles.textContainer}>
                        <Text style={styles.signTitle}>Sign In using your phone number</Text>
                    </View>

                    <View style={styles.inputRow}>
                        <View style={styles.phoneInputBox}>
                            <View style={styles.countryCode}>
                                <Text style={styles.flagEmoji}>🇮🇳</Text>
                                <Text style={styles.plus91}>+91</Text>
                                <ChevronDown size={14} color="#94a3b8" />
                            </View>
                            <TextInput
                                style={styles.textInput}
                                placeholder="Mobile number"
                                placeholderTextColor="#cbd5e1"
                                keyboardType="phone-pad"
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.proceedButton}
                            onPress={handleProceed}
                            activeOpacity={0.8}
                        >
                            <ArrowRight size={24} color="#ffffff" strokeWidth={2.5} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.spacer} />
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            By continuing, you agree to our <Text style={styles.linkText}>Terms</Text> & <Text style={styles.linkText}>Privacy Policy</Text>
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    logoSection: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 32,
    },
    content: {
        flex: 1,
    },
    logoContainer: {
        width: 140,
        height: 140,
        backgroundColor: '#ffffff',
        borderRadius: 32,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 4,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#f1f5f9',
    },
    logoInner: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#3b82f6', // Placeholder color similar to brand
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1e293b',
        letterSpacing: -0.5,
    },
    subtitle: {
        fontSize: 16,
        color: '#64748b',
        marginTop: 6,
        textAlign: 'center',
    },
    inputSection: {
        flex: 1.5,
        padding: 32,
        paddingTop: 45,
        justifyContent: 'flex-start',
    },
    spacer: {
        flex: 1,
    },
    textContainer: {
        marginBottom: 8,
    },
    signTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#334155',
        textAlign: 'left',
    },
    flagEmoji: {
        fontSize: 22,
        marginRight: 4,
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    phoneInputBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f8fafc',
        borderRadius: 20,
        paddingLeft: 12,
        borderWidth: 1,
        borderColor: '#e2e8f0',
        height: 60,
    },
    countryCode: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 8,
        borderRightWidth: 1,
        borderRightColor: '#cbd5e1',
        marginRight: 8,
    },
    countryLabel: {
        fontSize: 11,
        fontWeight: '700',
        color: '#94a3b8',
        marginRight: 4,
    },
    plus91: {
        fontSize: 16,
        fontWeight: '600',
        color: '#475569',
        marginRight: 2,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        color: '#1e293b',
        fontWeight: '500',
    },
    proceedButton: {
        width: 60,
        height: 60,
        backgroundColor: '#0066FF', // Standard primary color
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#0066FF",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.2,
        shadowRadius: 15,
        elevation: 6,
    },
    footer: {
        marginTop: 40,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#94a3b8',
        textAlign: 'center',
        lineHeight: 18,
        maxWidth: 220,
    },
    linkText: {
        color: '#0066FF',
        textDecorationLine: 'underline',
    }
});

export default WelcomeScreen;
