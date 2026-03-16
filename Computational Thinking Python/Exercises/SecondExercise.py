#ex.3 / transformar km em metros e cm
km = float(input("Km: "))
metros = km * 1000
cm = metros * 100
print(f"{km}km em metros é {metros} e em centimetros {cm}")

#ex.4 pegar tempo e distançia e mostrar velocidade media em km/h

distanciaKm = float(input("Digite a distançia em km: ")) 
tempoHoras = float(input("Digite o tempo em horas: "))
velocidadeMedia = distanciaKm / tempoHoras
print(f'A velocidade média é {velocidadeMedia} Km/h')

#ex.5 pegar a massa do usuario e retornar a energia

massa = float(input("Digite a sua massa: "))
energia = (massa * 300.00)^2
print(energia)