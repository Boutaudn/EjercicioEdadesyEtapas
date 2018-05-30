let age = (prompt('Ingresa tu edad en numeros enteros para saber en qué etapa de tu vida estás.'))
switch (true) {
    case (age <= 3):
      alert('¡Eres un Toddler!');
    break;
    case (4 >= age < 5):
      alert('¡Eres un Preschool!');
    break;
    case (5 >= age < 11):
      alert('¡Eres un Gradeschooler!');
    break;
    case (11 >= age < 17):
      alert('¡Eres un Teen!');
    break;
    case (17 >= age < 21):
      alert('¡Eres un Young Adult!');
    break;
    case  (age >= 21):
      alert('¡Eres todo un adulto!');
    break;
    default:
      alert('¡ERROR! Ingresa una edad válida (en numeros enteros)');
      break;
  }