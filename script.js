
     const questions = [
         {
               'Quez' : "Stand for HTML ?",
                'a': " Hyper Text Markup Language",
                'b': "Hyper Text Model Language",
                'c': "Hyper Title Model Language",
                'd': "None of these",
                'correct': 'a',   
            },
        {
                'Quez': 'The first version of HTML was written by ?',
                'a': ' Tim Berners-Lee in 1993',
                'b': 'Mr and Mrs Smith',
                'c': 'a and b',
                'd': 'None of these',
                'correct': 'c',
           },
        {
            'Quez': 'Stand for JS ?',
            'a': ' JavaScript',
            'b': 'Hyper Text Model Language',
            'c': 'JustScript',
            'd': 'None of these',
            'correct': 'a',
        },
 ];

 let index = 0;
 let score = 0;
 let  incorrect = 0;

 const QuestionBox = document.getElementById("QuestionBox");
 const optionsLabels = document.querySelectorAll('.option');

//Arrow funcation  
 const loadQuestion = () => {
     const data = questions[index];
     QuestionBox.innerText = `${index + 1}. ${data.Quez}`;
     optionsLabels.forEach((label, idx) => {
         label.innerText = `${String.fromCharCode(97 + idx)})
          ${data[String.fromCharCode(97 + idx)]}`;
     });
     document.querySelector('input[name="option"]:checked').checked = false;
 };


 const checkAnswer = () => {
     const selectedOption = document.querySelector('input[name="option"]:checked');
     if (selectedOption) {
         if (selectedOption.value == questions[index].correct) {
             score += 1;
         }
         else{

             incorrect++; 
         }
         index++;
         if (index < questions.length) {
             loadQuestion();
         } else {

             alert(`Quiz ended. Your score is ${score}/${questions.length}`);      
        
         }

     } else {
         alert('Please select an option');
     }
 };
 document.querySelector('.btn').addEventListener('click', checkAnswer);
  loadQuestion();





