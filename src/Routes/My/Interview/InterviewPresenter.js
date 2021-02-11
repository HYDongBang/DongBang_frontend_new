import React from "react";
import styled from "styled-components";
import Popup from "reactjs-popup";
import ProfileButton from "../../../Components/ProfileButton";
import Loading from "../../../Components/Loading";

const Title = styled.div`
    padding-bottom: 35px;
`;

const Main = styled.div`
    font-size: 1.4em;
    font-family: raleBold;
    padding-bottom: 10px;
`;

const Sub = styled.div`
    font-size: 0.8em;
    color: ${props => props.theme.lightGray};
    paddding: 0px 7px;
`;

const Contents = styled.div`
    display: flex;
    width: 70%;
`;

const Applicants = styled.div`
    width: 20%;
    padding-right: 10px;
    overflow-y: auto;
`;

const Menu = styled.div`
    font-family: spoHanB;
    padding-bottom: 15px;
`;

const Applicant = styled.div`
    border: 2px solid ${props => props.theme.lightGray};
    border-radius: 5px;
    padding: 12px 10px;
    font-size: 0.85em;
    line-height: 15px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        border: 2px solid ${props => props.theme.orange};
        transition: 0.1s;
    }
`;

const Name = styled.div``;

const Number = styled.div`
    color: ${props => props.theme.lightGray};
    font-size: 0.8em;
    padding-left: 3px;
`;

const TimeTable = styled.div`
    width: 80%;
`;

const Up = styled.div`
    display: flex;
    padding-left: 50px;
`;

const Day = styled.div`
    font-size: 0.85em;
    padding: 5px 20px;
`;

const Down = styled.div`
    padding: 5px;
    display: flex;
`;

const Left = styled.div`
    margin-top: -5px;
`;

const Time = styled.div`
    font-size: 0.85em;
    padding: 0px 15px 10px 0px;
`;

const Right = styled.div`
`;

const Line = styled.div`
    display: flex;
`;

const Box = styled.div`
    width: 53px;
    height: 23.7px;
    border: 1px solid ${props => props.theme.darkGray};
`;

const ColoredBox = styled.div`
    width: 53px;
    height: 23.7px;
    background: ${props => props.theme.indigo};
    color: ${props => props.theme.white};
    text-align: center;
    font-size: 0.85em;
    line-height: 1.5;
`;

const Container = styled.div`
`;

const Head = styled.div`
    display: flex;
    padding: 5px 0px;
`;

const Text = styled.div`
    font-size: 0.85em;
    padding: 5px 10px;
    text-align: center;
`;

const Body = styled.div`
    padding: 15px 0px 15px 40px;
    display: flex;
`;

const Tag = styled.div`
`;

const SelectTime = styled.select`
    cursor: pointer;
    margin: 0px 10px;
    padding: 5px;
`;

const Option = styled.option`
    padding: 5px;
`;

const Foot = styled.div`
    text-align: right;
    padding-right: 5px;
    padding-top: 10px;
`;


const Submit = styled.div`
    padding-top: 80px;
    display: flex;
    justify-content: flex-end;
    padding-right: 30%;
    padding-bottom: 50px;
`;

const X = styled.div`
    cursor: pointer;
    position: absolute;
    right: -30px;
    top: -8px;
    font-size: 2.5em;
    color: #e5eaee;
`;

export default ({ applicants, timeTable, day, time, onSubmit, onSelect, loading }) => {
    
return (
    <>
        <Title>
            <Main>면접 타임 테이블</Main>
            <Sub>면접 일정을 작성할 수 있습니다.</Sub>
        </Title>
        {loading && <Loading></Loading>}
        {!loading && (
        <Contents>
            <Applicants>
                <Menu>지원자</Menu> 
                {applicants.map(({id, startTime, endTime, interviewDay, user: {name, studentNumber} }) => (
                    <Popup
                        key={id}
                        trigger={
                            <Applicant key={id}>
                                <Name>{name}</Name>
                                <Number>{studentNumber}</Number>
                            </Applicant>
                        } modal
                        contentStyle={{ width: "350px", height: "180px", border: "none", borderRadius: "10px"}}
                        lockScroll={true}>
                        {close => (
                            <form id={id} onSubmit={onSubmit}>
                            <X onClick={close}>&times;</X>
                            <Container>
                                <Head>
                                    <Text>{name}</Text>
                                    <Text>{studentNumber}</Text>
                                </Head>
                                <Body>
                                    <Tag>
                                        <Text>요일</Text>
                                        <SelectTime id={id} name="day" onChange={onSelect}>
                                            {day.map(element => {
                                                if(interviewDay === element) return <Option value={element} selected>{element}</Option>
                                                else return <Option value={element}>{element}</Option>
                                            })}
                                        </SelectTime>
                                    </Tag>
                                    <Tag>
                                        <Text>시작 시간</Text>
                                        <SelectTime id={id} name="startTime" onChange={onSelect}>
                                            {time.map(element => {
                                                if(startTime === element) return <Option value={element} selected>{element}</Option>
                                                else return <Option value={element}>{element}</Option>
                                            })}
                                        </SelectTime>
                                    </Tag>
                                    <Tag>
                                        <Text>종료 시간</Text>
                                        <SelectTime id={id} name="endTime" onChange={onSelect}>
                                            {time.map(element => {
                                                if(time.indexOf(startTime) >= time.indexOf(element)) return;
                                                if(endTime === element) return <Option value={element} selected>{element}</Option>
                                                else return <Option value={element}>{element}</Option>
                                            })}
                                        </SelectTime>
                                    </Tag>
                                </Body>
                                <Foot>
                                <ProfileButton content="저장" color="orange"></ProfileButton>
                                </Foot>
                            </Container>
                            </form>
                        )}
                    </Popup>
                ))}
            </Applicants>
            <TimeTable>
                <Up>
                    {day.map(element => (
                        <Day key={element}>{element}</Day>
                    ))}
                </Up>
                <Down>
                    <Left>
                        {time.map(time => <Time key={time}>{time}</Time>)}
                    </Left>
                    <Right>
                        {time.map((horizontal, timeIdx) => 
                            <Line key={timeIdx}>
                                {day.map((vertical, dayIdx) => {
                                    if (timeTable.length !== 0) {
                                        if( timeTable[timeIdx][dayIdx] !== undefined && timeTable[timeIdx][dayIdx].name !== undefined) {
                                            return <ColoredBox>{timeTable[timeIdx][dayIdx].name}</ColoredBox>
                                        }
                                    }
                                    
                                    return <Box key={vertical}></Box>
                                })}
                            </Line>
                        )}
                    </Right>
                </Down>
            </TimeTable>
        </Contents>
        )}
        {/*<Submit>
            <ProfileButton content="초기화" color="darkgray" style={{ marginRight: "15px" }}></ProfileButton>
        </Submit>*/}
    </>
);}
