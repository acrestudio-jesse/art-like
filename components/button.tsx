type ButtonProps = {
    children: string,
    press?: any
    valid?: boolean
}

const Button = ({press,children}:ButtonProps) => {
  return (
    <button onSubmit={!!press && press} className="rounded-lg border-2 border-pistachio px-4 py-1 transition-colors duration-200 hover:bg-pistachio hover:text-black ">
      {children}
    </button>
  );
};

export default Button;
