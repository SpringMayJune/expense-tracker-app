import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddExpense from './screens/AddExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StackNavigationProp } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

export type RootStackParamList = {
  AddExpense: undefined;
};
type NavigationProp = StackNavigationProp<RootStackParamList, 'AddExpense'>;

const ExpensesOverview = () => {
  const navigation = useNavigation<NavigationProp>();
  const addNewExpense = () => {
    navigation.navigate('AddExpense');
  };
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton icon="add" size={24} color={tintColor} onPressHandler={addNewExpense} />
        ),
      }}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ size, color }) => <Ionicons name="hourglass" size={size} color={color} />,
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ size, color }) => <Ionicons name="calendar" size={size} color={color} />,
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default function App() {
  const TabNavigator = () => {};
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddExpense"
            component={AddExpense}
            options={{
              presentation: 'modal',
              animation: 'slide_from_bottom',
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: 'white',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
