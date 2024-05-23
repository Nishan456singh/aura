import Addnewitems from "@/components/shared/Addnewitems"
import { auth } from "@clerk/nextjs/server";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-black/[0.1] bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create New Item</h3>
      </section>

      <div className="wrapper my-8">
        <Addnewitems userId={userId} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent