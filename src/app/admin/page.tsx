import AdminLeadsTable from "@/components/admin/Table";
import Footer from "@/components/shared/Footer";
import LogoutButton from "@/components/shared/LogoutButton";


export default async function SimulationPage() {
  return (
    <section className="relative flex flex-col min-h-screen bg-teste text-dark-custom">
      <LogoutButton />
      <main className="flex-grow">
        <div className="mt-8 md:mt-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
            Administration Panel
          </h1>
          <p className="text-center text-md sm:text-lg max-w-2xl mx-auto">
            Here you can manage the leads captured through the simulation form.
          </p>
        </div>

        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto py-10 sm:py-14">
          <AdminLeadsTable />
        </div>
      </main>

      <Footer />
    </section>
  );
}
