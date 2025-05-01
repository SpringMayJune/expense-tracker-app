import { View, Text, StyleSheet } from 'react-native';
import ExpenseSummary from '../components/ExpenseSummary/ExpenseSummary';
import { GlobalStyles } from '../constants/styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const RecentExpenses = () => {
  return (
    <View style={styles.container}>
      <View>
        <ExpenseSummary />
      </View>
      <View>
        <Text>List of Items</Text>
      </View>
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
