"""
Script de Ativação: Ativa a versão interativa moderna com os 4 vídeos 3D da IA.
"""
import shutil
import os

base_dir = os.path.dirname(os.path.abspath(__file__))
video_version = os.path.join(base_dir, 'index_MODO_VIDEOS_IA.html')
target_file = os.path.join(base_dir, 'index.html')

if os.path.exists(video_version):
    shutil.copyfile(video_version, target_file)
    print("SUCESSO: A versão com os 4 Vídeos IA 3D foi ativada no portfólio!")
else:
    print("ERRO: Arquivo index_MODO_VIDEOS_IA.html não encontrado.")
