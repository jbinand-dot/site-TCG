function compterCases() {
  const cases = document.querySelectorAll('input[type="checkbox"]');
  const nombre = cases.length;

  const compteurElement = document.getElementById('compteur');
  if (compteurElement) {
    compteurElement.textContent = ` ${nombre}`;
  }

  return nombre;
}

function compterCasesCochees() {
  const cases = document.querySelectorAll('input[type="checkbox"]');
  return Array.from(cases).filter(c => c.checked).length;
}

function afficherNombreCasesCochees() {
  const nb = compterCasesCochees();
  const div = document.getElementById('compteCoche');
  if (div) {
    div.textContent = ` ${nb}`;
  }
}

function compterCasesNonCochees() {
  const cases = document.querySelectorAll('input[type="checkbox"]');
  const compteur = Array.from(cases).filter(c => !c.checked).length;

  const div = document.getElementById('compteNonCoche');
  if (div) {
    div.textContent = `${compteur}`;
  }
}

function afficherPourcentageCochees() {
  const cases = document.querySelectorAll('input[type="checkbox"]');
  const total = cases.length;
  const cochees = compterCasesCochees();
  const pourcentage = total === 0 ? 0 : Math.round((cochees / total) * 100);

  const div = document.getElementById('pourcentage');
  if (div) {
    div.textContent = `${pourcentage}% (${cochees} / ${total})`;
  }

  // Stocker le pourcentage dans localStorage avec la clé spécifique à la page
  const pageId = window.location.pathname.split('/').pop(); // ex: '151.html'
  localStorage.setItem(pageId + '_pourcentage', pourcentage);
}

// Compteurs pour cases data-holo="true" non cochées
function compterCasesNonCocheesHolo() {
  const cases = document.querySelectorAll('input[type="checkbox"][data-holo="true"]');
  const compteur = Array.from(cases).filter(c => !c.checked).length;

  const div = document.getElementById('compteNonCocheHolo');
  if (div) {
    div.textContent = `${compteur}`;
  }
}

// Compteurs pour cases data-ex="true" non cochées
function compterCasesNonCocheesEx() {
  const cases = document.querySelectorAll('input[type="checkbox"][data-ex="true"]');
  const compteur = Array.from(cases).filter(c => !c.checked).length;

  const div = document.getElementById('compteNonCocheEx');
  if (div) {
    div.textContent = `${compteur}`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const pageId = window.location.pathname.split('/').pop(); // Pour clé localStorage cohérente
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Restaurer l’état des cases depuis localStorage
  checkboxes.forEach(checkbox => {
    const storageKey = pageId + '_' + checkbox.id;
    const saved = localStorage.getItem(storageKey);
    checkbox.checked = saved === 'true';

    checkbox.addEventListener('change', () => {
      localStorage.setItem(storageKey, checkbox.checked);

      // Mise à jour des compteurs + pourcentage
      afficherNombreCasesCochees();
      compterCasesNonCochees();
      afficherPourcentageCochees();
      compterCasesNonCocheesHolo();
      compterCasesNonCocheesEx();
    });
  });

  // Mise à jour initiale des compteurs + pourcentage
  compterCases();
  afficherNombreCasesCochees();
  compterCasesNonCochees();
  afficherPourcentageCochees();
  compterCasesNonCocheesHolo();
  compterCasesNonCocheesEx();

  // Bouton reset : décocher toutes les cases et nettoyer localStorage
  const btn = document.getElementById('resetBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      checkboxes.forEach(c => {
        const key = pageId + '_' + c.id;
        c.checked = false;
        localStorage.removeItem(key);
      });

      afficherNombreCasesCochees();
      compterCasesNonCochees();
      afficherPourcentageCochees();
      compterCasesNonCocheesHolo();
      compterCasesNonCocheesEx();
    });
  }

  // Bouton tout cocher
  const btnToutCocher = document.getElementById('toutcocher');
  if (btnToutCocher) {
    btnToutCocher.addEventListener('click', () => {
      checkboxes.forEach(c => {
        c.checked = true;
        const storageKey = pageId + '_' + c.id;
        localStorage.setItem(storageKey, 'true');
      });

      afficherNombreCasesCochees();
      compterCasesNonCochees();
      afficherPourcentageCochees();
      compterCasesNonCocheesHolo();
      compterCasesNonCocheesEx();
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const pages = [
    'blk.html', 'wht.html', 'rd.html', 'av.html', 'evp.html',
    'ed.html', 'cs.html', 'fn.html', 'mc.html', 'ft.html',
    'fp.html', '151.html', 'fo.html', 'ep.html', 'ev.html'
  ];

  // Fonction de filtrage des séries selon leur progression stockée
  function filtrerSeries(filter) {
    pages.forEach(page => {
      const pctKey = page + '_pourcentage';
      const pct = parseInt(localStorage.getItem(pctKey) || '0', 10);
      const elt = document.querySelector(`#pct-${page}`);
      if (!elt) return;

      // Le conteneur parent .contour est à 3 niveaux au-dessus de #pct-xxx.html
      // ici on remonte au conteneur .contour
      const conteneur = elt.closest('.contour');
      if (!conteneur) return;

      let afficher = true;
      switch(filter) {
        case 'non_commencee':
          afficher = (pct === 0);
          break;
        case 'commencee':
          afficher = (pct > 0 && pct < 100);
          break;
        case 'complete':
          afficher = (pct === 100);
          break;
        default:
          afficher = true;
      }
      conteneur.style.display = afficher ? '' : 'none';
    });
  }

  // Initialisation de la barre de progression (existant déjà)
  pages.forEach(page => {
    const pct = parseInt(localStorage.getItem(page + '_pourcentage') || '0', 10);
    const elt = document.getElementById('pct-' + page);
    if (elt) {
      elt.textContent = `${pct}%`;

      const container = document.createElement('div');
      container.classList.add('progress-container');

      const bar = document.createElement('div');
      bar.classList.add('progress-bar');

      let color = '#ff0000'; // rouge
      if (pct >= 70) color = '#00cc00'; // vert
      else if (pct >= 30) color = '#ff9900'; // orange

      bar.style.backgroundColor = color;
      container.appendChild(bar);
      elt.appendChild(container);

      setTimeout(() => {
        bar.style.width = pct + '%';
      }, 100);
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const exportBtn = document.getElementById('exportDataBtn');
  const importBtn = document.getElementById('importDataBtn');
  const importInput = document.getElementById('importDataInput');

  // Exporter localStorage ciblé
  exportBtn.addEventListener('click', () => {
    // On récupère uniquement les clés pertinentes (ex : celles qui contiennent '_pourcentage' ou les checkbox par page)
    const dataToExport = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      // Ajuste ce filtre selon tes clés
      if (key.includes('_pourcentage') || key.includes('.html_')) {
        dataToExport[key] = localStorage.getItem(key);
      }
    }
    const dataStr = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'progression_pokemon.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  });

  // Ouvrir le sélecteur de fichier quand on clique sur Importer
  importBtn.addEventListener('click', () => {
    importInput.value = null; // Reset input pour permettre re-upload même fichier
    importInput.click();
  });

  // Lire et importer le fichier JSON
  importInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const importedData = JSON.parse(event.target.result);
      Object.entries(importedData).forEach(([key, value]) => {
        localStorage.setItem(key, value);
      });
      alert('Données importées avec succès ! La page va se recharger.');
      location.reload(); // <--- recharge la page automatiquement
    } catch (err) {
      alert('Erreur lors de l’importation : fichier JSON invalide.');
    }
  };
  reader.readAsText(file);
});
});

document.addEventListener('DOMContentLoaded', () => {
  const titres = document.querySelectorAll('.contour2');

  titres.forEach(titreDiv => {
    titreDiv.style.cursor = 'pointer';

    titreDiv.addEventListener('click', () => {
      const containerSerie = titreDiv.closest('.container.text-center.serie');
      if (!containerSerie) return;

      const colonnes = Array.from(containerSerie.querySelectorAll('div[class*="col-"]'));
      const parentColDuTitre = titreDiv.closest('div[class*="col-"]');

      let commencer = false;
      colonnes.forEach(col => {
        if (col === parentColDuTitre) {
          commencer = true;
          return; // On ne cache pas la colonne du titre lui-même
        }
        if (commencer) {
          // Si la colonne contient une div .contour2, on ne la cache pas
          if (col.querySelector('.contour2')) {
            return; // ne rien faire
          }
          // Sinon toggle display
          col.style.display = (col.style.display === 'none') ? '' : 'none';
        }
      });
    });
  });
});