type TodoLogoProps = {
  iconClassName?: string;
  textClassName?: string;
};

const TodoLogo = ({
  iconClassName = "h-8 w-8",
  textClassName = "text-2xl font-medium text-primary-purple/80",
}: TodoLogoProps) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <img
        src="/todo-logo.png"
        aria-hidden="true"
        className={iconClassName}
      />
      <span className={textClassName}>TODO LIST</span>
    </div>
  );
};

export default TodoLogo;
