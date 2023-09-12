import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import GlobalView from '../component/global/GlobalView';
import StyledText from '../component/Text/StyledText';

const Service = () => {
  return (
    <GlobalView>
      <StyledText big bold left>
        Servicios
      </StyledText>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, obcaecati fuga
          perspiciatis animi soluta, consequuntur neque sequi pariatur distinctio voluptates modi
          ipsum placeat cum in quidem nam magni a deleniti.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, obcaecati fuga
          perspiciatis animi soluta, consequuntur neque sequi pariatur distinctio voluptates modi
          ipsum placeat cum in quidem nam magni a deleniti.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, obcaecati fuga
          perspiciatis animi soluta, consequuntur neque sequi pariatur distinctio voluptates modi
          ipsum placeat cum in quidem nam magni a deleniti.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, obcaecati fuga
          perspiciatis animi soluta, consequuntur neque sequi pariatur distinctio voluptates modi
          ipsum placeat cum in quidem nam magni a deleniti.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, obcaecati fuga
          perspiciatis animi soluta, consequuntur neque sequi pariatur distinctio voluptates modi
          ipsum placeat cum in quidem nam magni a deleniti.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, obcaecati fuga
          perspiciatis animi soluta, consequuntur neque sequi pariatur distinctio voluptates modi
          ipsum placeat cum in quidem nam magni a deleniti.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, obcaecati fuga
          perspiciatis animi soluta, consequuntur neque sequi pariatur distinctio voluptates modi
          ipsum placeat cum in quidem nam magni a deleniti.
        </Text>
      </ScrollView>
    </GlobalView>
  );
};

export default Service;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#dcdcdc',
  },
});
