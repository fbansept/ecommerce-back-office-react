export const menu = [
    {
        titre: "Dashboard",
        lien: "/dashboard",
        sousMenu: [
            { titre: "Chiffre d'affaire", lien: "/dashboard/chiffre-affaire", icone: "sack-dollar" },
            { titre: "Stock", lien: "/dashboard/stock", icone: "cubes" },
            { titre: "Commandes", lien: "/dashboard/commandes", icone: "boxes-packing" }
        ]
    },
    {
        titre: "Utilisateurs",
        lien: "/utilisateurs",
        sousMenu: [
            { titre: "Gérer les utilisateurs", lien: "/utilisateurs/gestion", icone: "users" },
            { titre: "Exporter la liste", lien: "/utilisateurs/export", icone: "file-export" },
            { titre: "Importer la liste", lien: "/utilisateurs/import", icone: "file-import" }
        ]
    },
    {
        titre: "Produits",
        lien: "/produits",
        sousMenu: [
            { titre: "Gérer les produits", lien: "/produits/gestion", icone: "box" },
            { titre: "Exporter la liste", lien: "/produits/export", icone: "file-export" },
            { titre: "Importer la liste", lien: "/produits/import", icone: "file-import" }
        ]
    },
    {
        titre: "Categories",
        lien: "/categories",
        sousMenu: [
            { titre: "Gérer les categories", lien: "/categories/gestion", icone: "folder-tree" },
            { titre: "Exporter la liste", lien: "/categories/export", icone: "file-export" },
            { titre: "Importer la liste", lien: "/categories/import", icone: "file-import" }
        ]
    }
]
