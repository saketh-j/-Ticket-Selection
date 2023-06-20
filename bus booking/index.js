
const boxes = document.getElementsByClassName('box');
const priceSection = document.getElementById('money');
const seatNumberSection = document.getElementById('seat-num');
const button = document.querySelector('.button');

let totalPrice = 0;

for (let i = 0; i < boxes.length; i++) {
  const box = boxes[i];
  const seatNumber = getSeatNumber(i);
  box.addEventListener('click', function() {
    box.style.backgroundColor = 'lightgreen';
  });

  box.addEventListener('click', function() {
    box.classList.toggle('selected');

    const selectedSeats = document.getElementsByClassName('selected');
    totalPrice = selectedSeats.length * 1000;
   
    const selectedSeatNumbers = Array.from(selectedSeats).map((seat, index) => getSeatNumber(index));
    seatNumberSection.textContent = `Selected Seats: ${selectedSeatNumbers.join(', ')}`;

    // Update the price section with the new total price
    priceSection.textContent = `Total Price: ${totalPrice} Rs`;
  });

}

button.addEventListener('click', function() {
    console.log('Total Price:', totalPrice);
    const selectedSeats = document.getElementsByClassName('selected');
    const selectedSeatNumbers = Array.from(selectedSeats).map((seat, index) => getSeatNumber(index));
    console.log('Selected Seats:', selectedSeatNumbers);
  });

function getSeatNumber(index) {
    const row = String.fromCharCode(65 + Math.floor(index / 2));
    const seat = (index % 2) + 1;
    return row + seat;
  }

  function booked(){
    alert("Thanks for Booking Tickets Confirmed")
  }