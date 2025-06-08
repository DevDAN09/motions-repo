export const box = {
    width: 100,
    height: 100,
    backgroundColor: "#9911ff",
    borderRadius: 5,
}

export const ball = {
    width: 100,
    height: 100,
    backgroundColor: "#dd00ee",
    broderRadius: "50%",
}

export const dashedLine: React.CSSProperties = {
    width:300,
    height: 1,
    borderTop: "3px dashed #000000",
    position: "relative",
    top: 50,
}

const constant = {
    box,
    ball,
    dashedLine
};

export default constant;