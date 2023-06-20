'use client';

import styles from './page.module.css';
import { useFormik } from 'formik';
import {
  Input,
  Button,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Checkbox,
} from '@chakra-ui/react';
import { Form } from '@/components/Form';

// Add yup validation

export default function Home() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      age: 33,
      displayValues: true,
    },
    onSubmit: (values) => {
      // Number input not updating when submitted
      console.log(values);
    },
  });

  return (
    <main className={styles.main}>
      <Form />
      {/* <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <Stack spacing={3}>
            <Input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              placeholder="Name:"
              variant="flushed"
            />
            <Input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="Email:"
              variant="flushed"
            />
            <NumberInput
              defaultValue={formik.values.age}
              onChange={formik.handleChange}
              id="age"
              name="age"
              min={18}
              max={101}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper bg="green.300">
                  +
                </NumberIncrementStepper>
                <NumberDecrementStepper bg="red.300">-</NumberDecrementStepper>
              </NumberInputStepper>
            </NumberInput>
          </Stack>
          <Checkbox defaultChecked={formik.values.displayValues}>
            Display form values on submit?
          </Checkbox>
          <Button type="submit">Submit</Button>
        </Stack>
      </form> */}
    </main>
  );
}
