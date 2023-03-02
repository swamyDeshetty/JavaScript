#program to find the max number from  the array
def function(numbers):
    max=numbers[0]
    n=len(numbers)
    for i in range(1,n):
        if numbers[i]>max:
            max=numbers[i]
    return max
print(function([1,5,0,6,3,2,44]))

#counting the occurance of the character..
def function(nums):
    frequency={}
    for i in nums:
        if i in frequency:
            frequency[i]=frequency[i]+1
            # frequency[i]+=1
            # frequency[i]++   we can use the 3 methods to increment the values..
        else:
            frequency[i]=1
    return frequency
print(function('manusha'))


#word frequency

def wordfrequency(nums):
    array=nums.split(' ')
    frequency={}
    for i in array:
        if i in frequency:
            frequency[i]+=1
        else:
            frequency[i]=1
    return frequency
print(wordfrequency('swamy is the python and php developer'))

# counting the letters..

def lettercount(phrase):
    count={}
    for i in phrase:
        if i in count:
            count[i]+=1
        else:
            count[i]=1
    return count
print(lettercount('hara'))

#counting the wordss...

def wordcount(phase):
    array=phase.split(' ')
    return lettercount(array)
print(wordcount('php developer python developer developer'))


#converting the hours into the minutes..






#map function..

def mapping(nums):
    return nums.map(num=nums*2)

print(mapping([1,2,3,4]))