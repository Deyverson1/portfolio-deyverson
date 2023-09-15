import React from "react";
import styled from "styled-components";
import WebIcon from "@mui/icons-material/Web";
import CodeIcon from "@mui/icons-material/Code";
import LanguageIcon from "@mui/icons-material/Language";
import { blue } from "@mui/material/colors";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();
  return (
    <SkillSection>
      <Title>Skills</Title>
      <SkillsContent>
        <Card>
          <LanguageIcon
            fontSize="large"
            sx={{ color: blue[500] }}
            className="icon"
          />
          <H3> {t("SkillsTittle1")}</H3>
          <P> {t("SkillsDescription1")}</P>
        </Card>
        <Card>
          <WebIcon
            fontSize="large"
            sx={{ color: blue[500] }}
            className="icon"
          />
          <H3> {t("SkillsTittle2")}</H3>
          <P> {t("SkillsDescription2")}</P>
        </Card>
        <Card>
          <CodeIcon
            fontSize="large"
            sx={{ color: blue[500] }}
            className="icon"
          />
          <H3> {t("SkillsTittle3")} </H3>
          <P> {t("SkillsDescription3")} </P>
        </Card>
      </SkillsContent>
    </SkillSection>
  );
}
// Styles
const SkillSection = styled.section`
  margin: 8rem 2rem;
  @media screen and (max-width: 768px) {
    margin: 0 2rem;
    margin-top: 5rem;
  }
`;
const Title = styled.h2`
  margin: 0;
  padding: 0;
  padding-left: 12px;
  letter-spacing: 0.0625rem;
  font-weight: 500;
  @media screen and (max-width: 425px) {
    padding-top: 1rem;
  }
`;
const SkillsContent = styled.section`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const Card = styled.div`
  border-radius: 7px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  padding: 0 2rem;
  width: 100%;
  height: 300px;
  text-align: start;
  margin: 12px;
  border: 1px solid #4169e1;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    transition: 0.7s;
    background-color: #4169e1;
    color: white;
    cursor: pointer;
    > .icon {
      color: white;
    }
  }
`;
const H3 = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.0625rem;
  margin-bottom: 0;
  padding-bottom: 0;
`;
const P = styled.p`
  margin-top: 0.5rem;
`;

export default Skills;
