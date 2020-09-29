
  if (ball.y + ball.radius >= canvas.height || ball.y - ball.radius <= 0) {
    // play wallHitSound

    ball.velocityY = -ball.velocityY;
  }

   // if ball hit on right wall
   if (ball.x + ball.radius >= canvas.width) {
    // play scoreSound

    // then user scored 1 point
    user.score += 1;
    reset();
  }

  // if ball hit on left wall
  if (ball.x - ball.radius <= 0) {
    // play scoreSound

    // then ai scored 1 point
    ai.score += 1;
    reset();
  }