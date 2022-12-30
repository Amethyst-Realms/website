import Layout from "../../components/layout";

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Layout>
        <div className="mx-auto flex flex-col max-w-4xl py-10 w-full px-6 prose prose-invert">
          {children}
        </div>
      </Layout>
    </>
  );
}
