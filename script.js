<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Registration</title>
  <style>
    body { font-family: Arial, sans-serif; }
    .valid { border: 2px solid green; }
    .invalid { border: 2px solid red; }
    #successMsg {
      color: green;
      font-weight: bold;
      margin-top: 10px;
      display: none;
    }
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
      padding: 5px;
    }
  </style>
</head>
<body>
  <h2>Event Registration Form</h2>
  <form id="regForm">
    <label>Name: <input type="text" id="name" required></label><br><br>
    <label>Email: <input type="email" id="email" required></label><br><br>
    <label>Phone: <input type="text" id="phone" required></label><br><br>
    <label>
      <input type="checkbox" id="confirm"> I confirm my details are correct
    </label><br><br>
    <button type="submit">Register</button>
  </form>

  <p id="successMsg">Registration Successful!</p>

  <h3>Registered Participants</h3>
  <table id="participantsTable">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </table>

  <script>
    const form = document.getElementById('regForm');
    const successMsg = document.getElementById('successMsg');
    const table = document.getElementById('participantsTable');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // prevent page reload

      let valid = true;

      // Validate inputs
      ['name', 'email', 'phone'].forEach(id => {
        const field = document.getElementById(id);
        if (field.value.trim() === '') {
          field.classList.add('invalid');
          field.classList.remove('valid');
          valid = false;
        } else {
          field.classList.add('valid');
          field.classList.remove('invalid');
        }
      });

      // Checkbox validation
      const confirmBox = document.getElementById('confirm');
      if (!confirmBox.checked) {
        alert("Please confirm your details before submitting.");
        valid = false;
      }

      if (valid) {
        // Add participant to table
        const row = table.insertRow();
        row.insertCell(0).textContent = document.getElementById('name').value;
        row.insertCell(1).textContent = document.getElementById('email').value;
        row.insertCell(2).textContent = document.getElementById('phone').value;

        // Show success message
        successMsg.style.display = 'block';
        setTimeout(() => successMsg.style.display = 'none', 3000);

        // Clear form
        form.reset();
        ['name','email','phone'].forEach(id => {
          document.getElementById(id).classList.remove('valid','invalid');
        });
      }
    });
  </script>
</body>
</html>
