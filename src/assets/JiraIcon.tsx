interface IProps {
  width?: string;
  height?: string;
}

const JizaIcon = (props: IProps): JSX.Element => {
  const { width, height } = props;
  return (
    <svg width={width || 24} height={height || 24} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="jira"><path fill="#2580F8" d="M0.775,12.675C6.933,18.877,3.641,15.558,12.022,24c9.813-9.882,8.907-8.984,8.002-8.088c-0.718,0.711-1.434,1.423,3.198-3.242c0.371-0.37,0.371-0.97,0-1.341v0.001C19.841,7.922,15.364,3.366,12.022,0C4.346,7.73,0.775,11.33,0.775,11.33C0.408,11.7,0.408,12.3,0.775,12.675L0.775,12.675z M12.02,8.452L15.546,12l-3.525,3.548L8.495,12L12.02,8.452L12.02,8.452z" /><polygon fill="#DEDEDE" points="12 8.473 8.495 12 12 15.527 12 8.473" /><path fill="#206FD8" d="M12,0.022C4.339,7.737,0.775,11.33,0.775,11.33c-0.366,0.37-0.366,0.97,0,1.345C6.928,18.872,3.646,15.564,12,23.978v-8.451L8.495,12L12,8.473V0.022L12,0.022z" /></svg>
  );
};


export default JizaIcon;
