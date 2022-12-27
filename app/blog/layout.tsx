import Layout from "../../components/layout";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <div className="mx-auto flex flex-col max-w-4xl py-10 w-full px-6">
        {children}
      </div>
    </Layout>
  );
}
