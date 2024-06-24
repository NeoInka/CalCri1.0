// JavaScript para la calculadora de carga crítica de pandeo en CodePen

// Selección de los botones de información
const infoButtons = document.querySelectorAll('.info-button');

// Mostrar u ocultar el concepto al hacer clic en el botón de información
infoButtons.forEach(button => {
  button.addEventListener('click', () => {
    const concepto = button.parentElement.querySelector('.concepto');
    concepto.style.display = concepto.style.display === 'block' ? 'none' : 'block';
  });
});

// Selección del formulario y elementos de entrada
const form = document.getElementById('columna-form');
const modElasticidadInput = document.getElementById('mod-elasticidad');
const momentoInerciaInput = document.getElementById('momento-inercia');
const factorLongitudInput = document.getElementById('factor-longitud');
const longitudColumnaInput = document.getElementById('longitud-columna');

// Resultado
const resultadoColumnaValor = document.getElementById('resultado-columna-valor');
const resultadoColumnaDiv = document.getElementById('resultado-columna');

// Función para calcular la carga crítica de pandeo
function calcularCargaCritica(event) {
  event.preventDefault();

  // Obtener los valores de entrada
  const E = parseFloat(modElasticidadInput.value);
  const I = parseFloat(momentoInerciaInput.value);
  const k = parseFloat(factorLongitudInput.value);
  const L = parseFloat(longitudColumnaInput.value);

  // Validar que los valores sean números y mayores que cero
  if (isNaN(E) || isNaN(I) || isNaN(k) || isNaN(L) || E <= 0 || I <= 0 || k <= 0 || L <= 0) {
    alert('Por favor, asegúrate de ingresar valores válidos y mayores que cero para todos los campos.');
    return;
  }

  // Calcular la carga crítica de pandeo
  const cargaCritica = (Math.PI ** 2 * E * I) / (k * L ** 2);

  // Mostrar el resultado
  resultadoColumnaValor.textContent = `La carga crítica de pandeo es: ${cargaCritica.toFixed(2)} N`;
  resultadoColumnaDiv.classList.remove('hidden');
}

// Asociar la función de cálculo al evento de envío del formulario
form.addEventListener('submit', calcularCargaCritica);
