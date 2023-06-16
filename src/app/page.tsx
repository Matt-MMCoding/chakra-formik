'use client';

import styles from './page.module.css';
import { useFormik } from 'formik';
import { Input, Button } from '@chakra-ui/react';

export default function Home() {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <main className={styles.main}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <Button type="submit">Submit</Button>
      </form>
    </main>
  );
}
