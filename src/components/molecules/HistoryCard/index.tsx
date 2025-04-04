import React from 'react';
import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';

interface HistoryCardProps {
  title: string;
  date: string;
  amount?: number;
  icon: ImageSourcePropType;
  isIncome?: boolean;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  title,
  date,
  amount = 0,
  icon,
  isIncome = true,
}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />

      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{date}</Text>
      </View>

      <TransactionAmount amount={amount} isIncome={isIncome} />
    </View>
  );
};

const TransactionAmount: React.FC<{amount: number; isIncome: boolean}> = ({
  amount,
  isIncome,
}) => {
  return (
    <View style={styles.amountContainer}>
      <Text style={[styles.amount, {color: isIncome ? '#25A969' : '#E63946'}]}>
        {isIncome
          ? `+ $${amount.toFixed(2)}`
          : `- $${Math.abs(amount).toFixed(2)}`}
      </Text>
    </View>
  );
};

/** Styles */
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitle: {
    fontSize: 14,
    color: 'gray',
  },
  amountContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HistoryCard;
