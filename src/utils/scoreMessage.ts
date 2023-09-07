export const getScoreMessage = (
    score: number,
    totalQuestions: number
  ): string[] => {
    const percentage = (score / totalQuestions) * 100;
    let mainText = "";
    let subText = "";
  
    if (percentage === 100) {
      mainText = "Congratulations 🎉👏!";
      subText = "You've achieved a perfect score. You're a true expert!";
      return [mainText, subText];
    } else if (percentage >= 90) {
      mainText = "Outstanding job 🌟!";
      subText = "Your score reflects your exceptional knowledge and skill.";
      return [mainText, subText];
    } else if (percentage >= 80) {
      mainText = "Great work!";
      subText = "You're well on your way to becoming a master in this area.";
      return [mainText, subText];
    } else if (percentage >= 70) {
      mainText = "Good job!";
      subText = "You've demonstrated a solid understanding of the material.";
      return [mainText, subText];
    } else if (percentage >= 60) {
      mainText = "Not bad!";
      subText = "You're making progress, and with a bit more effort, you'll excel.";
      return [mainText, subText];
    } else if (percentage >= 50) {
      mainText = "Keep going!";
      subText = "You're halfway there. Keep studying and improving.";
      return [mainText, subText];
    } else if (percentage < 50) {
      mainText = "Don't be discouraged, ";
      subText = "Use this as a learning opportunity and keep working hard. You'll get there!";
      return [mainText, subText];
    } else {
      mainText = "";
      subText = "Keep up the good work!";
      return [mainText, subText];
    }
  };
  