import { Typography } from "@mui/material";
import Btn from "../ui/Btn";
import { useAuthStore } from "../store/useAuthStore";
import MainLayout from "../components/MainLayout";

const Home = (): JSX.Element => {
  const { setLogout } = useAuthStore();

  return (
    <MainLayout>
      <Typography variant="h1">Home</Typography>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quod
        expedita itaque et, repellendus porro alias doloribus placeat explicabo
        voluptatum modi iusto libero tenetur, sint quibusdam. Quae dolor culpa
        numquam fugiat minus quisquam recusandae, eligendi atque vel accusamus
        voluptate quo aut similique voluptas dicta sunt officiis obcaecati,
        tempore fugit. Alias, iusto. Possimus pariatur voluptatibus ad porro
        quam aut, itaque placeat sint facere fuga quia tempore totam ipsam
        impedit ipsum quae commodi dicta odit. Quaerat eius iusto a, sit
        delectus quis quod laudantium voluptatibus praesentium esse architecto
        magnam ullam aliquam possimus, numquam modi explicabo nulla recusandae
        quasi alias labore? Atque, tempora.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quod
        expedita itaque et, repellendus porro alias doloribus placeat explicabo
        voluptatum modi iusto libero tenetur, sint quibusdam. Quae dolor culpa
        numquam fugiat minus quisquam recusandae, eligendi atque vel accusamus
        voluptate quo aut similique voluptas dicta sunt officiis obcaecati,
        tempore fugit. Alias, iusto. Possimus pariatur voluptatibus ad porro
        quam aut, itaque placeat sint facere fuga quia tempore totam ipsam
        impedit ipsum quae commodi dicta odit. Quaerat eius iusto a, sit
        delectus quis quod laudantium voluptatibus praesentium esse architecto
        magnam ullam aliquam possimus, numquam modi explicabo nulla recusandae
        quasi alias labore? Atque, tempora.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quod
        expedita itaque et, repellendus porro alias doloribus placeat explicabo
        voluptatum modi iusto libero tenetur, sint quibusdam. Quae dolor culpa
        numquam fugiat minus quisquam recusandae, eligendi atque vel accusamus
        voluptate quo aut similique voluptas dicta sunt officiis obcaecati,
        tempore fugit. Alias, iusto. Possimus pariatur voluptatibus ad porro
        quam aut, itaque placeat sint facere fuga quia tempore totam ipsam
        impedit ipsum quae commodi dicta odit. Quaerat eius iusto a, sit
        delectus quis quod laudantium voluptatibus praesentium esse architecto
        magnam ullam aliquam possimus, numquam modi explicabo nulla recusandae
        quasi alias labore? Atque, tempora.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quod
        expedita itaque et, repellendus porro alias doloribus placeat explicabo
        voluptatum modi iusto libero tenetur, sint quibusdam. Quae dolor culpa
        numquam fugiat minus quisquam recusandae, eligendi atque vel accusamus
        voluptate quo aut similique voluptas dicta sunt officiis obcaecati,
        tempore fugit. Alias, iusto. Possimus pariatur voluptatibus ad porro
        quam aut, itaque placeat sint facere fuga quia tempore totam ipsam
        impedit ipsum quae commodi dicta odit. Quaerat eius iusto a, sit
        delectus quis quod laudantium voluptatibus praesentium esse architecto
        magnam ullam aliquam possimus, numquam modi explicabo nulla recusandae
        quasi alias labore? Atque, tempora.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quod
        expedita itaque et, repellendus porro alias doloribus placeat explicabo
        voluptatum modi iusto libero tenetur, sint quibusdam. Quae dolor culpa
        numquam fugiat minus quisquam recusandae, eligendi atque vel accusamus
        voluptate quo aut similique voluptas dicta sunt officiis obcaecati,
        tempore fugit. Alias, iusto. Possimus pariatur voluptatibus ad porro
        quam aut, itaque placeat sint facere fuga quia tempore totam ipsam
        impedit ipsum quae commodi dicta odit. Quaerat eius iusto a, sit
        delectus quis quod laudantium voluptatibus praesentium esse architecto
        magnam ullam aliquam possimus, numquam modi explicabo nulla recusandae
        quasi alias labore? Atque, tempora.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut quod
        expedita itaque et, repellendus porro alias doloribus placeat explicabo
        voluptatum modi iusto libero tenetur, sint quibusdam. Quae dolor culpa
        numquam fugiat minus quisquam recusandae, eligendi atque vel accusamus
        voluptate quo aut similique voluptas dicta sunt officiis obcaecati,
        tempore fugit. Alias, iusto. Possimus pariatur voluptatibus ad porro
        quam aut, itaque placeat sint facere fuga quia tempore totam ipsam
        impedit ipsum quae commodi dicta odit. Quaerat eius iusto a, sit
        delectus quis quod laudantium voluptatibus praesentium esse architecto
        magnam ullam aliquam possimus, numquam modi explicabo nulla recusandae
        quasi alias labore? Atque, tempora.
      </p>
      <Btn onClick={() => setLogout()}>Logout</Btn>
    </MainLayout>
  );
};

export default Home;
