from datetime import date 
import csv

dt=date.today()
dt=dt.strftime("%d/%m/%y")

filename="test.csv"

expList=[]
stop=False

with open(filename,'a',newline="") as file:
    csvwriter=csv.writer(file)
    while not stop:
        exp=int(input("Enter amount of Expenses:"))
        if exp==0:
            stop=True
        else:
            csvwriter.writerow([dt,exp])
            expList.append(exp)
file.close()
print("Your  expenses today are " , expList)
print("Your Total expenses today are Rs." ,sum(expList))