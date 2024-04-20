import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: "",
    number: "",
    id: "",
  };

  //защита от дурака
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    number: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    values.id = nanoid();
    addContact(values);
    resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            type="text"
            id={nameFieldId}
            name="name"
            className={css.field}
          />
          <ErrorMessage
            name="name"
            component="div"
            id={`${nameFieldId}-error`}
          />
        </div>
        <div>
          <label className={css.labelnumber} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            type="text"
            id={numberFieldId}
            name="number"
            className={css.field}
          />
          <ErrorMessage
            name="number"
            component="div"
            id={`${numberFieldId}-error`}
          />
        </div>
        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
