import random
import algo
import condorcet

def randomize_list():
    numbers = ["1", "2", "3", "4", "5", "6", "7", "8"]
    random.shuffle(numbers)
    return numbers

def build_list():
    list = []
    for i in range(1, 12):
        list.append(randomize_list())
    return list

list_of_choice = build_list()

methode_alternatif = algo.alternatif(list_of_choice, 11)
methode_borda = algo.borda(list_of_choice)

ex_votes = algo.transfo(list_of_choice)
ex_candidates = ["1", "2", "3", "4", "5", "6", "7", "8"]

def methode_Condo(candidates, votes):
    evaluator = condorcet.CondorcetEvaluator(candidates=candidates, votes=votes)
    winners, _ = evaluator.get_n_winners(8)
    return winners[0]

methode_condorcet = methode_Condo(ex_candidates, ex_votes)
# Test de la méthode alternative:
# print(methode_alternatif)

# Test de la méthode Borda:
# print(methode_borda)

# Test de la méthode de Condorcet
print(methode_alternatif, methode_borda, methode_condorcet)