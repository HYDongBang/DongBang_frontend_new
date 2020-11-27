import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
${reset};

  @font-face {
    font-family:'spoHanR';
    src: url(${require("./Font/Spoqa/Spoqa-Han-Sans-Regular.ttf")});
  }
  @font-face {
    font-family:'spoHanB';
    src: url(${require("./Font/Spoqa/Spoqa-Han-Sans-Bold.ttf")});
  }
  @font-face {
    font-family:'raleRegular';
    src: url(${require("./Font/Raleway/Raleway-Regular.ttf")});
  }
  @font-face {
    font-family:'raleBold';
    src: url(${require("./Font/Raleway/Raleway-Bold.ttf")});
  }

 *{
  box-sizing: border-box;
}
body {
        background-color:${props => props.theme.white};
        color:${props => props.theme.black};
        font-family:'spoHanR';
    }
    a {
        text-decoration:none;
    }
    input:focus{
        outline:none;
    }
    a:hover{
        text-decoration:none;
    }

`;
