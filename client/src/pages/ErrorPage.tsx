import { Link, useNavigate } from "react-router";
import { MdArrowBack, MdHome } from "react-icons/md";
import TodoLogo from "../components/TodoLogo";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-dvh w-full overflow-x-hidden bg-gray-100 px-4 text-black-mode dark:bg-black-mode dark:text-white">
      <div className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col py-6 sm:py-8">
        <header className="flex items-center text-center justify-center">
          <TodoLogo
            iconClassName="h-9 w-9 sm:h-11 sm:w-11"
            textClassName="text-2xl font-medium text-primary-purple dark:text-white sm:text-4xl"
          />
        </header>

        <section className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="mt-6 w-full max-w-2xl rounded-lg border border-primary-purple/20 bg-white px-5 py-8 shadow-sm dark:border-white/10 dark:bg-white/5 sm:px-8 sm:py-10">
            <p className="text-xl font-medium uppercase text-primary-purple dark:text-white/70">
              Error
            </p>

            <h1 className="mt-3 text-5xl font-medium leading-none text-primary-purple dark:text-white sm:text-6xl">
              404
            </h1>

            <h2 className="mt-5 text-2xl font-medium sm:text-4xl">
              Page not found
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-white/70 sm:text-lg sm:leading-8">
              The page you are looking for does not exist, was moved, or the
              address was typed incorrectly.
            </p>
          </div>

          <div className="mt-8 flex w-full max-w-md flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/todos"
              className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-primary-purple px-5 py-3 font-medium text-white transition-colors hover:bg-primary-purple/90"
            >
              <MdHome className="text-2xl" />
              Go to todo
            </Link>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg border-2 border-primary-purple px-5 py-3 font-medium text-primary-purple transition-colors hover:bg-primary-purple hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black-mode"
            >
              <MdArrowBack className="text-2xl" />
              Go back
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ErrorPage;
