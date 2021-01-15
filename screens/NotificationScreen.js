import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import TabBar from '../components/TabBar';
import RightContent from '../components/RightContent';
import HeadPersonal from '../components/HeadPersonal';
import img from '../constants/Images';
// import {useNavigation} from '@react-navigation/native';

const Notification = (props) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <View style={{flex: 1}}>
      <HeadPersonal title="Thông Báo" />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View>
          <TabBar setActiveTab={setActiveTab} />
        </View>
        <View>
          {(() => {
            switch (activeTab) {
              case 1:
                return <RightContent />;
              case 2:
                return (
                  <Image
                    resizeMode="stretch"
                    style={{width: 340, height: 600}}
                    source={{uri: img.notificationBanner}}
                  />
                );
              default:
                return (
                  <Image
                    resizeMode="stretch"
                    style={{width: 340, height: 600}}
                    source={{uri: img.notificationBanner}}
                  />
                );
            }
          })()}
        </View>
      </View>
    </View>
  );
};

export default Notification;
