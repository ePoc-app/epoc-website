# Intégration LaTex
Dans l'éditeur WYSIWYG, vous pouvez rédiger du code LaTex. Pour l'instant l'aperçu du LaTex n'est pas disponible dans l'éditeur, mais vous pouvez visualiser le résultat sur l'application mobile. Pour obtenir un aperçu de votre cours tout en rédigeant vos expressions LaTex, vous pouvez lancer l'aperçu en simultané avec l'éditeur.
<div style="display: flex; height: 40rem">
    <img src="../../images/katex-demo-editor.png" alt="Demo éditeur">
    <img src="../../images/katex-demo-mobile.png" alt="Demo mobile">
</div>
Vous pouvez également utiliser ce [bac à sable](https://katex.org/#demo)

## Délimiteur
Pour rédiger vos expressions, vous devez utiliser des délimiteurs au début et à la fin de votre expression. Voici les délimiteurs à utiliser :

- `$$` Pour commencer une expression en mode "display"
- `$` Pour commencer une expression en mode "inline"

En résumé, le mode "display" rend les symboles plus grands, adaptés à une ligne distincte, tandis que le mode "inline" les rend plus petits, intégrés dans le texte. En mode "display", les équations sont centrées et n'ont pas de saut de ligne automatique, sauf si spécifié. En mode "inline", les sauts de ligne sont permis après certains symboles ou opérateurs.

## Examples
### "Display"
<div style="display: flex; gap: 1rem;">
    <pre>$$ \sum_{p = 0}^{2n + 1} (-1)^p $$</pre>
    <img src="../../images/katex-display.png" alt="Katex display">

</div>


### "Inline"
<div style="display: flex; gap: 1rem;">
    <pre>$ \sum_{p = 0}^{2n + 1} (-1)^p $</pre>
    <img src="../../images/katex-inline.png" alt="Katex inline">
</div>