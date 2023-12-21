import {
  FaHome,
  FaBox,
  FaCog,
  FaQuestionCircle,
  FaShoppingCart,
  FaUsers,
  FaFileContract,
  FaMoneyBill
} from "react-icons/fa"

export const SIDEMENU_NAVIGATION = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/app",
    icon: <FaHome/>
  },
  {
    key: "products",
    label: "Produtos",
    path: "/app/products",
    icon: <FaBox/>
  },
  {
    key: "orders",
    label: "Pedidos",
    path: "/app/orders",
    icon: <FaShoppingCart/>
  },
  {
    key: "customers",
    label: "Clientes",
    path: "/app/customers",
    icon: <FaUsers/>
  },
  {
    key: "transactions",
    label: "Transações",
    path: "/app/transactions",
    icon: <FaMoneyBill/>
  },
  {
    key: "services",
    label: "Ordens de Serviço",
    path: "/app/services",
    icon: <FaFileContract/>
  }
];

export const SIDEMENU_BOTTOM_NAVIGATION = [
  {
    key: "settings",
    label: "Configurações",
    path: "/settings",
    icon: <FaCog/>
  },
  {
    key: "help",
    label: "Ajuda",
    path: "/help",
    icon: <FaQuestionCircle/>
  }
];
