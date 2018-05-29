switch (prompt('Ingresa tu edad en numeros enteros para saber en qué etapa de tu vida estás.')) {
    case '1', '2', '3' :
      alert('¡Eres un Toddler!');
    case '4', '5':
      alert('¡Eres un Preschool!');
    case '6', '7', '8', '9', '10', '11':
      alert('¡Eres un Gradeschooler!');
    case '12', '13', '14', '15', '16', '17':
      alert('¡Eres un Teen!');
    case '18', '19', '20', '21':
      alert('¡Eres un Young Adult!');
    default:
      alert('¡Eres todo un adulto!');
      break;
  }