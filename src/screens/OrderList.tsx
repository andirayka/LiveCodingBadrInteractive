import {Gap} from 'components';
import {dimens} from 'constants';
import React, {FC, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  ActivityIndicator,
  Card,
  Divider,
  Paragraph,
  Text,
} from 'react-native-paper';
import {apiGet} from 'utils';

type OrderType = {
  created_at: string;
  name: string;
  order_id: number;
  quantity: number;
  total_item: number;
  status: string;
  id: string;
  //   order_date: '2021-03-13 10:43';
};

export const OrderList: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [listData, setListData] = useState<OrderType[]>([]);

  useEffect(() => {
    let isActive = true;

    const getInitialData = async () => {
      const {data}: {data: OrderType[]} = await apiGet({
        url: '',
        params: {},
      });

      if (isActive) {
        setListData(data);
        setIsLoading(false);
      }
    };

    if (isLoading) {
      getInitialData();
    }

    return () => {
      isActive = false;
    };
  }, [isLoading]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />

      <ScrollView contentContainerStyle={{flexGrow: 1, padding: 16}}>
        <Text style={styles.title}>Order List</Text>
        <Gap y={20} />

        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          listData.map(item => {
            return <OrderData key={item.id} order={item} />;
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const OrderData = ({order}: {order: OrderType}) => {
  return (
    <Card style={{marginBottom: 16}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
        }}>
        <View style={{flex: 1}}>
          <Text style={{color: '#052A49', fontSize: dimens.medium_14}}>
            Order Id
          </Text>
          <Text
            style={{
              color: '#052A49',
              fontSize: dimens.medium_14,
              fontWeight: 'bold',
            }}>
            {order.order_id}
          </Text>
        </View>
        <Text
          style={{
            color: isEven(order.status) ? '#219653' : '#FF7B00',
            fontWeight: 'bold',
          }}>
          Shipped
        </Text>
      </View>

      <Divider />

      <Content keyName="Customer" value={order.name} />
      <Content keyName="Qty/Package" value={order.quantity} />
      <Content keyName="Total item" value={order.total_item} />
      <Content keyName="Order date" value={order.created_at} />
    </Card>
  );
};

const Content = ({
  keyName,
  value,
}: {
  keyName: string;
  value: string | number;
}) => {
  return (
    <View
      style={{flexDirection: 'row', paddingHorizontal: 16, paddingVertical: 8}}>
      <Paragraph style={{flex: 6, fontSize: 13, color: '#4F4F4F'}}>
        {keyName}
      </Paragraph>
      <Paragraph
        style={{
          flex: 8,
          fontSize: 13,
          color: '#052A49',
        }}>
        {value}
      </Paragraph>
    </View>
  );
};

function isEven(status) {
  var number = status.split(' ').pop();
  number = parseInt(number);

  return number % 2 == 0;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: dimens.standard,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
