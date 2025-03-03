const SignInWithEmailAndPassword: React.FC = () => {
  return (
    <>
      <section className="m-2">
        <form className="flex flex-col">
          <input type="email" placeholder="Email" className="text-black" />
          <input
            type="password"
            placeholder="password"
            className="text-black"
          />
          <br />
          <button
            type="submit"
            className="bg-white rounded-md p-1 text-black mt-1"
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
};
export default SignInWithEmailAndPassword;
