import { useForm } from 'react-hook-form';
import Input from './Input';
import InputSpacer from './InputSpacer';

// const FormError = ({ errorMessage }) => {
//   return <p className="text-red-300 mt-1">{errorMessage}</p>;
// };

export default function AddBookForm(props) {
  const {  handleSubmit, register  } = useForm();
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>
        <Input
          placeholder="name"
          name="name"
          
        />
        
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="author"
          name="author"
          
        />
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="image link"
          name="image"
          
        />
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="isbn"
          name="isbn"
          
        />
      </InputSpacer>

      <InputSpacer>
        <Input
          placeholder="description"
          name="description"
          
        />
      </InputSpacer>

      <button
        className="bg-blue-500 rounded-md p-4 text-blue-100"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
