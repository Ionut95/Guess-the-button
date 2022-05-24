function checkingWinner(buttonNumber) {
			if (buttonNumber == Math.floor(Math.random() * 3) + 1) {
				return alert('You win!');
			}
			return alert('You lose!');
		}