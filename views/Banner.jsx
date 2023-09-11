import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import TextComponent from '../component/TextComponent';

const Banner = () => {
  const listadezapatos = [
    {
      id: 1,
      name: 'Zapato 1',
      price: 100,
      description: 'Zapato 1',
      datos: {
        stock: 10,
        marca: 'Nike',
      },
    },
    {
      id: 2,
      name: 'Zapato 2',
      price: 200,
      description: 'Zapato 2',
      datos: {
        stock: 11,
        marca: 'Adidas',
      },
    },
    {
      id: 3,
      name: 'Zapato 3',
      price: 300,
      description: 'Zapato 3',
      datos: {
        stock: 12,
        marca: 'Puma',
      },
    },
    {
      id: 4,
      name: 'Zapato 4',
      price: 400,
      description: 'Zapato 4',
      datos: {
        stock: 13,
        marca: 'Reebok',
      },
    },
    {
      id: 5,
      name: 'Zapato 5',
      price: 500,
      description: 'Zapato 5',
      datos: {
        stock: 14,
        marca: 'Converse',
      },
    },
    {
      id: 6,
      name: 'Zapato 6',
      price: 600,
      description: 'Zapato 6',
      datos: {
        stock: 15,
        marca: 'Vans',
      },
    },
    {
      id: 7,
      name: 'Zapato 7',
      price: 700,
      description: 'Zapato 7',
      datos: {
        stock: 16,
        marca: 'New Balance',
      },
    },
    {
      id: 8,
      name: 'Zapato 8',
      price: 800,
      description: 'Zapato 8',
      datos: {
        stock: 17,
        marca: 'Under Armour',
      },
    },
    {
      id: 9,
      name: 'Zapato 9',
      price: 900,
      description: 'Zapato 9',
      datos: {
        stock: 18,
        marca: 'Skechers',
      },
    },
    {
      id: 10,
      name: 'Zapato 10',
      price: 1000,
      description: 'Zapato 10',
      datos: {
        stock: 19,
        marca: 'Fila',
      },
    },
  ];

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}
      >
        <TextComponent lista={listadezapatos} />
      </ScrollView>
    </View>
  );
};

export default Banner;
