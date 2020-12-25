import React, {useState} from "react";
import styled from "styled-components";
import ClubInfoButton from "../../../Components/ClubInfobutton";
import ClubLogo from "../../../Components/ClubLogo";
import headerMovie from "../../../Styles/Images/header_movie.jpg"

const Wrapper = styled.div`
  background: white;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  border-radius: 15px;
`;

const OrangeButton = styled.div`
  width: 220px;
  height: 50px;
  border-radius: 38px;
  background-color:${props=>props.theme.orange};
  text-align:center;
  line-height:2.6;
  font-size:1.1em;
  font-family:raleBold;
  color:${props=>props.theme.white};
  cursor:pointer;
`;

const HeaderImg = styled.img`
    width:100%;
    height:45%;
    overflow:hidden;
`;

const Buttons = styled.div`
  position:absolute;
  top:15px;
  display:flex;
  right:30px;
`;

const Club = styled.div`
    text-align:center;
    position:absolute;
    top:39%;
    left:47%;
`;

const Type = styled.div`
 margin:8px;
 color: ${props=>props.theme.indigo};
`;

const Name = styled.div`
 margin:5px;
 font-size:1.2em;
`;

const Desc = styled.div`
 padding: 100px 7% 0px 7%;
 line-height: 1.5em;
 font-size:0.9em;
`;

const ClubInfo = styled.div`
    justify-content:space-between;
    display:flex;
    padding: 20px 7%;
`;

const LeftInfo = styled.div`
    float:left;
    display:flex;
`;

const RightInfo = styled.div`
    float:right;
    display:flex;
`;

const Tag = styled.div`
color: ${props=>props.theme.orange};
margin-right:5px;
`;

const Info = styled.div`
margin-right:15px;
`;

const Line = styled.div`
margin: 15px auto;
height:1px;
width: 86%;
background-color:black;
`;

const MLine = styled.div`
margin: 25px auto;
height:18px;
background-color:#F7F7F7;
`;

const Activities = styled.div`
    width:86%;
    margin:auto;
    display:flex;
`;

const Activity = styled.div`
    width:50%;
    padding:1%;
`;


const ActImg = styled.div`

`;

const ActTitle = styled.div`
    margin:15px 0;
    font-size: 1.2em;
`;

const ActDes = styled.div`
    line-height:1.3em;
    font-size:0.8em;
`;



export default ({club})=>{
  const [action, setAction] = useState("Info");

return (
    <Wrapper>
        <HeaderImg src = {headerMovie}/>
        <Buttons>
            <ClubInfoButton content = "실시간 톡" onClick={() => setAction("Talk")}/>
            <ClubInfoButton content = "지원하기" onClick={() => setAction("Apply")}/>
        </Buttons>

        <Club>
            <ClubLogo style={{margin:"auto"}} type = "sports"/>
            <Type>체육</Type>
            <Name>HYSCUBA</Name>
        </Club>
        <Desc> 
            스포츠 다이빙은 레크레이션 다이빙 활동을 대표한다. 스포츠 다이빙은 많은 사람들이 즐기고 있으며, 따뜻하고 이국적인 지역에서 간단한 장비와 초급 단계의 훈련을 받고도 충분히 즐길 수 있다.
            반면 스포츠 다이빙의 한계와 제한 범위는 명확하게 정의되어 있다. 장비는 실린더(탱크) 한 개를 사용해야 하고, 최대 허용 수심은 40m지만, PADI의 오픈워터 레벨을 기준으로 초급 다이버는 한계수심이 18m로 제한되며 천정이 막힌 환경(예를 들면 수중동굴이나 난파선의 내부 등)에서는 다이빙할 수 없다. 초급 라이센스 다이버일수록 트러블 발생시 대처능력이 떨어지고, 긴급 상황에서 수면으로 상승해야할 시 위가 막힌 환경이라면 사고로 이어질 수 있기 때문이다. 초급 레벨을 벗어나 어드밴스로 레벨을 올리면 한계수심이 최대40m까지 허용이 되며 위가 막힌 환경에서도 다이빙할 수 있도록 교육받게 된다. 동시에 대부분의 스포츠 다이빙에서는 무감압 다이빙을 한다.
        </Desc>

        <Line/>

        <ClubInfo>
            <LeftInfo>
                <Tag>회합일정</Tag> <Info>화요일</Info>
                <Tag>뒷풀이</Tag> <Info>화요일</Info>
                <Tag>인원수</Tag> <Info>화요일</Info>
                <Tag>연합여부</Tag> <Info>화요일</Info>
            </LeftInfo>
            <RightInfo>
                <Tag>메일</Tag> <Info>nso1012@naver.com</Info>
                <Tag>연락처</Tag> <Info>010-2834-9053</Info>
            </RightInfo>
        </ClubInfo>

        {action === "Info" && (
                <div style={{margin:"10px auto", width:"220px"}}>
                <OrangeButton onClick={() => setAction("MoreInfo")}>동아리 활동 보기</OrangeButton>
                </div>)}
        {action === "MoreInfo" && (
            <>
            <MLine/>
                <Activities>
                    <Activity>
                        <ActImg></ActImg>
                        <ActTitle>
                            동아리와 알아보는 스쿠버다이빙의 매력!
                        </ActTitle>
                        <ActDes>
                            스포츠 다이빙은 레크레이션 다이빙 활동을 대표한다. 스포츠 다이빙은 많은 사람들이 즐기고 있으며, 따뜻하고 이국적인 지역에서 간단한 장비와 초급 단계의 훈련을 받고도 충분히 즐길 수 있다. 반면 스포츠 다이빙의 한계와 제한 범위는 명확하게 정의되어 있다. 장비는 실린더(탱크) 한 개를 사용해야 하고, 최대 허용 수심은 40m지만, PADI의 오픈워터 레벨을 기준으로 초급 다이버는 한계수심이 18m로 제한되며 천정이 막힌 환경(예를 들면 수중동굴이나 난파선의 내부 등)에서는 다이빙할 수 없다. 
                        </ActDes>
                    </Activity>
                    <Activity>
                        <ActImg></ActImg>
                        <ActTitle>
                            동아리와 알아보는 스쿠버다이빙의 매력!
                        </ActTitle>
                        <ActDes>
                            스포츠 다이빙은 레크레이션 다이빙 활동을 대표한다. 스포츠 다이빙은 많은 사람들이 즐기고 있으며, 따뜻하고 이국적인 지역에서 간단한 장비와 초급 단계의 훈련을 받고도 충분히 즐길 수 있다. 반면 스포츠 다이빙의 한계와 제한 범위는 명확하게 정의되어 있다. 장비는 실린더(탱크) 한 개를 사용해야 하고, 최대 허용 수심은 40m지만, PADI의 오픈워터 레벨을 기준으로 초급 다이버는 한계수심이 18m로 제한되며 천정이 막힌 환경(예를 들면 수중동굴이나 난파선의 내부 등)에서는 다이빙할 수 없다. 
                        </ActDes>
                    </Activity>
                </Activities>
                </>
                )}
 
</Wrapper>
)
}