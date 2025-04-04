import React from 'react';
import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import { colors } from '../../../config/theme';

const icons = {
  chevronUp: require('../../../assets/png/chevronUp.png'),
  dots: require('../../../assets/png/dots.png'),
  arrow: require('../../../assets/png/arrow.png'),
};

const BalanceCard: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.section]}>
        <View>
          <View style={styles.balanceTitle}>
            <Text style={styles.textWhite}>Total Balance</Text>
            <Icon source={icons.chevronUp} size={{width: 12, height: 6}} />
          </View>
          <Text style={[styles.balance, styles.textWhite]}>$ 2,548.00</Text>
        </View>
        <Icon source={icons.dots} size={{width: 21, height: 5}} />
      </View>

      <View style={[styles.section, styles.bottom]}>
        <IncomeExpenseItem
          label="Income"
          amount="$ 1,840.00"
          icon={icons.arrow}
        />
        <IncomeExpenseItem
          label="Expenses"
          amount="$ 284.00"
          icon={icons.arrow}
          rotated
          alignRight
        />
      </View>
    </View>
  );
};

const IncomeExpenseItem: React.FC<{
  label: string;
  amount: string;
  icon: ImageSourcePropType;
  rotated?: boolean;
  alignRight?: boolean;
}> = ({label, amount, icon, rotated = false, alignRight = false}) => (
  <View style={alignRight ? styles.alignRight : undefined}>
    <View style={styles.incomeTitle}>
      <Icon source={icon} size={{width: 24, height: 24}} rotated={rotated} />
      <Text style={styles.textWhite}>{label}</Text>
    </View>
    <Text style={styles.textWhite}>{amount}</Text>
  </View>
);

const Icon: React.FC<{
  source: ImageSourcePropType;
  size: {width: number; height: number};
  rotated?: boolean;
}> = ({source, size, rotated = false}) => (
  <Image source={source} style={[size, rotated && styles.rotated]} />
);

/** Styles */
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
    marginHorizontal: 20,
    backgroundColor: colors.mainGreen
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  balanceTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  balance: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  bottom: {
    marginTop: 40,
  },
  incomeTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  rotated: {
    transform: [{rotate: '180deg'}],
  },
  textWhite: {
    color: '#fff',
  },
});

export default BalanceCard;
