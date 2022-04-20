

const UserInput = ({
    userName,
    numberOfParagraphs,
    handleUserNameChange,
    handleNumberOfParagraphsChange,
    handleSubmit
}) => {
    return (
        <>
        <form onSubmit={handleSubmit} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'}}>
            <label> User Name:
                <input
                    type="text"
                    value={userName}
                    onChange={handleUserNameChange}
                />
            </label>
            <label> Number of Paragraphs
                <input
                    type="number"
                    value={numberOfParagraphs}
                    onChange={handleNumberOfParagraphsChange}
                    min="0"
                    max="3000"
                />
            </label>
        </form>
        </>
    )
};

export default UserInput;