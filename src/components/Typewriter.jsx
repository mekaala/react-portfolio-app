import React, {useState, useEffect, useRef} from 'react'
import '../styles/TypeWriter.css'

const FORWARD = 'forward';
const BACKWARD = 'backward';

const Typewriter = (words, keySpeed = 800, maxPauseAmount = 10) => {

    const [wordIndex, setWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(words[wordIndex].split(''));
    const [isStopped, setIsStopped] = useState(false);
    const direction = useRef(BACKWARD);
    const typingInterval = useRef();
    const letterIndex = useRef();

    const stop = () => {
        clearInterval(typingInterval.current);
        setIsStopped(true);
    };
    
    useEffect(() => {
        let pauseCounter = 0;
        if (isStopped) return;

        const typeLetter = () => {
            if (letterIndex.current >= words[wordIndex].length) {
                direction.current = BACKWARD;
                pauseCounter = maxPauseAmount;
                return;
            }
            const segment = words[wordIndex].split("");
            setCurrentWord(currentWord.concat(segment[letterIndex.current]));
            letterIndex.current = letterIndex.current + 1;
        }
        const backspace = () => {
            if (letterIndex.current === 0) {
              const isOnLastWord = wordIndex === words.length - 1;
          
              setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
              direction.current = FORWARD;
          
              return;
            }
          
            const segment = currentWord.slice(0, currentWord.length - 1);
            setCurrentWord(segment);
            letterIndex.current = currentWord.length - 1;
          }
        typingInterval.current = setInterval(() => {
            if (pauseCounter > 0) {
                pauseCounter = pauseCounter - 1;
                return;
            }
            if (direction.current === FORWARD) {
                typeLetter();
            } else {
                backspace();
            }
        }, keySpeed);
        
        return () => {
            clearInterval(typingInterval.current)
        };
    }, [currentWord, wordIndex, keySpeed, words, maxPauseAmount])
    
    return {
        word: (
            <span className={ `word ${ currentWord.length ? 'full' : 'empty' }` }>
                <span>{ currentWord.length ? currentWord.join('') : 0 }</span>
            </span>
        ),
        start: () => setIsStopped(false),
        stop
    }
}

export default Typewriter;