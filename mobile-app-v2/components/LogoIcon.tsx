import React from "react";
import Svg, { G, Path, Circle, SvgProps } from "react-native-svg";

const LogoIcon = (props: SvgProps) => {
    return (
        <Svg
            viewBox="0 0 100 100"
            fill="none"
            {...props}
        >
            <G transform="translate(50, 50)">
                {/* Unit 1: Top (Reddish/Orange) */}
                <G rotation={0}>
                    <Path d="M0 0 L-18 -38 C-10 -42 -2 -35 0 -28 C2 -35 10 -42 18 -38 L0 0Z" fill="#F49553" />
                    <Path d="M0 0 L-18 -38 C-12 -42 -4 -38 0 -28 Z" fill="#F5A367" />
                    <Path d="M0 0 L18 -38 C12 -42 4 -38 0 -28 Z" fill="#ED8956" />
                    <Circle cx="0" cy="-45" r="7" fill="#F49553" />
                </G>

                {/* Unit 2: Top Right (Yellow) */}
                <G rotation={60}>
                    <Path d="M0 0 L-18 -38 C-10 -42 -2 -35 0 -28 C2 -35 10 -42 18 -38 L0 0Z" fill="#ECC465" />
                    <Path d="M0 0 L-18 -38 C-12 -42 -4 -38 0 -28 Z" fill="#F6D683" />
                    <Path d="M0 0 L18 -38 C12 -42 4 -38 0 -28 Z" fill="#ECC26A" />
                    <Circle cx="0" cy="-45" r="7" fill="#ECC465" />
                </G>

                {/* Unit 3: Bottom Right (Light Green) */}
                <G rotation={120}>
                    <Path d="M0 0 L-18 -38 C-10 -42 -2 -35 0 -28 C2 -35 10 -42 18 -38 L0 0Z" fill="#AFC493" />
                    <Path d="M0 0 L-18 -38 C-12 -42 -4 -38 0 -28 Z" fill="#BDD0A2" />
                    <Path d="M0 0 L18 -38 C12 -42 4 -38 0 -28 Z" fill="#AFC493" />
                    <Circle cx="0" cy="-45" r="7" fill="#AFC493" />
                </G>

                {/* Unit 4: Bottom (Dark Green) */}
                <G rotation={180}>
                    <Path d="M0 0 L-18 -38 C-10 -42 -2 -35 0 -28 C2 -35 10 -42 18 -38 L0 0Z" fill="#4B8164" />
                    <Path d="M0 0 L-18 -38 C-12 -42 -4 -38 0 -28 Z" fill="#6E9E82" />
                    <Path d="M0 0 L18 -38 C12 -42 4 -38 0 -28 Z" fill="#52866D" />
                    <Circle cx="0" cy="-45" r="7" fill="#4B8164" />
                </G>

                {/* Unit 5: Bottom Left (Brown/Tan) */}
                <G rotation={240}>
                    <Path d="M0 0 L-18 -38 C-10 -42 -2 -35 0 -28 C2 -35 10 -42 18 -38 L0 0Z" fill="#AF8255" />
                    <Path d="M0 0 L-18 -38 C-12 -42 -4 -38 0 -28 Z" fill="#D59F67" />
                    <Path d="M0 0 L18 -38 C12 -42 4 -38 0 -28 Z" fill="#C08B5B" />
                    <Circle cx="0" cy="-45" r="7" fill="#AF8255" />
                </G>

                {/* Unit 6: Top Left (Coral) */}
                <G rotation={300}>
                    <Path d="M0 0 L-18 -38 C-10 -42 -2 -35 0 -28 C2 -35 10 -42 18 -38 L0 0Z" fill="#D38666" />
                    <Path d="M0 0 L-18 -38 C-12 -42 -4 -38 0 -28 Z" fill="#EA967A" />
                    <Path d="M0 0 L18 -38 C12 -42 4 -38 0 -28 Z" fill="#D38666" />
                    <Circle cx="0" cy="-45" r="7" fill="#D38666" />
                </G>
            </G>
        </Svg>
    );
};

export default LogoIcon;
