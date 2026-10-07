// firebase-init.js - Configuração e Dados do Dashboard Nando

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Credenciais do seu Firebase
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

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Dados de Outubro e Novembro + Metas
const initialFinancialData = {
  weeklyCeilings: {
    bakeryAndMarket: 200.00,
    gasoline: 150.00,
    diningOut: 35.00
  },
  october2026: {
    summary: {
      expectedRevenue: 4228.00,
      receivedRevenue: 578.00,
      paidExpenses: 225.04,
      pendingExpenses: 1636.54
    },
    receivables: [
      { id: "rec_01", date: "2026-10-02", description: "SALETE BROTAS FERREIRA", amount: 230.00, status: "paid" },
      { id: "rec_02", date: "2026-10-02", description: "Marco Antonio Ciqueira", amount: 118.00, status: "paid" },
      { id: "rec_03", date: "2026-10-03", description: "Kauan santos dos Passos", amount: 230.00, status: "paid" },
      { id: "rec_04", date: "2026-10-05", description: "CARLOS HENRIQUE", amount: 230.00, status: "pending" },
      { id: "rec_05", date: "2026-10-05", description: "JOAO BATISTA", amount: 230.00, status: "pending" },
      { id: "rec_06", date: "2026-10-05", description: "ANTONELLA COSTA", amount: 230.00, status: "pending" },
      { id: "rec_07", date: "2026-10-05", description: "Wesley Carlos", amount: 230.00, status: "pending" },
      { id: "rec_08", date: "2026-10-10", description: "Márcio José", amount: 350.00, status: "pending" },
      { id: "rec_09", date: "2026-10-10", description: "Ana Clara dos Reis", amount: 210.00, status: "pending" },
      { id: "rec_10", date: "2026-10-10", description: "Renan Guerreiro", amount: 210.00, status: "pending" },
      { id: "rec_11", date: "2026-10-10", description: "VALDIRENE APARECIDA", amount: 230.00, status: "pending" },
      { id: "rec_12", date: "2026-10-20", description: "Natan Martins", amount: 230.00, status: "pending" },
      { id: "rec_13", date: "2026-10-21", description: "auxilio Meire", amount: 1500.00, status: "pending" }
    ],
    expensesPaid: [
      { id: "exp_01", date: "2026-10-01", description: "mangueira chuveiro", amount: 9.00, category: "Manutenção Casa" },
      { id: "exp_02", date: "2026-10-01", description: "Mercado dia a dia", amount: 14.98, category: "Mercado" },
      { id: "exp_03", date: "2026-10-02", description: "planeta doces", amount: 39.94, category: "Panificadora/Doces" },
      { id: "exp_04", date: "2026-10-02", description: "Mercado dia a dia", amount: 6.79, category: "Mercado" },
      { id: "exp_05", date: "2026-10-02", description: "Pani", amount: 32.40, category: "Panificadora" },
      { id: "exp_06", date: "2026-10-03", description: "espetinho", amount: 48.00, category: "Restaurante" },
      { id: "exp_07", date: "2026-10-03", description: "Pani", amount: 14.95, category: "Panificadora" },
      { id: "exp_08", date: "2026-10-03", description: "Gasolina", amount: 53.99, category: "Transporte" },
      { id: "exp_09", date: "2026-10-03", description: "Mercado dia a dia", amount: 4.99, category: "Mercado" }
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
    alert("✅ Dados gravados com sucesso no Firebase!");
  } catch (error) {
    console.error("❌ Erro ao gravar dados no Firebase:", error);
  }
}
