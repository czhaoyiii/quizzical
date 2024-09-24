# Quizzical
Quizzical is a quiz application that generates random trivia questions to test your knowledge. You can customize the quiz based on category, difficulty level, and question type (multiple choice or true/false). The app presents questions with real-time feedback on your score.

You can view the live version [here](https://czhaoyiii.github.io/quizzical/).

## Features
* Customizable Quiz: Choose trivia questions based on category, difficulty, and type (multiple choice or true/false).
* Randomized Trivia Questions: Questions are fetched from an API to keep quizzes fresh.
* Real-time Score Calculation: Instantly see how many questions you answered correctly.
* Responsive Design: Optimized for both desktop and mobile devices.

## Deployment
The project is deployed using GitHub Pages for easy hosting and sharing.

## Known Issues
* API Fetch Bug: Currently, the API fetches new questions without any rate limiting. This may cause issues if multiple requests are made quickly. Ideally, the API should allow fetching only once every 5 seconds.
  
  * Workaround: Try not to start a new quiz too frequently to avoid hitting API rate limits.

## How to Run Locally
1. Clone the repository:
```bash
git clone https://github.com/czhaoyiii/quizzical/
```
2. Navigate into the project directory:
```bash
cd quizzical
``` 
3. Install the required packages:
```bash
npm install
```
4. Run the development version:
```bash
npm run dev
```

## Potential Improvements
* Fixing the API fetch rate limit by ensuring only one request can be made every 5 seconds.
* Adding a timer for each question to increase challenge.
* Introducing a leaderboard to track the highest scores.
* Implementing difficulty progression as players advance through questions.
## License
This project is open-source and available under the MIT License.
