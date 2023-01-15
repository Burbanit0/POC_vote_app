import random
import algo

def randomize_list():
    numbers = ["1", "2", "3", "4", "5", "6", "7", "8"]
    random.shuffle(numbers)
    return numbers

def list_of_list():
    list = []
    for i in range(1, 12):
        list.append(randomize_list())
    return list

list_of_list = list_of_list()


methode_alternatif = algo.alternatif(list_of_list, 11)
methode_borda = algo.borda(list_of_list)

# Test de la méthode alternative:
print(methode_alternatif)

# Test de la méthode Borda:
print(methode_borda)
