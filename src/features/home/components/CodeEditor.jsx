import styles from "./CodeEditor.module.css";

export function CodeEditor( {codeLines} ) {
    return (
        <div
            className={styles.editorShell}
            aria-label="Developer object code preview"
        >
            <div className={styles.editorBar}>
                <span className={styles.windowDotRed} />
                <span className={styles.windowDotYellow} />
                <span className={styles.windowDotGreen} />
            </div>

            <pre className={styles.codeBlock}>
                <code>
                    {codeLines.map((line, lineIndex) => (
                        <span
                            className={styles.codeLine}
                            key={`line-${lineIndex}`}
                        >
                            {line.map((part, partIndex) => (
                                <span
                                    className={
                                        part.tone
                                            ? styles[part.tone]
                                            : undefined
                                    }
                                    key={`${lineIndex}-${partIndex}`}
                                >
                                    {part.text}
                                </span>
                            ))}
                        </span>
                    ))}
                </code>
            </pre>
        </div>
    );
}