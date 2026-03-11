	import matplotlib.pyplot as plt
from scipy import stats
import numpy as np

def main():
    x_data = []
    y_data = []

    print("--- Calculadora de Regressão Linear ---")
    print("Digite as coordenadas dos pontos. Pressione 'q' e dê Enter para finalizar.")

    # 1. Coletar os dados do usuário
    while True:
        entrada = input("Digite o ponto (x,y) separado por vírgula (ex: 2,3): ")
        
        if entrada.lower() == 'q':
            if len(x_data) < 2:
                print("Por favor, insira pelo menos 2 pontos para traçar uma reta.")
                continue
            break
            
        try:
            # Divide a string pela vírgula e converte para float
            x, y = map(float, entrada.split(','))
            x_data.append(x)
            y_data.append(y)
        except ValueError:
            print("Entrada inválida. Certifique-se de digitar dois números separados por vírgula.")

    # Converter as listas para arrays do NumPy (necessário para os cálculos)
    x_np = np.array(x_data)
    y_np = np.array(y_data)

    # 2. Calcular a regressão linear (reta média)
    resultado = stats.linregress(x_np, y_np)
    m = resultado.slope       # Coeficiente angular (inclinação)
    b = resultado.intercept   # Coeficiente linear (onde corta o eixo y)
    r_squared = resultado.rvalue ** 2  # Coeficiente de determinação (R²)

    # Montar o texto da equação da reta
    sinal = "+" if b >= 0 else "-"
    equacao = f"y = {m:.4f}x {sinal} {abs(b):.4f}"

    # Exibir resultados no terminal
    print("\n--- Resultados ---")
    print(f"Equação da Reta: {equacao}")
    print(f"Coeficiente de Determinação (R²): {r_squared:.4f}")

    # 3. Plotar os resultados
    plt.figure(figsize=(8, 6))
    
    # Plotar os pontos originais
    plt.scatter(x_np, y_np, color='blue', label='Pontos Inseridos', zorder=5)

    # Gerar os pontos para desenhar a reta
    # Cria 100 pontos entre o menor e o maior valor de X para a linha não ficar curta
    x_reta = np.linspace(min(x_np) - 1, max(x_np) + 1, 100)
    y_reta = m * x_reta + b

    # Plotar a reta média
    plt.plot(x_reta, y_reta, color='red', 
             label=f'Reta Média\n{equacao}\n$R^2 = {r_squared:.4f}$')

    # Configurações estéticas do gráfico
    plt.title('Gráfico de Dispersão e Reta Média')
    plt.xlabel('Eixo X')
    plt.ylabel('Eixo Y')
    plt.legend(loc='best')
    plt.grid(True, linestyle='--', alpha=0.7)
    
    # Mostrar o gráfico
    plt.show()

if __name__ == "__main__":
    main()
