/* @flow */

import * as React from 'react';
import { View, Text } from 'react-native';
import AccessoryCell from './AccessoryCell';

import type { Props as AccessoryCellProps } from './AccessoryCell';
import { keyValueCellStyles as styles } from './styles';

export type Props = {
	...AccessoryCellProps,

	title: string,
	titleStyle?: any,
	value?: string,
	valueStyle?: any,
	contentComponent?: React.Node,

	iconComponent?: React.Node,
};

const KeyValueCell = (props: Props) => {
	const getIcon = (): React.Node => {
		const { iconComponent } = props;

		if (iconComponent) {
			return (
				<View style={styles.iconContainer}>
					{iconComponent}
				</View>
			);
		}
	};

	const getTitle = (): React.Node => {
		const { title, titleStyle } = props;

		if (title) {
			return <Text key='title' style={[styles.title, titleStyle]}>{title}</Text>;
		}
	};

	const getValue = (): React.Node => {
		const { value, valueStyle } = props;

		if (value) {
			return <Text key='value' style={[styles.value, valueStyle]}>{value}</Text>;
		}
	};

	const getContent = (): React.Node => {
		const { contentComponent } = props;

		let component;
		if (contentComponent) {
			component = contentComponent;
		} else {
			const space = <View key='space' style={styles.space} />;
			component = [getTitle(), space, getValue()];
		}

		return (
			<View style={styles.contentContainer}>
				{component}
			</View>
		);
	};

	return (
		<AccessoryCell hideAccessorySeparator {...props}>
			{getIcon()}
			{getContent()}
		</AccessoryCell>
	);
};

export default KeyValueCell;