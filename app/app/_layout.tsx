import { Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default () => {
	return (
		<Tabs>
			<Tabs.Screen
				name="home"
				options={{
					tabBarLabel: 'Home',
					headerTitle: 'HOME',
					tabBarIcon: ({ color, size }) => <FontAwesome5 name="home" size={size} color={color} />
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					tabBarLabel: 'Account',
					headerTitle: 'Profile',
					tabBarIcon: ({ color, size }) => <FontAwesome5 name="user" size={size} color={color} />
				}}
			/>

<Tabs.Screen
	name="list"
	options={{
		tabBarLabel: 'News',
		headerShown: false,
		tabBarIcon: ({ color, size }) => <FontAwesome5 name="newspaper" size={size} color={color} />
	}}
/>







<Tabs.Screen
	name="DonateScreen"
	options={{
		tabBarLabel: 'Donate',
		headerShown: false,
		tabBarIcon: ({ color, size }) => <FontAwesome5 name="donate" size={size} color={color} />
	}}
/>

<Tabs.Screen
	name="CharitiesScreen"
	options={{
		tabBarLabel: 'List of Campaigns',
		headerShown: false,
		tabBarIcon: ({ color, size }) => <FontAwesome5 name="list-alt" size={size} color={color} />
	}}
/>

<Tabs.Screen
				name="Health"
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => <FontAwesome5 name="medkit" size={size} color={color} />
				}}
			/>

<Tabs.Screen
				name="Education"
				options={{
					headerShown: false,
					tabBarIcon: ({ color, size }) => <FontAwesome5 name="graduation-cap" size={size} color={color} />
				}}
			/>





		</Tabs>


	);
};