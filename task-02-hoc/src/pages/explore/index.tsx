const Explore = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-6 pt-12">
      <h1 className="text-xl font-medium text-center max-w-5xl">
        Task: <br />
        Implementing a HOC for route protection that checks if the user is
        authenticated before allowing access to certain routes. The HOC should
        handle authentication checks, redirects, and provide a way for the
        wrapped component to access the authentication state.
      </h1>
      <a
        href="https://github.com/RameshNeupane/lancemeup-task/tree/master/task-02-hoc"
        target="_blank"
        className="w-max h-max px-6 py-4 bg-fuchsia-900 rounded hover:bg-fuchsia-700 transition-colors ease-in duration-200"
        title="Github"
      >
        Get Source Code
      </a>
    </div>
  );
};

export default Explore;
