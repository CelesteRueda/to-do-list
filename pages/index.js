import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";
import { useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import ToDoList from "../components/List";

const HomePage = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  console.log(user, isLoading);

  useEffect(() => {
    if (!(user || isLoading)) {
      router.push("/login");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoading]);

  return (
    <MainLayout>
      <ToDoList></ToDoList>
    </MainLayout>
  );
};

export default HomePage;

// import { useUser } from "@auth0/nextjs-auth0";
// import Link from "next/link";

// const HomePage = () => {
//   const { user, error, isLoading } = useUser();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>{error.message}</div>;

//   if (user) {
//     return (
//       <div>
//         Welcome {user.name}!{" "}
//         <Link href="/api/auth/logout">/api/auth/logout</Link>
//       </div>
//     );
//   }

//   return <Link href="/api/auth/login">Login</Link>;
// };

// export default HomePage;
