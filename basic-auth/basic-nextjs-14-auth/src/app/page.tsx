import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/lib";

export default async function Page() {
  const session = await getSession();
  return (
    <>
      <section className="m-2">
        {/* Log In */}
        <form
          action={async (formData) => {
            "use server";
            await login(formData);
            redirect("/");
          }}
        >
          <input type="email" placeholder="Email" className="text-black" />
          <br />
          <button
            type="submit"
            className="bg-white rounded-md p-1 text-black mt-1"
          >
            Login
          </button>
        </form>

        {/* Log Out */}
        <form
          action={async () => {
            "use server";
            await logout();
            redirect("/");
          }}
        >
          <button
            type="submit"
            className="bg-white rounded-md p-1 text-black mt-1"
          >
            Logout
          </button>
        </form>

        <h1 className="font-bold text-[40px] mt-10">User Data:</h1>

        <pre>{JSON.stringify(session, null, 2)}</pre>
      </section>
    </>
  );
}
