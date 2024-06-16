import { useEffect, useState } from "react";
import axios from "axios"


export default function MainPage() {
    const [originalText, setOriginalText] = useState("");
    const [userInput, setUserInput] = useState('');
    const [cursorPosition, setCursorPosition] = useState(0);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/texts/')
            .then(response => {
                if (response.status == 200) {
                    setOriginalText(response.data.join(" "));
                } else {
                    throw new Error("Network response was not ok.")
                }
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });
    }, []);
    const handleInputChange = (event) => {
        const {value} = event.target;
        const cursorPos = event.target.selectionStart;
        setUserInput(value);
        setCursorPosition(cursorPos);
        if (cursorPos === originalText.length) {
            let localObj = JSON.parse(localStorage.getItem("user_data"));
            axios({
                method: "POST",
                url: "http://127.0.0.1:8000/api/info/",
                data: {
                    identifier: localObj["identifier"],
                    textDone: true,
                    textSpeed: 100,
                },
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Error while sending info", error);
            })
        }

        const isCharCorrect = value[cursorPos - 1] === originalText[cursorPos - 1];
        setIsError(!isCharCorrect);
    };

    const highlightText = () => {
        return originalText.split('').map((char, index) => {
            let className = '';
            if (index < userInput.length) {
                className = char === userInput[index] ? 'correct' : 'error';
            } else if (index === cursorPosition) {
                className = 'highlight';
            }

            return <span className={className} key={index}>{char}</span>;
        });
    };

    return (
        <>
            <div className="main-container">
                <h1 className="typing-text">{highlightText()}</h1>
                <input type="text" className="Value" placeholder="Введите текст..." onChange={handleInputChange} autoFocus />
                <a href="http://localhost:5173/" className="back">Back</a>
            </div>
        </>
    )
}
