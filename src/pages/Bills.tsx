import MainLayout from "../components/MainLayout";
import PageHeader from "../ui/PageHeader";
import AlertBox from "../ui/AlertBox";

const Bills = (): JSX.Element => {
  return (
    <MainLayout>
      <PageHeader title="Recurring Bills" />
      <AlertBox title="in development" color="info" severity="info">
        Currently this page is being developed.
      </AlertBox>
    </MainLayout>
  );
};

export default Bills;
