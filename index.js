function superbowlWin(record) {
    const winningYear = record.find(item => item.result === "W");
    if (winningYear) {
      return winningYear.year;
    } else {
      return undefined;
    }
  }
