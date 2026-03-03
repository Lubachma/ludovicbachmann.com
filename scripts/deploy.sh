#!/bin/bash
# Deploy to Infomaniak via lftp (FTPS)

set -e

# Charge les variables d'environnement
if [ -f .env ]; then
    source .env
else
    echo -e "${RED}Erreur: fichier .env introuvable.${RESET}"
    echo "Copie .env.example vers .env et remplis les valeurs."
    exit 1
fi

# Configuration
LOCAL_DIR="dist/portfolio/browser/"
REMOTE_DIR="${FTP_REMOTE_DIR%/}/"

# Couleurs
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
RESET='\033[0m'

# Verifie que lftp est installe
if ! command -v lftp &> /dev/null; then
    echo -e "${RED}Erreur: lftp n'est pas installe.${RESET}"
    echo "Installe-le avec: brew install lftp"
    exit 1
fi

# Verifie que le build existe
if [ ! -d "$LOCAL_DIR" ]; then
    echo -e "${RED}Erreur: le dossier $LOCAL_DIR n'existe pas.${RESET}"
    echo "Lance d'abord: make build"
    exit 1
fi

# Demande le mot de passe FTP (lecture depuis /dev/tty pour fonctionner depuis make)
echo -n "Mot de passe FTP pour $FTP_USER@$FTP_SERVER: "
read -s FTP_PASSWORD < /dev/tty
echo

echo -e "${YELLOW}Deploiement en cours vers $FTP_SERVER...${RESET}"

# Corrige les permissions locales avant upload
chmod -R a+r "$LOCAL_DIR"

lftp <<EOF
set ftp:ssl-allow yes
set ssl:verify-certificate no
set net:max-retries 3
set net:reconnect-interval-base 5
open -u $FTP_USER,$FTP_PASSWORD $FTP_SERVER
mirror -R $LOCAL_DIR $REMOTE_DIR
bye
EOF

echo -e "${GREEN}Deploiement termine avec succes !${RESET}"
