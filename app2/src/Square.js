const Square = ({ colorValue, hexValue, isDarkText}) => {
    return (
        <section 
            className="square"
            style={{ 
                backgroundColor: colorValue,
                color: isDarkText ? "black" : "white"
            }}
        >
            <p>{colorValue ? colorValue : "Empty Value"}</p>
            <p>{hexValue ? hexValue : "Empty Hex Value"}</p>    
        </section>
    );
};

Square.defaultProps = {
    colorValue: "Empty Color Value",
    hexValue: "Empty Hex Value"
};

export default Square;