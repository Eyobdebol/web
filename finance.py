balance = 0 
transaction = []

print("Welcome to finance tracker")

while True:
  print("1. Add income: ")
  print("2. Add Expense: ")
  print("3. View Balance: ")
  print("4. View Transactions: ")

  choice = input("Choose: ")

  if choice == "1":
      amount = float(input("Enter income amount: "))
      balance += amount
      transaction.append("Income:" + str(amount))  

  elif choice == "2":
     amount = float(input("Enter expense amount:" ))
     balance-= amount
     transaction.append("Expense:" + str(amount))

  elif choice == "3":
     print("Current balance:", balance)

  elif choice == "4":
     print("Transactions:")      
                            
