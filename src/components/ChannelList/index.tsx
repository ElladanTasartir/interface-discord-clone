import React from "react";

import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      {/* <ChannelButton channelName="Geral" />
      <ChannelButton channelName="Estudos" />
      <ChannelButton channelName="Relaxing" />
      <ChannelButton channelName="Memes" />
      <ChannelButton channelName="Gaming" /> */}
    </Container>
  );
};

export default ChannelList;
