function Form({ children, onSubmit }) {
  
  return (
    <form
    className="form"
    onSubmit={onSubmit} >
    {children}
    </form>
  );
}

function FormInput({
  label,
  type,
  value,
  onChange,
  placeholder,
}) {
  
  return (
    <div>
    <label>
    {label}
    </label>
    <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    />
    </div>
  );
}

function FormButton({ children }) {
  return (
    <button type="submit">
    {children}
    </button>
  );
}

Form.Input = FormInput;
Form.Button = FormButton;

export default Form;