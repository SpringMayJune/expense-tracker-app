import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

const ExpenseSummary = () => {
  return (
    <View style={styles.summaryContainer}>
      <Text style={styles.recentTitle}> Last 7 Days </Text>
      <Text style={styles.expensesAmount}> $33,58</Text>
    </View>
  );
};

export default ExpenseSummary;

const styles = StyleSheet.create({
  summaryContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary100,
    marginVertical: 24,
    marginHorizontal: 32,
  },
  recentTitle: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  expensesAmount: {
    fontWeight: 'bold',
    fontSize: 16,
    color: GlobalStyles.colors.primary400,
  },
});
