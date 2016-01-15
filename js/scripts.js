// $(document).ready(function() {
//   $("form#quiz").submit(function(event) {
//
//     var dinner = $('input[name=optionsRadios1]:checked').val();
//     var home = $('input[name=optionsRadios2]:checked').val();
//     var self = $('input[name=optionsRadios3]:checked').val();
//
//     var questions = [dinner, home, self];
//
//     var cat = 0;
//     var witch = 0;
//     var mermaid = 0;
//
//     questions.forEach(function(question) {
//       if (question === 'a1') {
//         cat++;
//       } else if (question === 'a2') {
//         witch++;
//       } else if (question === 'a3') {
//         mermaid++;
//       } else {
//         alert("Please answer all questions")
//       }
//     });
//
//     if ((cat > witch) && (cat > mermaid)) {
//       alert('Cat');
//     } else if ((witch > cat) && (witch > mermaid)) {
//       alert('Witch');
//     } else {
//       alert('Mermaid');
//     }
//
//     event.preventDefault();
//   });
//
// });
