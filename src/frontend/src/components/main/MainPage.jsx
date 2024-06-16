import { useEffect, useState } from "react";
import axios from "axios"


export default function MainPage() {
    const [originalText, setOriginalText] = useState("");
    const [userInput, setUserInput] = useState('');
    const [cursorPosition, setCursorPosition] = useState(0);
    // const [isError, setIsError] = useState(false);

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
        const cursorPos = event.target.selectionStart;
        setUserInput(event.target.value);
        setCursorPosition(cursorPos);
    };

    const highlightText = () => {
        return originalText.split('').map((char, index) => {
          if (index === (userInput.length ? cursorPosition : 0)) {
            return <span className="highlight">{char}</span>;
          } else {
            return char;
          }
        });
      };

    return (
        <>
            <div className="main-container">
                <h1 className="typing-text">{highlightText()}</h1>
                <input type="text" className="Value" placeholder="Введите текст..." onChange={handleInputChange} autoFocus />
                <a href="http://localhost:5173/enter/" className="back">Back</a>
            </div>
        </>
    )
}