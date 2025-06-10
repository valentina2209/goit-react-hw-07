import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Мінімум 3 символи")
    .max(50, "Максимум 50 символів")
    .required("Ім'я обов'язкове"),
  number: Yup.string()
    .min(3, "Мінімум 3 символи")
    .max(20, "Максимум 20 символів")
    .required("Номер обов’язковий"),
});

export default function ContactForm() {
  const id = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.fieldGroup}>
          <label htmlFor={`${id}-name`} className={css.label}>Name</label>
          <Field id={`${id}-name`} name="name" className={css.input} />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div className={css.fieldGroup}>
          <label htmlFor={`${id}-number`} className={css.label}>Number</label>
          <Field id={`${id}-number`} name="number" className={css.input} />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button type="submit" className={css.button}>Add contact</button>
      </Form>
    </Formik>
  );
}