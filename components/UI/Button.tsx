import { ReactNode } from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';

type ButtonProps = {
  children: ReactNode;
  pressHandler: () => void;
};

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, pressHandler } = props;
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={pressHandler}>
        <Text>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.75,
  },
});
