# Star Trek LCARS Plugin for Home Assistant

![Star Trek Plugin](https://img.shields.io/badge/Home%20Assistant-Plugin-blue.svg)
![HACS](https://img.shields.io/badge/HACS-Compatible-green.svg)
![License](https://img.shields.io/badge/License-GPLv3-yellow.svg)

Plugin qui ajoute les formes géométriques authentiques LCARS au Star Trek Theme. Installation automatique via HACS !

## 🖼️ Aperçu

![Star Trek LCARS Shapes](https://via.placeholder.com/800x400/000000/FF9900?text=🖖+LCARS+GEOMETRIC+SHAPES)

*Formes géométriques authentiques : Bordures colorées, coins asymétriques, police futuriste*

## ✨ Caractéristiques

- 🎨 **Formes géométriques LCARS** : Bordures latérales colorées sur les cartes
- 🔶 **Coins asymétriques** : Style authentique Star Trek
- 🖋️ **Police futuriste** : Orbitron chargée automatiquement
- 🌈 **Sidebar multicolore** : Barre décorative avec dégradé LCARS
- ⚡ **Détection automatique** : S'active uniquement avec le Star Trek Theme
- 📱 **Responsive** : Adaptations mobile incluses

## 🎯 Prérequis

**Ce plugin nécessite le Star Trek Theme :**

**[Star Trek Theme](https://github.com/Le-Syl21/ha-star-trek-theme)**

```
Installation : HACS → Frontend → Themes → "Star Trek Theme"
```

## 🚀 Installation

### Via HACS (Recommandé)
1. ✅ **HACS** → **Frontend** → **Plugins**
2. ✅ **Recherchez** "Star Trek LCARS Plugin"
3. ✅ **Installez** le plugin
4. ✅ **Redémarrez** Home Assistant
5. ✅ **Activez** le thème "star-trek" dans votre profil

### Installation manuelle
1. Téléchargez `star-trek-lcars.js`
2. Placez dans `/config/www/community/star-trek-lcars/`
3. Ajoutez dans `configuration.yaml` :
```yaml
frontend:
  extra_module_url:
    - /hacsfiles/star-trek-lcars/star-trek-lcars.js
```
4. Redémarrez Home Assistant

## 🔄 Utilisation complète

### Installation complète recommandée :

1. **Star Trek Theme** (couleurs de base)
   ```
   HACS → Frontend → Themes → "Star Trek Theme"
   ```

2. **Star Trek LCARS Plugin** (formes géométriques)
   ```
   HACS → Frontend → Plugins → "Star Trek LCARS Plugin"
   ```

3. **Activation**
   ```
   Profil → Thème → "star-trek"
   ```

4. **Résultat** 🚀
   ```
   Interface LCARS authentique complète !
   ```

## 🎨 Fonctionnalités ajoutées

### Cartes LCARS
- ✅ Bordures colorées gauche et droite
- ✅ En-têtes avec dégradé orange→jaune
- ✅ Coins arrondis asymétriques
- ✅ Effets d'ombre et de profondeur

### Navigation spatiale
- ✅ Sidebar avec barre décorative multicolore
- ✅ Items avec formes géométriques LCARS
- ✅ Effets de survol avec translation
- ✅ Sélection avec dégradé authentique

### Boutons futuristes
- ✅ Forme asymétrique caractéristique
- ✅ Coin gauche coloré style LCARS
- ✅ Effets de survol avec élévation
- ✅ Dégradés orange vers jaune

### Typographie LCARS
- ✅ Police Orbitron condensée
- ✅ Texte en majuscules automatique
- ✅ Espacement des lettres augmenté
- ✅ Poids de police renforcé

## 🔧 Détection intelligente

Le plugin s'active **automatiquement** quand :
- ✅ Le thème "star-trek" est sélectionné
- ✅ Les couleurs LCARS sont détectées
- ✅ La variable CSS `--primary-color: #FF9900` est présente

Il se désactive automatiquement avec d'autres thèmes.

## 🤝 Intégration avec le thème

| Sans Plugin | **Avec Plugin** |
|---|---|
| ✅ Couleurs LCARS | ✅ **Couleurs + Formes** |
| ❌ Formes basiques HA | ✅ **Géométrie authentique** |
| ❌ Police standard | ✅ **Police futuriste** |
| ❌ Bordures simples | ✅ **Bordures colorées** |

## 📝 Changelog

### v1.0.0
- Formes géométriques LCARS authentiques
- Détection automatique du thème
- Police Orbitron intégrée
- Support responsive mobile

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/amelioration`)
3. Committez (`git commit -am 'Ajout fonctionnalité'`)
4. Push (`git push origin feature/amelioration`)
5. Ouvrez une Pull Request

## 📄 Licence

GPLv3 - Voir [LICENSE](LICENSE)

## 🖖 Remerciements

- Interface LCARS de Michael Okuda
- Communauté Home Assistant
- Live long and prosper! 🖖

---

**Note** : Non affilié à CBS/Paramount. Star Trek est une marque déposée.
