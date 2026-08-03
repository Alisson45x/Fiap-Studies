import numpy as np
import matplotlib.pyplot as plt

def main():
    print("--- Crie sua própria Imagem 4x4 ---")
    print("Digite valores de 0 (Preto absoluto) a 255 (Branco absoluto) para cada pixel.\n")
    
    valores = []
    
    # Loop para pedir os 16 valores, um por um
    for linha in range(4):
        for coluna in range(4):
            while True: # Continua pedindo até o usuário digitar um valor válido
                try:
                    valor = int(input(f"Valor para a Linha {linha+1}, Coluna {coluna+1}: "))
                    
                    if 0 <= valor <= 255:
                        valores.append(valor)
                        break # Sai do 'while' e vai para o próximo pixel
                    else:
                        print("Erro: O número deve estar entre 0 e 255.")
                        
                except ValueError:
                    print("Erro: Entrada inválida. Digite um número inteiro.")
    
    # 2. Transformar a lista de valores em uma Matriz 4x4
    matriz_4x4 = np.array(valores).reshape((4, 4))
    
    print("\n--- A Matriz que você construiu ---")
    print(matriz_4x4)
    print("-----------------------------------\n")

    # 3. Desenhar a imagem
    fig, ax = plt.subplots(figsize=(6, 6))
    ax.imshow(matriz_4x4, cmap='gray', vmin=0, vmax=255)

    # 4. Escrever os números dentro de cada quadrado
    for linha in range(4):
        for coluna in range(4):
            valor = matriz_4x4[linha, coluna]
            # Escolhe a cor da fonte (branca ou preta) baseada no fundo para dar contraste
            cor_texto = 'white' if valor < 128 else 'black'
            ax.text(coluna, linha, str(valor), 
                    ha='center', va='center', 
                    color=cor_texto, fontsize=16, fontweight='bold')

    plt.title('Sua Imagem Personalizada (4x4)', fontsize=16)
    plt.axis('off') 
    plt.show()

if __name__ == "__main__":
    main()                                                                               