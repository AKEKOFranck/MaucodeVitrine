import {
  FaShoppingBag, FaSpa, FaHotel, FaHandsHelping, FaTools,
  FaCoffee, FaCut, FaTshirt, FaUtensils, FaTruck, FaGlobe,
} from "react-icons/fa";

/**
 * Le JSON ne peut pas contenir de composants : on y met le NOM de l'icône ("FaSpa")
 * et on le relie ici. Pour une nouvelle icône : l'importer puis l'ajouter à ICONS.
 */
export const ICONS = {
  FaShoppingBag, FaSpa, FaHotel, FaHandsHelping, FaTools,
  FaCoffee, FaCut, FaTshirt, FaUtensils, FaTruck, FaGlobe,
};

export const DEFAULT_ICON = FaGlobe;