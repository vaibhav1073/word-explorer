export const formatNumber=(population)=> {
    if (population >= 1000000) {
      return (population / 1000000).toFixed(1) + " million";
    } else if (population >= 100000) {
      return (population / 100000).toFixed(1) + " lakhs";
    } else {
      return population.toLocaleString();
    }
  }