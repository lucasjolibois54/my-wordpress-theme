import { styled } from "frontity";
import SectionContainer from "../styles/section-container";

const Header = ({  }) => {
  return (

    <ArchiveHeader>
      {/* <ArchiveHeaderInner>
        <ArchiveTitle>
          <ColoredText color={labelColor}>{label}: </ColoredText>
          {children}
        </ArchiveTitle>
      </ArchiveHeaderInner>  */}
    </ArchiveHeader>
  );
};

export default Header;

const ArchiveHeader = styled.header`
  color: #000000;
  text-align: center;
  background-color: #fff;

  @media (min-width: 700px) {
 
  }
`;
