const customTheme = {
    titleColor: "#f3f3f3",
    textColor: "#a8a8a8",
    bgColor: "#8b0000",
    theme: {
      lang: {
        JupyterNote: { color: "#DA5B0B" },
        Python: { color: "#3572A5" },
        Ruby: { color: "#701516" }
      }
    }
  };
  
  module.exports = {
    ...require('./themes'),
    customTheme
  };
  