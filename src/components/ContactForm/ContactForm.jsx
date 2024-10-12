import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactOps";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

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

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.username,
      number: values.usernumber,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", usernumber: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div>
          <Field
            className={css.input}
            type="text"
            name="username"
            placeholder="Name"
          />
          <ErrorMessage name="username" component="div" />
        </div>
        <div>
          <Field
            className={css.input}
            type="text"
            name="usernumber"
            placeholder="Number"
          />
          <ErrorMessage
            name="usernumber"
            component="div"
            className={css.error}
          />
        </div>
        <button className={css.submitButton} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
