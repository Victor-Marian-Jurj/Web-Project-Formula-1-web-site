let teamLikes = {
    team1: 0, 
    team2: 0,
    team4: 0, 
    team4: 0,
    team5: 0, 
    team6: 0,
    team7: 0, 
    team8: 0, 
    team9: 0, 
  };
  
  const updateLikes = (teamId, likes) => {
    document.getElementById(teamId).textContent = `${likes} Likes`;
  };

  document.getElementById("like-team1").addEventListener("click", () => {
    teamLikes.team1++;
    updateLikes("team1-likes", teamLikes.team1);
  });
  
  document.getElementById("like-team2").addEventListener("click", () => {
    teamLikes.team2++;
    updateLikes("team2-likes", teamLikes.team2);
  });
  
  document.getElementById("like-team3").addEventListener("click", () => {
    teamLikes.team3++;
    updateLikes("team3-likes", teamLikes.team3);
  });

  document.getElementById("like-team4").addEventListener("click", () => {
    teamLikes.team4++;
    updateLikes("team4-likes", teamLikes.team4);
  });

  document.getElementById("like-team5").addEventListener("click", () => {
    teamLikes.team5++;
    updateLikes("team5-likes", teamLikes.team5);
  });

  document.getElementById("like-team6").addEventListener("click", () => {
    teamLikes.team6++;
    updateLikes("team6-likes", teamLikes.team6);
  });

  document.getElementById("like-team7").addEventListener("click", () => {
    teamLikes.team7++;
    updateLikes("team7-likes", teamLikes.team7);
  });

  document.getElementById("like-team8").addEventListener("click", () => {
    teamLikes.team8++;
    updateLikes("team8-likes", teamLikes.team8);
  });

  document.getElementById("like-team9").addEventListener("click", () => {
    teamLikes.team9++;
    updateLikes("team9-likes", teamLikes.team9);
  });