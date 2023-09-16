import sys 

userText = sys.argv  
ans = ""

for i in range(1, len(sys.argv)): 
    ans += sys.argv[i] + " " 

print(ans)
