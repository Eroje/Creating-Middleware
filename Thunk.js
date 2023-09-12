const remindMeTo = task => {
    return `Remember to ${task}!!!`;
  }
  
  const remindMeLater = task => {
    return () => {
      return remindMeTo(task);
    }
  }
  
  console.log(remindMeTo('call mom')); // Prints Remember to call mom!!!
  
  const reminder = remindMeLater('get groceries');

  console.log(reminder()); // Prints Remember to get groceries!!!