import React from "react";
import { connect, styled } from "frontity";
import { SOCIAL_MEDIA } from './social-media';
import SVG from './SVG';

const Contact = () => {
  const media = SOCIAL_MEDIA.map(({ name, path, link }) => {
    return (
      <SocialItem key={link}>
        <a href={link}>
          <SVG title={name} path={path} />
        </a>
        <a href={link}>
        {name}
        </a>
      </SocialItem>
    )
  })

  return (
    <MainWrapper>
      <h1>Get in touch</h1>
      <Container>
        { media }
      </Container>
    </MainWrapper>
  );
};

export default connect(Contact);

const SocialItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Container = styled.div`
  margin-top: 20px;
`;

const MainWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  text-align: left;
`;
