import { css } from 'lit';

export const MultiCarouselStyles = css`
:host {
  --main-color: #000;
  --slides-bg-color: #FFF;
  --slides-border: 10px solid var(--slides-bg-color);
  --slides-border-radius:0px;
  --slides-padding: 0;
  --slides-width: 820px;
  --slides-height: 420px;
  --hover-arrow-color: #FF0;
  --nav-point-color: #3A3A3A;

  height: 100%;
  overflow-x: hidden;
  text-align: center;
  font: 400 100% 'Raleway', 'Lato';
  background-color: transparent;
  color: var(--main-color);
  padding-bottom: 60px;
}
.csslider {
  margin: auto 3em;
  text-align:center;
  -moz-perspective: 1300px;
  -ms-perspective: 1300px;
  -webkit-perspective: 1300px;
  perspective: 1300px;
  display: inline-block;
  position: relative;
  margin-bottom: 22px;
}
.csslider > input {
  display: none;
}
.csslider > ul {
  position: relative;
  width: var(--slides-width);
  height: var(--slides-height);
  z-index: 1;
  font-size: 0;
  line-height: 0;
  background-color: var(--slides-bg-color);
  border: var(--slides-border);
  border-radius: var(--slides-border-radius);
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
}
.csslider > ul > li {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: var(--slides-padding);
  overflow: hidden;
  font-size: 15px;
  font-size: initial;
  line-height: normal;
  -moz-transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
  -o-transition: all 0.5s ease-out;
  -webkit-transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
  transition: all 0.5s cubic-bezier(0.4, 1.3, 0.65, 1);
  vertical-align: top;
  box-sizing: border-box;
  white-space: normal;
}
.csslider > ul > li.scrollable {
  overflow-y: scroll;
}
.csslider > .navigation {
  position: absolute;
  bottom: -8px;
  left: 50%;
  z-index: 10;
  margin-bottom: -10px;
  font-size: 0;
  line-height: 0;
  text-align: center;
  user-select: none;
}
.csslider > .navigation > div {
  margin-left: -100%;
}
.csslider > .navigation label {
  position: relative;
  display: inline-block;
  cursor: pointer;
  border-radius: 50%;
  margin: 0 4px;
  padding: 4px;
  background: var(--nav-point-color);
}
.csslider > .navigation label:hover:after {
  opacity: 1;
}
.csslider > .navigation label:after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -6px;
  margin-top: -6px;
  background: #71ad37;
  border-radius: 50%;
  padding: 6px;
  opacity: 0;
}
.csslider > .arrows {
  user-select: none;
}
.csslider.inside .navigation {
  bottom: 10px;
  margin-bottom: 10px;
}
.csslider.inside .navigation label {
  border: 1px solid #7e7e7e;
}

.csslider > .arrows {
  position: absolute;
  left: -31px;
  top: 50%;
  width: 100%;
  height: 26px;
  padding: 0 31px;
  z-index: 0;
  box-sizing: content-box;
}
.csslider > .arrows label {
  display: none;
  position: absolute;
  top: -50%;
  padding: 13px;
  box-shadow: inset 2px -2px 0 1px var(--main-color);
  cursor: pointer;
  transition: box-shadow 0.15s, margin 0.15s;
}
.csslider > .arrows label:hover {
  box-shadow: inset 3px -3px 0 2px var(--hover-arrow-color);
  margin: 0 0px;
}
.csslider > .arrows label:before {
  content: '';
  position: absolute;
  top: -100%;
  left: -100%;
  height: 300%;
  width: 300%;
}
.noshow { 
  visibility: hidden;
}

@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v15/S6uyw4BMUTPHjx4wWw.ttf) format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  src: local('Raleway'), local('Raleway-Regular'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptug8zYS_SKggPNyC0ISg.ttf) format('truetype');
}
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  src: local('Raleway Bold'), local('Raleway-Bold'), url(https://fonts.gstatic.com/s/raleway/v13/1Ptrg8zYS_SKggPNwJYtWqZPBQ.ttf) format('truetype');
}

ul,
ol {
  padding-left: 40px;
}
#theslider {
  font-family: 'Lato';
}

.scrollable p {
  padding: 30px;
  text-align: justify;
  line-height: 140%;
  font-size: 120%;
}
     
@keyframes sign-anim {
  to {
    background-position: 0 -7140px;
  }
}
`;