"""
Script de Segurança: Reverte o portfólio instantaneamente para a versão original anterior aos vídeos.
"""
import shutil
import os

base_dir = os.path.dirname(os.path.abspath(__file__))
backup_file = os.path.join(base_dir, 'index_BACKUP_ORIGINAL.html')
target_file = os.path.join(base_dir, 'index.html')

if os.path.exists(backup_file):
    shutil.copyfile(backup_file, target_file)
    print("SUCESSO: O portfólio foi 100% revertido para a versão original!")
    print("Todas as informações e o layout prévio foram restaurados exatamente como estavam.")
else:
    print("ERRO: Arquivo index_BACKUP_ORIGINAL.html não encontrado.")
