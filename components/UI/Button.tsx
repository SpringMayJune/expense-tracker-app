import { ReactNode } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

type ButtonProps = {
  children: ReactNode;
  pressHandler: () => void;
  style?: any;
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, pressHandler, style } = props;
  return (
    <View style={[styles.buttonOuterContainer, style]}>
      <Pressable onPress={pressHandler} style={({ pressed }) => pressed && style.pressed}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    width: 180,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary500,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    justifyContent: 'space-between',
  },
});
