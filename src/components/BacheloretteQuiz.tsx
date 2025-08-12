import React, { useState, useEffect } from "react";
import { questions } from './questions';

import * as S from './styled';
import {
  AnswerButtonWrapper, AnswerNotRightButton, AnswerRightButton,
  AnswerWrapper,
  ButtonWrapper, Footer,
  GoButton,
  Header,
  NavNextButton, NavPrevButton, ProgressBarContainer, ProgressBarFill, ProgressWrapper,
  ReadyText, ResultIcon, ResultTextWrapper, ResultWrapper,
  RulesWrapper,
  ShowAnswer,
} from './styled'

type ConfettiPiece = {
  id: number;
  x: number;
  y: number;
  emoji: string;
  size: number;
  duration: number;
  delay: number;
};

const BacheloretteQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
    } else {
      setShowResults(true);
      createConfetti();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowAnswer(false);
    }
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const recordAnswer = (isCorrect: boolean) => {
    setAnswers({
      ...answers,
      [currentQuestion]: isCorrect
    });
  };

  const correctAnswers = Object.values(answers).filter(answer => answer).length;
  const totalAnswers = Object.values(answers).length;
  const accuracy = totalAnswers > 0 ? Math.round((correctAnswers / totalAnswers) * 100) : 0;

  const resetQuiz = () => {
    setShowResults(false);
    setCurrentQuestion(0);
    setShowIntro(true);
    setConfetti([]);
    setAnswers({});
  };

  const createConfetti = () => {
    const newConfetti = [];
    const emojis = ['❤️', '💍', '👰‍♀️', '🤵', '🎉', '🎊', '🎶', '🫶'];

    // Добавляем сердечки и лица Шрека
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: Math.random(),
        x: Math.random() * 100,
        y: -10,
        emoji: Math.random() > 0.3 ? '❤️' : '🧅', // 70% сердечек, 30% Шрека
        size: Math.random() * 20 + 15,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5
      });
    }

    setConfetti(newConfetti);

    // Удаляем конфетти через 10 секунд
    setTimeout(() => {
      setConfetti([]);
    }, 10000);
  };

  useEffect(() => {
    if (showResults) {
      createConfetti();
    }
  }, [showResults]);

  if (showIntro) {
    return (
      <S.Main>
        <S.Header>
          <S.MainIcon>👰‍♀️</S.MainIcon>
          <h1>ДЕВИЧНИК</h1>
        </S.Header>
        <h2>Вы хорошо знаете друг друга?</h2>
        <p>
          Дорогие подруги! Сегодня мы проверим, насколько хорошо Маша знает своего Егора!</p>
        <S.ReadyText>Готовы к весёлым откровениям и смешным моментам?</S.ReadyText>
        <S.RulesWrapper>
          <p>
            <span>Правила:</span> Задаём вопрос Маше, она отвечает, а потом смотрим, что на самом деле ответил Егор. Оцените, правильно ли
            ответила Маша!
          </p>
        </S.RulesWrapper>
        <S.GoButton
          onClick={() => setShowIntro(false)}>
          Начать опрос!💍
        </S.GoButton>
      </S.Main>
    )
  }

  if (showResults) {
    return (
      <S.ResultWrapper>
        {/* Конфетти */}
        {confetti.map(piece => (
          <div
            key={piece.id}
            style={{
              position: 'absolute',
              left: `${piece.x}%`,
              top: `${piece.y}%`,
              fontSize: `${piece.size}px`,
              animation: `fall ${piece.duration}s linear ${piece.delay}s forwards`,
              opacity: 0,
            }}>
            {piece.emoji}
          </div>
        ))}

        <S.Main>
          {/* Header */}
          <S.Header>
            <h2>Результаты опроса</h2>
            <p>Маша прошла все вопросы!</p>
          </S.Header>

          <S.ResultTextWrapper>
            <S.ResultIcon>{accuracy >= 80 ? '🎉' : accuracy >= 60 ? '👍' : '😊'}</S.ResultIcon>

            <h2 style={{marginTop: '10px'}}>
              {correctAnswers} из {totalAnswers}
            </h2>

            <div>
              <h2 style={{marginBottom: '16px'}}>Правильных ответов: {accuracy}%</h2>
              <div style={{marginBottom: '16px'}}>
                {accuracy >= 80
                  ? 'Маша отлично знает своего Егора!'
                  : accuracy >= 60
                  ? 'Маша хорошо знает своего Егора!'
                  : 'Маша знает своего Егора, но есть над чем поработать!'}
              </div>
            </div>

            <div>
              <div>
                <span>Верных ответов: </span>
                <span>{correctAnswers}</span>
              </div>
              <div>
                <span>Ошибок: </span>
                <span>{totalAnswers - correctAnswers}</span>
              </div>
            </div>

              <S.GoButton
                onClick={() => {resetQuiz()}}>
                Пройти снова
              </S.GoButton>

          </S.ResultTextWrapper>

          <S.Footer>Подготовлено с любовью для самого важного девичника 💖</S.Footer>
        </S.Main>

        <style>
          {`
            @keyframes fall {
              0% {
                 transform: translateY(0) rotate(0deg);
                  opacity: 1;
              }
              100% {
                  transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
              }
            }
          `}
        </style>
      </S.ResultWrapper>
    )
  }

  return (
    <S.Main>
      {/* Header */}
      <S.MainHeader>
        <h1>Вы хорошо знаете друг друга?</h1>
        <p className="text-purple-100">
          Вопрос {currentQuestion + 1} из {questions.length}
        </p>
      </S.MainHeader>

      {/* Question Card */}
      <S.Card>
        <h2>{questions[currentQuestion].q}</h2>

        {/* Answer Section */}
        {showAnswer && (
          <S.AnswerWrapper>
            <h3>Что ответил Егор:</h3>
            <p>✅ {questions[currentQuestion].a}</p>
          </S.AnswerWrapper>
        )}

        {/* Evaluation Buttons */}
        {!showAnswer && currentQuestion in answers && <p>{answers[currentQuestion] ? '✅ Правильно!' : '❌ Не правильно'}</p>}

        {/* Controls */}
        <S.ButtonWrapper>
          {/* Show Answer Button */}
          {!showAnswer && !(currentQuestion in answers) && <S.ShowAnswer onClick={toggleAnswer}>Показать ответ Егора💡</S.ShowAnswer>}

          {/* Evaluation Buttons */}
          {showAnswer && !(currentQuestion in answers) && (
            <S.AnswerWrapper>
              <h3>Правильно ли ответила Маша?</h3>
              <S.AnswerButtonWrapper>
                <S.AnswerNotRightButton
                  onClick={() => {
                    recordAnswer(false)
                    nextQuestion();
                  }}>
                  Не правильно
                </S.AnswerNotRightButton>
                <S.AnswerRightButton
                  onClick={() => {
                    recordAnswer(true)
                    nextQuestion();
                  }}>
                  Правильно ✅
                </S.AnswerRightButton>
              </S.AnswerButtonWrapper>
            </S.AnswerWrapper>
          )}

          {/* Navigation */}
          <S.NavButtonWrapper>
            <NavPrevButton onClick={prevQuestion} disabled={currentQuestion === 0}>
              ← Назад
            </NavPrevButton>
            <NavNextButton onClick={nextQuestion} disabled={!(currentQuestion in answers)}>
              {currentQuestion === questions.length - 1 ? 'Завершить' : 'Следующий вопрос'} →
            </NavNextButton>
          </S.NavButtonWrapper>
        </S.ButtonWrapper>

        {/* Progress Bar */}
        <S.ProgressWrapper>
          <div>
            <span>Прогресс </span>
            <span>
              {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          <S.ProgressBarContainer>
            <S.ProgressBarFill width={(currentQuestion + 1) / questions.length * 100} />
          </S.ProgressBarContainer>
        </S.ProgressWrapper>
      </S.Card>

      {/* Footer */}
      <S.Footer>
        Подготовлено с любовью для самого важного девичника 💖
      </S.Footer>
    </S.Main>
  )
};

export default BacheloretteQuiz;