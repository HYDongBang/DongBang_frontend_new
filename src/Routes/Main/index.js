import React from "react";
import ClubInfoButton from "../../Components/ClubInfobutton";
import ClubLogo from "../../Components/ClubLogo";
import OrangeButton from "../../Components/OrangeButton";
import TopButton from "../../Components/TopButton";
import UserLogo from "../../Components/UserLogo";
export default () => <div>hi
<ClubLogo type="culture"/>
<ClubLogo type="volunteer"/>
<OrangeButton content="hello"/>
<TopButton/>
<UserLogo size="126px" name="남" font="59px"/>
<UserLogo name="남" />
<UserLogo size="55px" name="남" font="26px"/>
<UserLogo size="50px" name="남" font="22px"/>
<ClubInfoButton content="지원하기"/>
<ClubInfoButton content="실시간 톡"/>
<ClubInfoButton content="동아리소개"/>
</div>;
