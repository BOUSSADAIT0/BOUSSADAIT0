# Étapes finales · Final setup steps

## 1. Créer les repos projets sur GitHub

Sur [github.com/new](https://github.com/new), créez deux repos **publics** vides (sans README) :

- `ml-classification-project`
- `eda-visualization`

Puis poussez depuis votre machine :

```bash
# ML project
cd ../ml-classification-project
git push -u origin main

# EDA project
cd ../eda-visualization
git push -u origin main
```

## 2. Ajouter votre CV

Placez votre PDF ici : `assets/CV_Boussad_Ait_Djoudi.pdf`

## 3. Workflows GitHub Actions

Après le push du profil, vérifiez l'onglet **Actions** :

- `Generate contribution snake` → crée la branche `output` avec le serpent
- `Daily OP-Bento image Update` → génère l'image bento (1ère exécution ~2 min)

**Settings → Actions → General → Workflow permissions** : activez **Read and write**.

## 4. Bio GitHub & LinkedIn

Copiez les textes depuis [PROFILE_BIO.md](PROFILE_BIO.md).

## 5. Épingler les repos

Sur votre profil GitHub, épinglez `ml-classification-project` et `eda-visualization`.
