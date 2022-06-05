import styled from "styled-components";

import { Facebook, Twitter, Instagram, Pinterest, Room, Phone, MailOutline } from "@material-ui/icons";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Natkah.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          neque fuga iste sequi recusandae ducimus voluptatum numquam suscipit
          maiores voluptate perferendis quae, provident eius, eveniet et nam ea?
          In, deserunt?
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Link 1</ListItem>
          <ListItem>Link 2</ListItem>
          <ListItem>Link 3</ListItem>
          <ListItem>Link 4</ListItem>
          <ListItem>Link 5</ListItem>
          <ListItem>Link 6</ListItem>
          <ListItem>Link 7</ListItem>
          <ListItem>Link 8</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><Room style={{ marginRight: "10px" }} /> Lorem ipsum dolor sit amet</ContactItem>
        <ContactItem><Phone style={{ marginRight: "10px" }} /> +90 123 456 78 95</ContactItem>
        <ContactItem><MailOutline style={{ marginRight: "10px" }} /> me@haktantekin.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
