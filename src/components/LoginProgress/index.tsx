import loginProgress0 from "../../assets/login-progress-0.svg";
import loginProgress1 from "../../assets/login-progress-1.svg";
import loginProgress2 from "../../assets/login-progress-2.svg";
import loginProgress3 from "../../assets/login-progress-3.svg";
import "./style.css";

interface LoginProgressProps {
  progress: number;
}

const progressOptions = [
  {
    title: "유저 정보를 불러오고 있어요",
    image: loginProgress0,
  },
  {
    title: "필요한 정보들을 불러오고 있어요",
    image: loginProgress1,
  },
  {
    title: "거의 완료되었어요. 조금만 기다려주세요",
    image: loginProgress2,
  },
  {
    title: "로그인이 완료되었어요",
    image: loginProgress3,
  },
];

const LoginProgress = ({ progress }: LoginProgressProps) => {
  const { image, title } = progressOptions[progress];

  return (
    <div className="loginProgressWrapper">
      <div className="loginImageWrapper">
        <img className="loginImage" src={image} alt={title} />
      </div>
      <div className="titleWrapper">{title}</div>
    </div>
  );
};

export default LoginProgress;
