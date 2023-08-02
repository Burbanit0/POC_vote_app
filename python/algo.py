# Le plus important dans ce projet est la partie du compte des voix
# Il faut donc recalculer le résultat à chaque entrée

# Le model est : 
# const ListSchema = new Schema({
    # user_id: {type: Schema.Types.ObjectId, ref: 'User', unique:true},
    # majoritaire: {type : String, default:null},
    # ordre: { type: [String], default: null},
    # poids: { image: {type: String, default:null}, poids: {type: Number, default: null}},
    # note: { image:{type: String, default:null}, note: {type:Number, defaults: null}},
    # selection: {type: String, default:null}
#   });

# A partir de ce modele il faut calculer les résultats: 

# Separation des choix dans chacune des catégories 
def separate_list(collection):
    majoritaire = []
    ordre = []
    poids = []
    note = []
    selection = []
    total = 0
    for choice in collection:
        majoritaire.append(choice.majoritaire)
        ordre.append(choice.ordre)
        poids.append(choice.poids)
        note.append(choice.note)
        selection.append(choice.selection)
        total+=1

    return majoritaire, ordre, poids, note, selection, total 

# Calcul dans le cas d'un vote majoritaire 
# Selection du candidat ayant le plus de voix

def calculMajoritaire(list):
    resultat = { "1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0}
    total = list.len()
    for choice in list:
        if choice == "1":
            resultat["1"] += 1
        elif choice == "2":
            resultat["2"] += 1
        elif choice == "3":
            resultat["3"] += 1
        elif choice == "4":
            resultat["4"] += 1
        elif choice == "5":
            resultat["5"] += 1
        elif choice == "6":
            resultat["6"] += 1
        elif choice == "7":
            resultat["7"] += 1
        elif choice == "8":
            resultat["8"] += 1
        else:
            "error"
    return resultat


# Calcul dans le cas d'une liste ordonnée 
# Il existe de nombreuses méthodes lors d'un classement 

# Méthode alternative: 
    # il faut comptabilisé les 1ers choix 
    # si un candidat fait > 50% 
    # sinon on supprime le candidat avec le moins de vote de la liste 
    # recalcul des voix et on recommence. 

def score(list_of_list):
    # Dictionnaire pour stocker les résultats pour chaque candidat
    resultat = {}

    # Pour chaque liste on récupère le premier choix
    for list in list_of_list:
        if list[0] in resultat:
            resultat[list[0]] += 1
        else:
            resultat[list[0]] = 1
    return resultat

# Il faut sortir le meilleur résultat et son score 
def winner(resultat):
    score_max = 0
    indice_max = 0
    for cle in list(resultat):
        if resultat[cle] > score_max:
            score_max = resultat[cle]
            indice_max = cle
    
    return indice_max

# Il faut sortir le moins bon des resultats
def looser(resultat):
    score_min = 121
    indice_min = 0
    for cle in list(resultat):
        if resultat[cle] < score_min:
            score_min = resultat[cle]
            indice_min = cle
    return indice_min

# Suppression du moins bon choix de la liste des candidats 
def delete_choice(list_of_list, looser):
    new_list = [[x for x in sublist if x != looser] for sublist in list_of_list]
    return new_list

# Procédure finale 
def alternatif(list_of_list, total):
    res = 0
    new_list = list_of_list.copy()
    while (res < total/2): 
        resultat = score(new_list)
        winner_id = winner(resultat)
        res = resultat[winner_id]
        looser_id = looser(resultat)
        new_list = delete_choice(new_list, looser_id)
    return winner_id

# Methode Borda:
# Somme de tous les résultats, le gagnant est celui avec le nb 
# le plus faible

def borda(list_of_list):
    resultat = {}
    for list in list_of_list:
        for i in range(0, len(list)):
            if list[i] in resultat:
                resultat[list[i]] += i+1
            else:
                resultat[list[i]] = i+1
    return looser(resultat)

# Methode de Condorcet:
def transfo(list_of_list):
    votes = []
    for list in list_of_list:
        result = {}
        for i in range (1,len(list)+1):
            result[list[i-1]]=i
        votes.append(result)
    return votes 

# Methode de Nanson 
# Elimination à chaques tours des candidats ayant un score supérieur
# a la moyenne des scores  
def borda_score(list_of_list):
    resultat = {}
    for list in list_of_list:
        for i in range (len(list)):
            if list[i] in resultat:
                resultat[list[i]] += i+1
            else:
                resultat[list[i]] = i+1
    return resultat

def average_res(resultat):
    average = 0
    for _, value in resultat.items():
        average += value/len(list(resultat))
    return average

def reduce(resultat, list_of_list, average):
    for key, value in resultat.items():
        if (value >= average):
            list_of_list = delete_choice(list_of_list, key)
    return list_of_list

def nanson(list_of_list):
    new_list = list_of_list.copy()
    while len(new_list[0]) > 1:
        res = borda_score(new_list)
        moy = average_res(res)
        new_list = reduce(res, new_list, moy)
    return new_list[0][0]