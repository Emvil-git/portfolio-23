import styles from './Ticker.module.scss'

export default function Ticker ({tickerText} : {tickerText:string}) {
    const handleTickertext = ():string => {
        // const paddedTickerText = tickerText + '  '

        return `${tickerText.toUpperCase().repeat(9)} `
    }
    const handleTickertextNext = ():string => {
        // const paddedTickerText = tickerText + '  '

        return ` ${tickerText.toUpperCase().repeat(9)}`
    }

    return (
        <div>
            <p className={styles.ticker}>
                <span className={styles.tickitem}>{handleTickertext()}</span>
            </p>
            <p className={`${styles.ticker} ${styles.ticker2}`}>
              <span className={styles.tickitem}>{handleTickertextNext()}</span>
            </p>
        </div>
    )
}