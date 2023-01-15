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
    score_min = 11
    indice_min = 0
    for cle in list(resultat):
        if resultat[cle] < score_min:
            score_min = resultat[cle]
            indice_min = cle
    
    return indice_min

# Suppression du moins bon choix de la liste des candidats 
def delete_choice(list_of_list, looser):
    for list in list_of_list:
        list.remove(looser)
    return list_of_list

# Procédure finale 
def alternatif(list_of_list, total):
    res = 0
    while (res < total/2): 
        resultat = score(list_of_list)
        winner_id = winner(resultat)
        res = resultat[winner_id]
        looser_id = looser(resultat)
        list_of_list = delete_choice(list_of_list, looser_id)
    return winner_id

# Methode Borda:
# Somme de tous les résultats, le gagnant est celui avec le nb 
# le plus faible

def borda(list_of_list):
    resultat = {}
    for list in list_of_list:
        for i in list:
            if i in resultat:
                resultat[i] += 1
            else:
                resultat[i] = 1
    return winner(resultat)

# Methode de Condorcet:
# 