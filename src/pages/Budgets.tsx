import MainLayout from "../components/MainLayout";
import Btn from "../ui/Btn";
import PageHeader from "../ui/PageHeader";
import useGetData from "../hooks/useGetData";
import { Budget } from "../types";
import { Grid2 } from "@mui/material";
import Wrap from "../ui/Wrap";
import BudgetWidget from "../components/BudgetWidget";

const Budgets = (): JSX.Element => {
  const { data, isLoading, isSuccess } = useGetData<Budget[]>({
    key: ["budgets"],
    uri: "/budgets",
  });

  return (
    <MainLayout>
      <PageHeader title="Budgets">
        <Btn>+ Add New Budget</Btn>
      </PageHeader>

      <Grid2 container spacing={6}>
        <Grid2 size={{ xs: 12, md: 5 }}>
          {isSuccess && <BudgetWidget data={data?.data} />}
        </Grid2>

        <Grid2 size={{ xs: 12, md: 7 }}>
          <Wrap>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            alias architecto voluptatum voluptatem, ea asperiores iste modi.
            Velit libero voluptatibus, autem cumque nostrum aut voluptas fuga,
            nesciunt sunt vero similique quia incidunt. Magnam tempora ab
            doloremque voluptatibus, consequatur tenetur porro et minus mollitia
            impedit, fugit earum aliquam sed ducimus! A porro pariatur aliquam
            ad harum excepturi laborum ullam aliquid dicta minima, ut maxime
            architecto nemo? Veritatis incidunt explicabo cum totam odio
            aliquid, quisquam omnis deleniti odit exercitationem cumque aperiam
            amet non eaque ad. Repellat laudantium amet officia. Ipsa at
            doloribus ipsum rerum cumque corporis praesentium laboriosam
            aspernatur cupiditate dicta deleniti aut distinctio vel facere cum
            sequi tenetur unde totam debitis voluptatibus, error natus quas ea
            similique?
          </Wrap>
        </Grid2>
      </Grid2>
    </MainLayout>
  );
};

export default Budgets;
