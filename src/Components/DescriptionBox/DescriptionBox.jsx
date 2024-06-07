import react from "react";
import './DescriptionBox.css';
import { Tabs,TabList,Tab,TabPanels,TabPanel } from "@chakra-ui/react";

const DescriptionBox = () => {
    return(
        <Tabs size='md' variant='enclosed' className="descriptionbox" m={{base:"60px 20px",md:"60px 55px",lg:"80px 90px",xl:"120px 170px"}}>
            <TabList>
                <Tab>Description</Tab>
                <Tab>Reviews (1)</Tab>
            </TabList>
            <TabPanels>
                <TabPanel padding="30px">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti officia consectetur eveniet, quasi debitis assumenda maxime dolores inventore? Debitis quas ullam provident nobis. Sequi error ducimus laboriosam reiciendis saepe commodi dolorum recusandae. Voluptas nemo, doloremque amet corporis mollitia suscipit tenetur architecto consectetur inventore facere officiis rerum distinctio provident error temporibus voluptatum sed enim nulla libero dolore voluptates neque molestiae totam non. Cupiditate illum consectetur veniam dolorem voluptates voluptatibus quidem quaerat harum nostrum perferendis, nam doloremque odit omnis totam nihil atque expedita nulla magnam qui laborum eius deleniti? Ab, quo adipisci optio incidunt minus id aperiam iste maiores officia doloribus reprehenderit.</p>
                </TabPanel>
                <TabPanel padding="30px">
                    <p>Good</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default DescriptionBox;