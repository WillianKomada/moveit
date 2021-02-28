import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const { 
    minutes, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown 
  } = useContext(CountdownContext)

  // padStart(2, '0') = pega 2 posições, se não tiver 2 preenche com 0 no início
  // split('') = separa as posições

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  // Ao clicar no botão ele torna verdade. Por padrão é false, então o contador não diminue

  return (
    <div>
      <div className={styles.countdownContainer}>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </div>

    {hasFinished ? (
      <button
        disabled
        className={styles.countdownButton}
      >
        Ciclo encerrado
    </button>
    ) : (
      <>
         { isActive ? (
          <button 
            type="button" 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
            onClick={resetCountdown}
          >
            Abandonar ciclo
          </button>
        ) : (
          <button 
            type="button" 
            className={styles.countdownButton}
            onClick={startCountdown}
          >
            {/* { isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo' } */}
            Iniciar um ciclo
          </button>
        ) }
      </>
    )}
    </div>
  );
}