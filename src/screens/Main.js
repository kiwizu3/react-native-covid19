import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { SummaryText } from '../components';

import { backgroundColor, primaryColor } from '../const';

export default function Main() {
	chartConfig = {
		backgroundColor: "#e26a00",
		backgroundGradientFrom: "#fb8c00",
		backgroundGradientTo: "#ffa726",
		decimalPlaces: 2, // optional, defaults to 2dp
		color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
		style: {
			borderRadius: 16
		},
		propsForDots: {
			r: "6",
			strokeWidth: "2",
			stroke: "#ffa726"
		}
	}

	const data = [
		{
			name: "Confirmed",
			population: 102170,
			color: "#F2B900",

		},
		{
			name: "Recovered",
			population: 57376,
			color: "#00CC99",
		},
		{
			name: "Deaths",
			population: 3491,
			color: "#F76353",
		},
	];
	return (
		<>
			<StatusBar backgroundColor={backgroundColor} />
			<View style={styles.container}>
				<View style={{ margin: 20 }}>
					<Image source={{ uri: 'https://via.placeholder.com/50x100' }} style={{ height: 50, width: 100, }} />
				</View>
				<View style={styles.summaryCard}>
					<View>
						<SummaryText text="102,170" subText="Confirmed" />
						<SummaryText text="57,376" subText="Recovered" />
						<SummaryText text="3,491" subText="Deaths" />
					</View>
					<View>
						<PieChart
							data={data}
							width={300}
							height={220}
							chartConfig={chartConfig}
							accessor="population"
							backgroundColor="transparent"
							paddingLeft="15"
							hasLegend={false}
						/>
					</View>
				</View>
			</View>
		</>
	)
}

const styles = {
	container: {
		backgroundColor,
		flex: 1
	},
	summaryCard: {
		height: 300,
		width: '92%',
		backgroundColor: primaryColor,
		alignSelf: 'center',
		borderRadius: 7,
		elevation: 5,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20,
		justifyContent: 'space-between'
	}
}

