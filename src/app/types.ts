export type Words = {
  en: string;
  ua: string;
  transcription?: string;
}[];

export type TestType = {
  type: 'test';
  title: string;
  subtitle: string;
  ask: string;
  wrong: string;
  right: string;
  answers: AnswerType[];
  img: string;
  audio: string;
};

export type AnswerType = {
  value: string;
  isRight: boolean;
};
