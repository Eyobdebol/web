balance = 0.0
transactions = []

print("Welcome to the Finance Tracker!")

while True:
  print("1. Add income: ")
  print("2. Add expense: ")
  print("3. View balance: ")
  print("4. View transactions: ")
  print("5. Exit")

  choice = input("Choose: ")
  if choice == "1":
      amount = float(input("Enter income amount: "))
      balance += amount
      transactions.append(f"Income: +{amount}")
     
  elif choice == "2":
      amount = float(input("Enter expense amount: "))
      balance -= amount
      transactions.append(f"Expense: -{amount}")

  elif choice == "3":
     print("Current balance: ", balance)       

  elif choice == "4":
      print("Transactions: ")
      for t in transactions:
          print(t)
          
  elif choice == "5":
      print("Goodbye!")
      break
        
