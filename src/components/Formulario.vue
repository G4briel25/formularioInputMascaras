<script setup>
import { computed, ref } from 'vue';
import inputEstrelas from '@/components/inputEstrelas.vue';

// Documentação moment
// https://momentjs.com/

const cursos = ref([
    {id: 1, curso: 'Banco de Dados Relacionais'},
    {id: 2, curso: 'Desenvolvimento Web Avançado com Vue'},
    {id: 3, curso: 'Desenvolvimento Web Avançado com Laravel'},
    {id: 4, curso: 'Curso completo do Desenvolvedor NodeJS e MongoDB'},
]);

const form = ref({});

const formEstadoInicial = ref({
    nome: 'Gabriel',
    email: 'gjaune@gmail.com',
    senha: '12345',
    idade: '20',
    licenca: false,
    interesses: ['VueJS', 'Angular'],
    genero: 'Masculino',
    telefone: '',
    cep: '',
    cpf: '',
    cnpj: '',
    cartaoDeCredito: '',
    placaVeiculo: '',
    placaVeiculoMercosul: '',
    rg: '',
    data: '',
    dataHoraLocal: '',
    mes: '',
    semana: '',
    hora: '',
    cor: '#3f843e',
    alcance: 5,
    escondido: 'Este input está escondido',
    arquivos: {},
    descricao: '',
    curso: '',
    avaliacao: 0
});

const numeroPlacaVeiculo = computed(() => {
    const maiuscula = { pattern: /[a-zA-Z]/, transform: (chr) => chr.toUpperCase() };
    return {
        mask: "AAA-####",
        tokens: { A: maiuscula },
    };
});

const numeroPlacaVMercosul = computed(() => {
    const maiuscula = { pattern: /[a-zA-Z]/, transform: (chr) => chr.toUpperCase() };
    return {
        mask: "AAA#A##",
        tokens: { A: maiuscula },
    };
});

const numeroRg = computed(() => {
    return {
        mask: "999999999-A",
        tokens: { 9: { pattern: /[0-9]/ }, A: { pattern: /[0-9A-Za-z]/ } }
    };
});


const selecionarArquivos = (event) => {
    //console.log(event.target.files);
    form.value.arquivos = event.target.files
}

const enviar = (event) => {
    console.log(event);

    const formEnvio = Object.assign({}, form.value); //Copiar o formulario para um novo obj
    console.log(formEnvio);
}

const resetar = () => {
    form.value = Object.assign({}, formEstadoInicial.value);
}

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-6 bg-light">
                <span class="fs-4">ENTRADA DE DADOS</span>
                <hr>
                <!-- <form @submit.prevent="enviar($event)"> -->
                <form>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Nome:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.lazy="form.nome">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">E-mail:</label>
                        <div class="col">
                            <input type="email" class="form-control" v-model="form.email">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Senha:</label>
                        <div class="col">
                            <input type="password" class="form-control" v-model.trim="form.senha">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Idade:</label>
                        <div class="col">
                            <input type="number" class="form-control" v-model="form.idade">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Gênero:</label>
                        <div class="col">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="Feminino" v-model="form.genero">
                                <label class="form-check-label">
                                    Feminino
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="Masculino" v-model="form.genero">
                                <label class="form-check-label">
                                    Masculino
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Licença:</label>
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" v-model="form.licenca" true-value="SIM"
                                    false-value="NÃO">
                                <label class="form-check-label">Li e aceito os termos</label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Interesses:</label>
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="JavaScript"
                                    v-model="form.interesses">
                                <label class="form-check-label">
                                    JavaScript
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="VueJS" v-model="form.interesses">
                                <label class="form-check-label">
                                    VueJS
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="Angular"
                                    v-model="form.interesses">
                                <label class="form-check-label">
                                    Angular
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="NodeJS"
                                    v-model="form.interesses">
                                <label class="form-check-label">
                                    NodeJS
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Telefone:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.telefone" v-maska="'(##) #####-####'">
                            <small class="text-muted">Formato: 11 97777-5555</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CEP:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.cep" v-maska="'#####-###'">
                            <small class="text-muted">Formato: 00000-000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CPF:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.cpf" v-maska="'###.###.###-##'">
                            <small class="text-muted">Formato: 000.000.000-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CNPJ:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.cnpj" v-maska="'##.###.###/####-##'">
                            <small class="text-muted">Formato: 00.000.000/0000-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cartão de Crédito:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.cartaoDeCredito"
                                v-maska="'#### #### #### ####'">
                            <small class="text-muted">Formato: 0000 0000 0000 0000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa Veículo:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.placaVeiculo"
                                v-maska="numeroPlacaVeiculo">
                            <small class="text-muted">Formato: AAA-0000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa Veículo Mercosul:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.placaVeiculoMercosul"
                                v-maska="numeroPlacaVMercosul">
                            <small class="text-muted">Formato: AAA0A00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">RG:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model="form.rg" v-maska="numeroRg">
                            <small class="text-muted">Formato: Sem padrão</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data:</label>
                        <div class="col">
                            <input type="date" class="form-control" v-model="form.data">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data/hora local:</label>
                        <div class="col">
                            <input type="datetime-local" class="form-control" v-model="form.dataHoraLocal">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Mês:</label>
                        <div class="col">
                            <input type="month" class="form-control" v-model="form.mes">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Semana:</label>
                        <div class="col">
                            <input type="week" class="form-control" v-model="form.semana">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Hora:</label>
                        <div class="col">
                            <input type="time" class="form-control" v-model="form.hora">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cor:</label>
                        <div class="col">
                            <input type="color" class="form-color" v-model="form.cor">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Valor limite:</label>
                        <div class="col">
                            <input type="range" class="form-range" min="0" max="100" step="1" v-model="form.alcance">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Escondido:</label>
                        <div class="col">
                            <input type="hidden" class="form-control" v-model="form.escondido">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Upload:</label>
                        <div class="col">
                            <input type="file" class="form-control" multiple @change="selecionarArquivos">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Descrição:</label>
                        <div class="col">
                            <textarea rows="3" class="form-control" v-model="form.descricao"></textarea>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cursos:</label>
                        <div class="col">
                            <select class="form-select" v-model="form.curso">
                                <option value="" selected disabled>-- Selecione um curso</option>
                                <option v-for="nomeDoCurso in cursos" :key="nomeDoCurso.id">
                                    {{ nomeDoCurso.id }} - {{ nomeDoCurso.curso }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Avaliação:</label>
                        <div class="col">
                            <!-- <inputEstrelas :numero-estrelas="5" @avaliar="form.avaliacao = $event"></inputEstrelas> -->
                            <inputEstrelas :numero-estrelas="5" v-model:avaliar="form.avaliacao"></inputEstrelas>
                        </div>
                    </div>
                    <hr>
                    <div class="mb-3 row">
                        <div class="col d-flex justify-content-between">
                            <button class="btn btn-secondary" type="button" @click="resetar()">Limpar (reset)</button>
                            <button class="btn btn-secondary" type="reset">Limpar (reset)</button>
                            <button class="btn btn-success" type="button" @click="enviar($event)">Enviar (btn)</button>
                            <button class="btn btn-success" type="submit">Enviar (submit)</button>
                        </div>
                    </div>

                </form>
            </div>


            <div class="col-6 text-white bg-secondary" :style="'background-color:'+form.cor+'!important'">
                <span class="fs-4">ESTADO DO OBJETO</span>
                <hr>
                <div class="mb-5 row">
                    <span>{{ form }}</span>
                </div>

                <span class="fs-4">SAÍDA DE DADOS</span>
                <hr>
                <div class="mb-3 row">
                    <span>Nome: {{ form.nome }}</span>
                </div>
                <div class="mb-3 row">
                    <span>E-mail: {{ form.email }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Senha: {{ form.senha }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Idade: {{ form.idade }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Gênero: {{ form.genero }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Licença: {{ form.licenca }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Interesses:</span>
                    <ul>
                        <li v-for="(interesse, index) in form.interesses" :key="index">
                            {{ interesse }}
                        </li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>CEP: {{ form.cep }}</span>
                </div>
                <div class="mb-3 row">
                    <span>CPF: {{ form.cpf }}</span>
                </div>
                <div class="mb-3 row">
                    <span>CNPJ: {{ form.cnpj }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cartão de Crédito: {{ form.cartaoDeCredito }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Placa Veículo: {{ form.placaVeiculo }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Placa Veículo Mercosul: {{ form.placaVeiculoMercosul }}</span>
                </div>
                <div class="mb-3 row">
                    <span>RG: {{ form.rg }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data: {{ form.data }} | {{ $moment(form.data).format('DD/MM/YYYY') }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data/hora local: {{ form.dataHoraLocal }}</span>
                    <ul>
                        <li>{{ $moment(form.dataHoraLocal).format('dddd') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).add(10, 'days').format('LLLL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).add(1, 'months').format('LLLL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).add(2, 'years').format('LLLL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).subtract(2, 'years').format('LLLL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).format('LLLL') }}</li>
                        <li>{{ $moment(form.dataHoraLocal).add(2, 'days').format('LLLL') }}</li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Mês: {{ form.mes }} | {{ $moment(form.mes).format('MM') }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Semana: {{ form.semana }} | {{ $moment(form.semana).format('dddd') }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Hora: {{ form.hora }} | {{ $moment(form.hora).format('h') }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cor: {{ form.cor }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Valor limite: {{ form.alcance }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Escondido: {{ form.escondido }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Upload:</span>
                    <ul>
                        <li v-for="(arquivo, index) in form.arquivos" :key="index">
                            {{ arquivo.name }}
                        </li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Descrição:</span>
                    <div style="white-space: pre;">{{ form.descricao }}</div>
                </div>
                <div class="mb-3 row">
                    <span>Curso: {{ form.curso }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Avaliação: {{ form.avaliacao }}</span>
                </div>
            </div>
        </div>

    </div>

</template>
