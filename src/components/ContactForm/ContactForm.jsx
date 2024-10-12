import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice"; // Import action
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";

export default function ContactForm() {
  const dispatch = useDispatch();

  const UserSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    usernumber: Yup.string()
      .min(10, "Too short!")
      .max(13, "Too long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.usernumber,
    };

    dispatch(addContact(newContact));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        usernumber: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="username">Name</label>
          <Field type="text" className={css.input} name="username" />
          <ErrorMessage name="username" component="div" className={css.error} />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="usernumber">Number</label>
          <Field type="text" className={css.input} name="usernumber" />
          <ErrorMessage
            name="usernumber"
            component="div"
            className={css.error}
          />
        </div>
        <button type="submit" className={css.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
