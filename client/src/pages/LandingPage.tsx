import { Link } from "react-router";
import {
  MdAdd,
  MdCheck,
  MdKeyboardArrowRight,
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdOutlineSearch,
} from "react-icons/md";
import TodoLogo from "../components/TodoLogo";
import useTheme from "../hooks/useTheme";

const previewTodos = [
  { title: "Finish weekly goals", status: true },
  { title: "Plan tomorrow's tasks", status: false },
  { title: "Send team progress report", status: false },
];

const featureCards = [
  {
    title: "Quick Add",
    body: "Write and save your tasks in seconds without any clutter.",
  },
  {
    title: "Instant Search",
    body: "Find what you need by searching or filtering in real-time.",
  },
  {
    title: "Dark & Light Mode",
    body: "Switch themes easily to keep your eyes comfortable day or night.",
  },
];

const TodoPreview = ({ className = "" }: { className?: string }) => (
  <div
    className={`rounded-lg border border-primary-purple/20 bg-white/90 p-3 shadow-2xl shadow-primary-purple/10 dark:border-white/10 dark:bg-white/5 sm:p-4 ${className}`}
  >
    <div className="flex gap-2 sm:gap-3">
      <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border-2 border-primary-purple/80 bg-white px-3 py-2 dark:border-white/80 dark:bg-black-mode sm:gap-3">
        <span className="min-w-0 flex-1 truncate text-base text-primary-purple/70 dark:text-white/70 sm:text-lg">
          Search todo...
        </span>
        <MdOutlineSearch className="shrink-0 text-2xl text-primary-purple dark:text-white sm:text-3xl" />
      </div>
      <span className="flex h-11 min-w-14 items-center justify-center rounded-lg bg-primary-purple px-3 text-base font-medium text-white sm:h-12 sm:min-w-20 sm:text-lg">
        ALL
      </span>
    </div>

    <div className="mt-4 space-y-1 sm:mt-5">
      {previewTodos.map((todo) => (
        <div
          key={todo.title}
          className="flex min-h-12 items-center gap-3 border-b border-primary-purple/30 py-2 last:border-none sm:min-h-13 sm:gap-4"
        >
          <span
            className={`flex h-5 w-5 shrink-0 items-center justify-center border-2 border-primary-purple sm:h-6 sm:w-6 ${
              todo.status ? "bg-primary-purple" : "bg-white dark:bg-black-mode"
            }`}
          >
            {todo.status && <MdCheck className="text-lg text-white" />}
          </span>
          <span
            className={`min-w-0 truncate text-base font-medium sm:text-lg ${
              todo.status ? "text-gray-500 line-through" : ""
            }`}
          >
            {todo.title}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const LandingPage = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <div className="flex min-h-dvh md:h-dvh w-full flex-col overflow-y-auto md:overflow-hidden bg-white text-black-mode dark:bg-black-mode dark:text-white">
      <header className="shrink-0 border-b border-primary-purple/15 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-black-mode/90">
        <nav className="mx-auto flex min-h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:min-h-18 lg:px-4">
          <TodoLogo
            iconClassName="h-9 w-9 sm:h-11 sm:w-11"
            textClassName="text-2xl font-medium text-primary-purple dark:text-white sm:text-4xl"
          />
          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setIsDark(!isDark)}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-purple text-white transition-colors hover:bg-primary-purple/90 sm:h-10 sm:w-10"
            >
              {isDark ? (
                <MdOutlineLightMode className="text-xl sm:text-2xl" />
              ) : (
                <MdOutlineDarkMode className="text-xl sm:text-2xl" />
              )}
            </button>
            <Link
              to="/login"
              className="rounded-lg px-2.5 py-2 text-sm font-medium text-primary-purple transition-colors hover:bg-primary-purple/10 dark:text-white dark:hover:bg-white/10 sm:px-4 sm:text-base"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-lg bg-primary-purple px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-purple/90 sm:px-4 sm:text-base"
            >
              Register
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex min-h-0 flex-1 flex-col md:overflow-hidden">
        <section className="flex flex-1 items-center py-8 md:min-h-0 md:py-0 bg-gray-100 dark:bg-black-mode">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-5 px-4 py-5 sm:px-6 sm:py-6 md:grid-cols-2 md:gap-8 lg:px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-medium leading-tight text-black-mode dark:text-white sm:text-5xl md:text-6xl">
                TODO LIST
              </h1>
              <p className="mt-3 max-w-xl text-base text-gray-700 dark:text-white/75 sm:mt-4 sm:text-lg sm:leading-8">
                A clean todo workspace for writing tasks, filtering priorities,
                and checking off the work that matters today.
              </p>
              <div className="mt-5 flex flex-col gap-3 min-[420px]:flex-row sm:mt-6">
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-2 rounded-lg bg-primary-purple px-5 py-3 font-medium text-white transition-colors hover:bg-primary-purple/90"
                >
                  Start organizing
                  <MdKeyboardArrowRight className="text-2xl" />
                </Link>
                <Link
                  to="/todos"
                  className="rounded-lg border-2 border-primary-purple px-5 py-3 text-center font-medium text-primary-purple transition-colors hover:bg-primary-purple hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black-mode"
                >
                  Open app
                </Link>
              </div>
            </div>
            <TodoPreview className="w-full max-w-md md:justify-self-end" />
          </div>
        </section>

        <section className="shrink-0 border-t border-primary-purple/15 bg-white px-4 py-6 dark:border-white/10 dark:bg-black-mode sm:px-6 lg:px-4">
          <div className="mx-auto grid w-full max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => (
              <article
                key={feature.title}
                className="rounded-lg border border-primary-purple/20 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary-purple text-white">
                  <MdAdd className="text-xl" />
                </div>
                <h2 className="text-lg font-medium">{feature.title}</h2>
                <p className="mt-1 text-sm leading-5 text-gray-600 dark:text-white/70 lg:line-clamp-2">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
