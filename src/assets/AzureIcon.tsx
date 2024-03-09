interface IProps {
    width?: string;
    height?: string;
}

const AzureIcon = (props: IProps): JSX.Element => {
    const { width, height } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={width || 24} height={height || 24}><path fill="#035bda" d="M46 40L29.317 10.852 22.808 23.96 34.267 37.24 13 39.655zM13.092 18.182L2 36.896 11.442 35.947 28.033 5.678z" /></svg>
    );
};


export default AzureIcon;