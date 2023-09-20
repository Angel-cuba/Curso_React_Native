import { View, Text, ScrollView, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('El nombre es requerido')
    .min(3, 'El nombre debe tener al menos 3 caracteres')
    .max(10, 'El nombre debe tener menos de 10 caracteres'),
  lastName: Yup.string().required('El apellido es requerido'),
  email: Yup.string().email('El email no es válido').required('El email es requerido').test('email', 'El email debe ser gmail', (value) => {
    if(value) {
      return value.endsWith('@gmail.com');  
    }
    return false;
  }),
  age: Yup.number().typeError('La edad debe ser un número').required('La edad es requerida'),
  date: Yup.date()
    .typeError('Selecciona una fecha válida')
    .required('La fecha es requerida')
    .min(new Date(1999, 0, 1), 'Debes haber nacido por esta fecha'),
  gender: Yup.string().required('El género es requerido'),
});

const SignUp = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [selectedGender, setSelectedGender] = React.useState('');
  const handleSubmit = (values) => {
    console.log(' Valores del formik', values);
  };

  const handleConfirmDate = (date, setFieldValue) => {
    setDatePickerVisibility(false);
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      '0'
    )}-${String(date.getDate()).padStart(2, '0')}`;
    setFieldValue('date', formattedDate);
  };

  const handleGenderCheckBox = (value, setFieldValue) => {
    if( value === 'male' ) {
      setFieldValue('male', true);
      setFieldValue('female', false);
      setSelectedGender('male');
    } else if( value === 'female' ) {
      setFieldValue('male', false);
      setFieldValue('female', true);
      setSelectedGender('female')
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
          email: '',
          age: '',
          date: '',
          gender: '',
          male: false,
          female: false
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
          <>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nombre</Text>
              <TextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                style={styles.input}
              />
              {touched.name && errors.name && <Text style={styles.error}>{errors.name}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                style={styles.input}
              />
              {touched.lastName && errors.lastName && (
                <Text style={styles.error}>{errors.lastName}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.input}
              />
              {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Age</Text>
              <TextInput
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}
                value={values.age}
                style={styles.input}
                keyboardType="numeric"
              />
              {touched.age && errors.age && <Text style={styles.error}>{errors.age}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Date</Text>
              <Pressable onPress={() => setDatePickerVisibility(true)}>
                <Text style={styles.input}>Date: {values.date}</Text>
              </Pressable>
            </View>
            <View style={styles.inputContainer}>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={(date) => handleConfirmDate(date, setFieldValue)}
                onCancel={() => setDatePickerVisibility(false)}
                maximumDate={new Date()}
              />
              {touched.date && errors.date && <Text style={styles.error}>{errors.date}</Text>}
            </View>
            <View style={styles.inputCheckbox}>
              <Text style={styles.label}>
                Gender: {values.gender && values.gender[0].toUpperCase() + values.gender?.slice(1)}
              </Text>
              <Picker
                selectedValue={values.gender}
                style={styles.picker}
                onValueChange={(itemValue) => setFieldValue('gender', itemValue)}
              >
                <Picker.Item label="Seleccionar" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
                <Picker.Item label="Prefer not to say" value="prefer_not_to_say" />
              </Picker>
              {touched.gender && errors.gender && <Text style={styles.error}>{errors.gender}</Text>}
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.checkboxContainer}>
                <Checkbox value={selectedGender === 'male'} onValueChange={() => handleGenderCheckBox('male', setFieldValue)}/>
                <Text style={styles.label}>Male</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <Checkbox value={selectedGender === 'female'} onValueChange={() => handleGenderCheckBox('female', setFieldValue)}/>
                <Text style={styles.label}>Female</Text>
              </View>
            </View>
            <Button onPress={handleSubmit} title="Submit" />
            <Text>You an account already.</Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text style={{ color: 'blue' }}>Login</Text>
            </Pressable>
          </>
        )}
      </Formik>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  inputContainer: {
    marginHorizontal: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 5,
  },
  error: {
    color: 'red',
  },
  picker: {
    height: 'auto',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 5,
    marginVertical: 10,
  },
  checkboxContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
