// firebase-init.js - Configuração e Dados Atualizados (01 a 07/10)

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAs7ZvafIoOUhncoW9TJQgVVT2QkrW_YOQ",
  authDomain: "meu-dashboard-4590d.firebaseapp.com",
  databaseURL: "https://meu-dashboard-4590d-default-rtdb.firebaseio.com",
  projectId: "meu-dashboard-4590d",
  storageBucket: "meu-dashboard-4590d.firebasestorage.app",
  messagingSenderId: "412931481365",
  appId: "1:412931481365:web:49a28887fa9b900bd6131c",
  measurementId: "G-N0P65W8W8M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const initialFinancialData = {
  weeklyCeilings: {
    bakeryAndMarket: 200.00,
    gasoline: 150.00,
    diningOut: 35.00
  },
  october2026: {
    summary: {
      expectedRevenue: 4228.00,
      receivedRevenue: 1728.00,
      paidExpenses: 884.79,
      pendingExpenses: 1636.54
    },
    receivables: [
      { id: "rec_01", date: "2026-10-02", description: "Salete B Ferreira", amount: 230.00, status: "paid" },
      { id: "rec_02", date: "2026-10-02", description: "Elaine Cerqueira Da Silva", amount: 118.00, status: "paid" },
      { id: "rec_03", date: "2026-10-02", description: "Meire Daiane", amount: 40.00, status: "paid" },
      { id: "rec_04", date: "2026-10-03", description: "Kauan Santos Dos Passos", amount: 230.00, status: "paid" },
      { id: "rec_05", date: "2026-10-04", description: "Cícero Paulino", amount: 350.00, status: "paid" },
      { id: "rec_06", date: "2026-10-05", description: "Fabiana de Figueiredo", amount: 120.00, status: "paid" },
      { id: "rec_07", date: "2026-10-06", description: "Mw Veiculos Ltda", amount: 350.00, status: "paid" },
      { id: "rec_08", date: "2026-10-06", description: "Ana Clara Dos Reis", amount: 210.00, status: "paid" },
      { id: "rec_09", date: "2026-10-06", description: "Fabio Ancai", amount: 80.00, status: "paid" },
      { id: "rec_10", date: "2026-10-05", description: "CARLOS HENRIQUE", amount: 230.00, status: "pending" },
      { id: "rec_11", date: "2026-10-05", description: "JOAO BATISTA", amount: 230.00, status: "pending" },
      { id: "rec_12", date: "2026-10-05", description: "ANTONELLA COSTA", amount: 230.00, status: "pending" },
      { id: "rec_13", date: "2026-10-05", description: "Wesley Carlos", amount: 230.00, status: "pending" },
      { id: "rec_14", date: "2026-10-10", description: "Márcio José", amount: 350.00, status: "pending" },
      { id: "rec_15", date: "2026-10-10", description: "Renan Guerreiro", amount: 210.00, status: "pending" },
      { id: "rec_16", date: "2026-10-10", description: "VALDIRENE APARECIDA", amount: 230.00, status: "pending" },
      { id: "rec_17", date: "2026-10-20", description: "Natan Martins", amount: 230.00, status: "pending" },
      { id: "rec_18", date: "2026-10-21", description: "auxilio Meire", amount: 1500.00, status: "pending" }
    ],
    expensesPaid: [
      { id: "exp_01", date: "2026-10-01", description: "Mercado Paiva", amount: 14.98, category: "Mercado" },
      { id: "exp_02", date: "2026-10-01", description: "Casa Konno", amount: 9.00, category: "Manutenção Casa" },
      { id: "exp_03", date: "2026-10-02", description: "Planeta Doces", amount: 39.94, category: "Panificadora/Doces" },
      { id: "exp_04", date: "2026-10-02", description: "Panificadora Guanambi", amount: 32.40, category: "Panificadora" },
      { id: "exp_05", date: "2026-10-02", description: "Mercado Paiva", amount: 6.79, category: "Mercado" },
      { id: "exp_06", date: "2026-10-03", description: "Passione Comercio (Gasolina)", amount: 53.99, category: "Transporte" },
      { id: "exp_07", date: "2026-10-03", description: "Açougue Carne Boa", amount: 48.00, category: "Restaurante/Alimentação" },
      { id: "exp_08", date: "2026-10-03", description: "Panificadora Guanambi", amount: 14.95, category: "Panificadora" },
      { id: "exp_09", date: "2026-10-03", description: "Mercado Paiva", amount: 4.99, category: "Mercado" },
      { id: "exp_10", date: "2026-10-04", description: "Maringa, 199", amount: 84.94, category: "Outros" },
      { id: "exp_11", date: "2026-10-04", description: "Carne Boa Mm", amount: 63.34, category: "Mercado/Alimentação" },
      { id: "exp_12", date: "2026-10-04", description: "Condor Sítio Cercado", amount: 64.63, category: "Mercado" },
      { id: "exp_13", date: "2026-10-04", description: "Posto Tijucas", amount: 50.00, category: "Transporte" },
      { id: "exp_14", date: "2026-10-04", description: "Panificadora Guanambi", amount: 33.00, category: "Panificadora" },
      { id: "exp_15", date: "2026-10-04", description: "Supermercado Paiva (Total do Dia)", amount: 52.93, category: "Mercado" },
      { id: "exp_16", date: "2026-10-04", description: "Big Real", amount: 29.97, category: "Outros" },
      { id: "exp_17", date: "2026-10-04", description: "Distribuidora Família", amount: 27.00, category: "Outros" },
      { id: "exp_18", date: "2026-10-04", description: "Mister Longo", amount: 26.90, category: "Restaurante" },
      { id: "exp_19", date: "2026-10-04", description: "Loja Maribela", amount: 25.72, category: "Outros" },
      { id: "exp_20", date: "2026-10-04", description: "TIM Recarga", amount: 20.00, category: "Telefonia" },
      { id: "exp_21", date: "2026-10-04", description: "Casa Legal", amount: 31.00, category: "Outros" },
      { id: "exp_22", date: "2026-10-04", description: "So Gulla", amount: 9.99, category: "Restaurante" },
      { id: "exp_23", date: "2026-10-04", description: "Nutritiba", amount: 9.50, category: "Outros" },
      { id: "exp_24", date: "2026-10-04", description: "Panificadora Guanambi", amount: 6.10, category: "Panificadora" },
      { id: "exp_25", date: "2026-10-04", description: "Oscar Frutas", amount: 3.50, category: "Mercado" },
      { id: "exp_26", date: "2026-10-04", description: "Mylua Bijuterias", amount: 3.50, category: "Outros" },
      { id: "exp_27", date: "2026-10-05", description: "Posto Tijucas", amount: 50.00, category: "Transporte" },
      { id: "exp_28", date: "2026-10-05", description: "Super Zamp", amount: 43.13, category: "Mercado" },
      { id: "exp_29", date: "2026-10-05", description: "Engel E Santos Ltda", amount: 23.15, category: "Outros" },
      { id: "exp_30", date: "2026-10-05", description: "Oscar Frutas", amount: 9.80, category: "Mercado" },
      { id: "exp_31", date: "2026-10-06", description: "Condor Sítio Cercado", amount: 36.35, category: "Mercado" },
      { id: "exp_32", date: "2026-10-07", description: "Carne Boa Mm", amount: 33.38, category: "Mercado/Alimentação" },
      { id: "exp_33", date: "2026-10-07", description: "Oscar Frutas", amount: 13.26, category: "Mercado" }
    ]
  },
  november2026: {
    fixedExpenses: [
      { description: "PARCELA CARRO NOVO (1/60)", amount: 1167.24, category: "Carro", dueDate: "2026-11-20" },
      { description: "Transferência Carro (2/6)", amount: 205.00, category: "Carro", dueDate: "2026-11-15" },
      { description: "Companhia Elétrica", amount: 135.00, category: "Casa", dueDate: "2026-11-07" },
      { description: "Companhia de Água", amount: 35.54, category: "Casa", dueDate: "2026-11-12" },
      { description: "Internet", amount: 119.90, category: "Casa", dueDate: "2026-11-16" },
      { description: "Telefonia Celular Tim", amount: 63.00, category: "Telefonia", dueDate: "2026-11-15" }
    ]
  }
};

export async function seedDatabase() {
  try {
    await setDoc(doc(db, "financialData", "dashboardState"), initialFinancialData);
    alert("✅ Dados de Outubro 100% atualizados no Firebase!");
  } catch (error) {
    console.error("❌ Erro ao gravar dados no Firebase:", error);
  }
}
