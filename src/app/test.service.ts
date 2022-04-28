import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  WORDS: string[] = ["the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", "for",
    "on", "are", "as", "with", "his", "they", "at", "be", "this", "have", "from", "or", "one", "had",
    "by", "word", "but", "not", "what", "all", "were", "we", "when", "your", "can", "said", "there", "use",
    "an", "each", "which", "she", "do", "how", "their", "if", "will", "up", "other", "about", "out", "many",
    "then", "them", "these", "so", "some", "her", "would", "make", "like", "him", "into", "time", "has", "look",
    "two", "more", "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water",
    "been", "call", "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part"];

  givePrompt(length: number): string {
    let answer: string = "";
    for (let i = 0; i < length; i++) {
      let index: number = Math.floor(Math.random() * 100);
      answer += this.WORDS[index];
      if (i < length - 1)
        answer += " ";
    }
    return answer;
  }

  correct: number = 0;
  incorrect: number = 0;
  time: string = '';
  finishedPrompt: any;

  sendResults(incorrect: number, correct: number, time: string, finishedPrompt: Element) {
    this.correct = correct;
    this.incorrect = incorrect;
    this.time = time;
    this.finishedPrompt = finishedPrompt;
  }

  
  getCorrect(): number {
    return this.correct;
  }

  getIncorrect(): number {
    return this.incorrect; 
  }
  
  getTime(): string {
    return this.time; 
  }

  getFinishedPrompt(): Element {
    return this.finishedPrompt; 
  }
}
