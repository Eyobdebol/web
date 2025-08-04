name = input("Enter your name:")

print("Enter your mark for each subject: ")

maths = int(input("Maths Mark: "))
english = int(input("English Mark: "))
biology = int(input("Biology Mark: "))
physics = int(input("Physics Mark: "))
chemistry = int(input("Chemistry Mark: "))

totalmarks = maths + english + biology + physics + chemistry

average = totalmarks / 5

grade = ""

if average >= 90:
    grade = "A"
elif average >= 80:
    grade = "B"   
elif average >= 70:
    grade = "C"             
elif average >= 60:
    grade = "D"
else:
    grade = "F"

print("Name: ", name)
print("Maths: ", maths)
print("English: ", english)
print("Biology: ", biology)
print("Physics: ", physics)
print("Chemistry: ", chemistry)

print("Total Marks: ", totalmarks)
print("Average Marks: ", average)
print("Grade: ", grade)







 