import React from "react";

import {
  Container,
  HashtagIcon,
  Title,
  Separator,
  Description,
} from "./styles";

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>Geral</Title>

      <Separator />
      <Description>Chat geral</Description>
    </Container>
  );
};

export default ChannelInfo;
