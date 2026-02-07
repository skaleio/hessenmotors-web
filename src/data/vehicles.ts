// Datos de vehículos compartidos
import mazda3Sport from "@/assets/mazda-3-sport.jpeg";
import maxusG10 from "@/assets/maxus-g10.jpeg";
import chevroletSail from "@/assets/chevrolet-sail-ltz.jpeg";
import peugeot208 from "@/assets/peugeot-208-active.jpeg";
import chevroletSilverado from "@/assets/silverado.jpeg";
import chevroletTracker from "@/assets/Fotos Vehículos_ Hessen Motors/Chevrolet/Tracker 2022/1.jpeg";
import chevroletGroove from "@/assets/Fotos Vehículos_ Hessen Motors/Chevrolet/Grove 2022/1.jpg";
import hyundaiAccent from "@/assets/Fotos Vehículos_ Hessen Motors/Hyundai/Accent 2021/IMG_8173.jpg";
import hyundaiVeloster from "@/assets/Fotos Vehículos_ Hessen Motors/Hyundai/Veloster 2016/1.jpg";
import volvoImage from "@/assets/Fotos Vehículos_ Hessen Motors/Volvo/image00003.jpeg";
import suzukiJimny from "@/assets/Fotos Vehículos_ Hessen Motors/Suzuki 4X4/1.jpeg";
import jacJs4 from "@/assets/Fotos Vehículos_ Hessen Motors/Jac/1.jpg";
import kiaSonet from "@/assets/Fotos Vehículos_ Hessen Motors/Kia/Sonet 2021/1.jpg";
import toyotaRush from "@/assets/Fotos Vehículos_ Hessen Motors/Toyota/Rush 2021/1.jpg";

// Mapeo de nombres de imágenes a imports
export const vehicleImages: Record<string, string> = {
  "mazda-3-sport.jpeg": mazda3Sport,
  "maxus-g10.jpeg": maxusG10,
  "chevrolet-sail-ltz.jpeg": chevroletSail,
  "peugeot-208-active.jpeg": peugeot208,
  "silverado.jpeg": chevroletSilverado,
  "chevrolet-tracker-2022.jpeg": chevroletTracker,
  "chevrolet-groove-2022.jpg": chevroletGroove,
  "hyundai-accent-2021.jpg": hyundaiAccent,
  "hyundai-veloster-2016.jpg": hyundaiVeloster,
  "volvo-image00003.jpeg": volvoImage,
  "suzuki-jimny-2021.jpeg": suzukiJimny,
  "jac-js4-2021.jpg": jacJs4,
  "kia-sonet-2021.jpg": kiaSonet,
  "toyota-rush-2021.jpg": toyotaRush,
};

export const getVehicleImage = (imageName: string) => {
  return vehicleImages[imageName] || "";
};

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  km: string;
  fuel: string;
  transmission: string;
  engine: string;
  traction: string;
  minPayment: number;
  location: string;
  image: string;
  sunroof?: boolean;
  priceNote?: string;
}

export const vehicles: Vehicle[] = [
  {
    id: 3,
    brand: "Mazda",
    model: "3 Sport",
    year: 2018,
    price: 13990000,
    km: "85.000 km",
    fuel: "Bencina",
    transmission: "Automática 6AT",
    engine: "2.0 SKYACTIV-G · 4 cilindros",
    traction: "Delantera (FWD)",
    minPayment: 3500000,
    location: "La Serena",
    sunroof: true,
    image: "mazda-3-sport.jpeg",
  },
  {
    id: 4,
    brand: "Maxus",
    model: "G10 9+1 MT",
    year: 2023,
    price: 15690000,
    km: "60.000 km",
    fuel: "Diésel",
    transmission: "Manual 6MT",
    engine: "2.0 Turbo Diésel VGT · 163 HP · 375 Nm",
    traction: "Trasera (RWD)",
    minPayment: 3800000,
    location: "La Serena",
    priceNote: "+ IVA",
    image: "maxus-g10.jpeg",
  },
  {
    id: 5,
    brand: "Chevrolet",
    model: "Sail LTZ 1.5",
    year: 2025,
    price: 11990000,
    km: "35.000 km",
    fuel: "Bencina",
    transmission: "Manual 6MT",
    engine: "1.5 DOHC · 4 cilindros",
    traction: "Delantera (FWD)",
    minPayment: 2400000,
    location: "La Serena",
    image: "chevrolet-sail-ltz.jpeg",
  },
  {
    id: 6,
    brand: "Peugeot",
    model: "208 Active BlueHDi 1.6",
    year: 2019,
    price: 8990000,
    km: "100.000 km",
    fuel: "Diésel",
    transmission: "Manual 5MT",
    engine: "1.6 BlueHDi Turbo Diésel · 4 cilindros",
    traction: "Delantera (FWD)",
    minPayment: 1800000,
    location: "La Serena",
    image: "peugeot-208-active.jpeg",
  },
  {
    id: 7,
    brand: "Chevrolet",
    model: "Silverado LT 4WD 5.3 L V8",
    year: 2016,
    price: 18990000,
    km: "67.000 km",
    fuel: "Bencina",
    transmission: "Automática",
    engine: "5.3L V8 · 355 CV · 518 Nm",
    traction: "4x4 / 4WD",
    minPayment: 5700000,
    location: "La Serena",
    image: "silverado.jpeg",
  },
  {
    id: 8,
    brand: "Chevrolet",
    model: "Tracker",
    year: 2022,
    price: 10990000,
    km: "72.000 km",
    fuel: "Bencina",
    transmission: "Manual",
    engine: "Motor 1.2 Turbo 130 CV 190 Nm",
    traction: "Por definir",
    minPayment: 3300000,
    location: "La Serena",
    image: "chevrolet-tracker-2022.jpeg",
  },
  {
    id: 9,
    brand: "Chevrolet",
    model: "Groove",
    year: 2022,
    price: 11690000,
    km: "53.000 km",
    fuel: "Bencina",
    transmission: "Manual",
    engine: "Motor 1.5 110 CV 147 Nm",
    traction: "Por definir",
    minPayment: 3500000,
    location: "La Serena",
    priceNote: "Consignación $10.200.000",
    image: "chevrolet-groove-2022.jpg",
  },
  {
    id: 10,
    brand: "Hyundai",
    model: "Accent",
    year: 2021,
    price: 10490000,
    km: "65.000 km",
    fuel: "Bencina",
    transmission: "Manual",
    engine: "Motor 1.4 100 CV 132 Nm",
    traction: "Por definir",
    minPayment: 3300000,
    location: "La Serena",
    image: "hyundai-accent-2021.jpg",
  },
  {
    id: 11,
    brand: "Volvo",
    model: "V40 R-Design 1.6 Turbo",
    year: 2014,
    price: 12490000,
    km: "136.000 km",
    fuel: "Bencina",
    transmission: "Por definir",
    engine: "1.6 Turbo · 180 HP · 240 Nm",
    traction: "Por definir",
    minPayment: 5000000,
    location: "La Serena",
    image: "volvo-image00003.jpeg",
  },
  {
    id: 12,
    brand: "Suzuki",
    model: "Jimny",
    year: 2021,
    price: 13490000,
    km: "45.000 km",
    fuel: "Bencina",
    transmission: "Manual",
    engine: "Motor 1.5 102 CV 130 Nm 4x4",
    traction: "4x4 AllGrip Pro",
    minPayment: 4000000,
    location: "La Serena",
    image: "suzuki-jimny-2021.jpeg",
  },
  {
    id: 13,
    brand: "JAC",
    model: "JS4",
    year: 2021,
    price: 10990000,
    km: "48.000 km",
    fuel: "Bencina",
    transmission: "Manual",
    engine: "Motor 1.5 105 CV 137 Nm",
    traction: "Por definir",
    minPayment: 3300000,
    location: "La Serena",
    image: "jac-js4-2021.jpg",
  },
  {
    id: 14,
    brand: "KIA",
    model: "Sonet",
    year: 2021,
    price: 12990000,
    km: "79.000 km",
    fuel: "Bencina",
    transmission: "Manual",
    engine: "Motor 1.5 113 CV 144 Nm",
    traction: "Por definir",
    minPayment: 3600000,
    location: "La Serena",
    image: "kia-sonet-2021.jpg",
  },
  {
    id: 15,
    brand: "Toyota",
    model: "Rush",
    year: 2021,
    price: 13490000,
    km: "72.000 km",
    fuel: "Bencina",
    transmission: "Manual",
    engine: "Motor 1.5 102 CV 134 Nm",
    traction: "4x2",
    minPayment: 4200000,
    location: "La Serena",
    image: "toyota-rush-2021.jpg",
  },
  {
    id: 16,
    brand: "Hyundai",
    model: "Veloster 1.6 Turbo",
    year: 2016,
    price: 9490000,
    km: "106.000 km",
    fuel: "Bencina",
    transmission: "Manual 6MT",
    engine: "1.6 Turbo · 201 CV · 265 Nm",
    traction: "Delantera (FWD)",
    minPayment: 2850000,
    location: "La Serena",
    sunroof: true,
    image: "hyundai-veloster-2016.jpg",
  },
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(price);
};

export const formatMaybePrice = (price: number) => {
  if (price <= 0) {
    return "Consultar";
  }
  return formatPrice(price);
};

// Obtener marcas únicas
export const getUniqueBrands = () => {
  return Array.from(new Set(vehicles.map(v => v.brand))).sort();
};

// Cargar las imágenes bajo demanda usando import.meta.glob
// Nota: Esto evita cargar todas las imágenes al inicio
const allVehicleImages = import.meta.glob(
  "/src/assets/Fotos Vehículos_ Hessen Motors/**/*.{jpeg,jpg,JPEG,JPG}",
  { eager: false, as: "url" }
);

// Función para obtener todas las imágenes de un vehículo específico
export const getVehicleImages = async (vehicle: Vehicle): Promise<string[]> => {
  // Mapeo de vehículos a patrones de ruta (usando diferentes variaciones por espacios)
  const pathPatterns: Record<number, string[]> = {
    3: ['Mazda/3 Sport', 'Mazda/3%20Sport', 'Mazda\\3 Sport'], // Mazda 3 Sport
    4: ['Maxus/G10', 'Maxus\\G10'], // Maxus G10 9+1 MT
    5: ['Chevrolet/Sail 2025', 'Chevrolet/Sail%202025', 'Chevrolet\\Sail 2025'], // Chevrolet Sail LTZ 1.5
    6: ['Peugeot/208 Active', 'Peugeot/208%20Active', 'Peugeot\\208 Active'], // Peugeot 208 Active BlueHDi 1.6
    7: ['Chevrolet/Silverado', 'Chevrolet\\Silverado'], // Chevrolet Silverado LT 4WD 5.3 L V8
    8: ['Chevrolet/Tracker 2022', 'Chevrolet\\Tracker 2022'], // Chevrolet Tracker 2022
    9: ['Chevrolet/Grove 2022', 'Chevrolet\\Grove 2022'], // Chevrolet Groove 2022
    10: ['Hyundai/Accent 2021', 'Hyundai\\Accent 2021'], // Hyundai Accent 2021
    11: ['Volvo'], // Volvo (modelo por definir)
    12: ['Suzuki 4X4', 'Suzuki\\4X4'], // Suzuki Jimny 4x4
    13: ['Jac', 'JAC'], // JAC JS4 2021
    14: ['Kia/Sonet 2021', 'Kia\\Sonet 2021'], // KIA Sonet 2021
    15: ['Toyota/Rush 2021', 'Toyota\\Rush 2021'], // Toyota Rush 2021
    16: ['Hyundai/Veloster 2016', 'Hyundai\\Veloster 2016'], // Hyundai Veloster 2016
  };

  const patterns = pathPatterns[vehicle.id] || [];
  
  // Filtrar imágenes que coincidan con los patrones del vehículo
  const images = await Promise.all(
    Object.entries(allVehicleImages)
    .filter(([path]) => {
      const normalizedPath = path.replace(/\\/g, '/');
      return patterns.some(pattern => {
        const normalizedPattern = pattern.replace(/\\/g, '/');
        return normalizedPath.includes(normalizedPattern);
      });
    })
    .map(async ([, loader]) => {
      const url = await (loader as () => Promise<string>)();
      return url;
    })
  );
  images.sort(); // Ordenar para consistencia

  // Si no hay imágenes, usar la imagen principal como fallback
  if (images.length === 0) {
    const mainImage = getVehicleImage(vehicle.image);
    return mainImage ? [mainImage] : [];
  }

  return images;
};
