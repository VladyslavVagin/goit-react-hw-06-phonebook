import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './AddContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/contactsSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().min(5).required(),
  number: yup.number().required(),
});

const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleSubmit = (data, { resetForm }) => {
    const contNames = contacts.map(contact => contact.name);
    if (!contNames.includes(data.name)) {
      dispatch(addUser(data));
      resetForm();
      toast.success('Contact was ADDED');
    } else {
      toast.error('Contact with the same name has already exist!');
    }
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm} autoComplete="true">
        <label className={css.label} htmlFor="name">
          <Field
            type="text"
            name="name"
            className={css.input}
            required
            placeholder="Name"
          />
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={css.label} htmlFor="number">
          <Field
            type="tel"
            name="number"
            className={css.input}
            required
            placeholder="Number"
          />
          <ErrorMessage name="number" component="span" />
        </label>
        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </Form>
 
    </Formik>
  );
};

export default AddContactForm;
