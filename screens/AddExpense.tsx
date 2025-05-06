import { Pressable, Text, View, StyleSheet } from 'react-native';
import Button from '../components/UI/Button';
import { GlobalStyles } from '../constants/styles';

const ManageExpense = () => {
  const addExpense = () => {
    console.log('hello');
  };

  const cancelAddExpense = () => {
    console.log('hello');
  };
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button
          pressHandler={cancelAddExpense}
          style={{
            opacity: 0.5,
            pressed: {
              opacity: 0,
            },
          }}
        >
          Cancel
        </Button>
        <Button
          pressHandler={addExpense}
          style={{
            pressed: {
              opacity: 0.75,
            },
          }}
        >
          {' '}
          Add{' '}
        </Button>
      </View>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginVertical: 48,
  },
});
