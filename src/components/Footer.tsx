import { isDarkAtom } from '../atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { FooterContainer } from './styles';

const Footer = () => {
  const IMG_BASE_URL = 'assets';
  const isDark = useRecoilValue(isDarkAtom);
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => {
    setDarkAtom((prev) => !prev);
  };

  return (
    <FooterContainer>
      <button onClick={toggleDarkAtom}>
        <img
          src={
            isDark ? `${IMG_BASE_URL}/light.png` : `${IMG_BASE_URL}/night.png`
          }
          alt=""
        />
      </button>
    </FooterContainer>
  );
};

export default Footer;
