'use client';

import styles from './form.module.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormLabel,
  Input,
  Select,
  Stack,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/next-js';

const Form = () => {
  // Ensure date selected is between 100 and 21 years from current date
  let maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 1);
  maxDate.setFullYear(maxDate.getFullYear() - 21);

  let minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  minDate.setFullYear(minDate.getFullYear() - 100);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required').min(2, 'min value'),
    email: Yup.string().email('Email is invalid'),
    dob: Yup.date()
      .min(minDate, 'Age limit is currently 100 years of age')
      .max(maxDate, 'You must be at least 21 years of age'),
    gender: Yup.string().required('Select a gender'),
    acceptTerms: Yup.bool().oneOf([true], 'Terms must be accepted to proceed'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      dob: '',
      gender: '',
      acceptTerms: false,
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={styles.form_container}
    >
      <Flex
        gap={2}
        direction="column"
        height="100%"
      >
        <Stack direction={['column', 'row']}>
          <Box flex="1">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="Name: "
              variant="outline"
              borderColor={formik.errors.name ? 'red.300' : 'black'}
              focusBorderColor={formik.errors.name ? 'red.300' : 'blue.300'}
              color="black"
            />
          </Box>
          <Box flex="1">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Email: "
              variant="outline"
              borderColor={formik.errors.email ? 'red.300' : 'black'}
              focusBorderColor={formik.errors.email ? 'red.300' : 'blue.300'}
              color="black"
            />
          </Box>
        </Stack>
        <Stack direction={['column', 'row']}>
          <Box flex="1">
            <FormLabel htmlFor="dob">Date of Birth</FormLabel>
            <Input
              name="dob"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.dob}
              variant="outline"
              borderColor={formik.errors.dob ? 'red.300' : 'black'}
              focusBorderColor={formik.errors.dob ? 'red.300' : 'blue.300'}
              color="black"
              flex="1"
            />
            {formik.errors.dob}
          </Box>
          <Box flex="1">
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <Select
              name="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
              placeholder="Select Option"
              variant="outline"
              borderColor={formik.errors.name ? 'red.300' : 'black'}
              focusBorderColor={formik.errors.name ? 'red.300' : 'blue.300'}
              color="black"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="rejected">Prefer Not To Say</option>
            </Select>
          </Box>
        </Stack>
        <Box>
          <Checkbox
            name="acceptTerms"
            onChange={formik.handleChange}
          >
            I agree to the{' '}
            <Link
              href="/"
              color="teal"
            >
              Terms and Conditions
            </Link>
          </Checkbox>
        </Box>
        <Flex
          marginTop="auto"
          marginBottom="1rem"
          justifyContent="center"
        >
          <Button
            type="submit"
            colorScheme="teal"
            width="70%"
            isDisabled={!formik.isValid}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default Form;
