export const Select = ({label, id, children}) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <select id={id}>
        {children}
      </select>
    </div>
  );
};
