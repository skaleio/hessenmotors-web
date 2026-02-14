import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Eye, Gauge, Fuel, Settings, MapPin, Search, X } from "lucide-react";
import { vehicles, getVehicleImage, formatPrice, formatMaybePrice, getUniqueBrands, Vehicle } from "@/data/vehicles";
import { useMetaPixel, MetaPixelEvents } from "@/hooks/useMetaPixel";
import VehicleDetailModal from "@/components/VehicleDetailModal";

const CatalogPage = () => {
  const { trackEvent } = useMetaPixel();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calcular precio mínimo y máximo de todos los vehículos
  const priceRange = useMemo(() => {
    const prices = vehicles.map(v => v.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }, []);

  // Inicializar el presupuesto máximo con el precio máximo disponible
  const [maxBudget, setMaxBudget] = useState<number>(priceRange.max);

  // Actualizar el presupuesto máximo cuando cambie el rango de precios
  useEffect(() => {
    setMaxBudget(priceRange.max);
  }, [priceRange.max]);

  // Rastrear cuando se visualiza el catálogo
  useEffect(() => {
    trackEvent(MetaPixelEvents.ViewContent, {
      content_name: 'Vehicle Catalog',
      content_category: 'Catalog',
    });
  }, [trackEvent]);

  // Rastrear búsquedas
  useEffect(() => {
    if (searchQuery.trim() !== '') {
      trackEvent(MetaPixelEvents.Search, {
        search_string: searchQuery,
        content_category: 'Vehicle Search',
      });
    }
  }, [searchQuery, trackEvent]);

  // Filtrar vehículos
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      // Filtro por búsqueda (marca o modelo)
      const matchesSearch =
        searchQuery === "" ||
        vehicle.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchQuery.toLowerCase());

      // Filtro por marca
      const matchesBrand = selectedBrand === "all" || vehicle.brand === selectedBrand;

      // Filtro por presupuesto (precio menor o igual al máximo seleccionado)
      const matchesBudget = vehicle.price <= maxBudget;

      return matchesSearch && matchesBrand && matchesBudget;
    });
  }, [searchQuery, selectedBrand, maxBudget]);

  const handleViewDetail = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
    // Rastrear evento de visualización de vehículo
    trackEvent(MetaPixelEvents.ViewContent, {
      content_name: `${vehicle.brand} ${vehicle.model}`,
      content_category: 'Vehicle Detail',
      content_ids: [vehicle.id.toString()],
      value: vehicle.price,
      currency: 'CLP',
    });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedBrand("all");
    setMaxBudget(priceRange.max);
  };

  const hasActiveFilters = searchQuery !== "" || selectedBrand !== "all" || maxBudget < priceRange.max;

  return (
    <section id="vehiculos" className="py-24 relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Catálogo de <span className="text-primary">Vehículos</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encuentra el vehículo perfecto para ti. Busca por marca, modelo o filtra por presupuesto.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            {/* Buscador */}
            <div className="mb-4">
              <label className="text-sm font-medium mb-2 block">Buscar vehículo</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar por marca o modelo..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Filtros en grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Filtro por marca */}
              <div>
                <label className="text-sm font-medium mb-2 block">Marca</label>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas las marcas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas las marcas</SelectItem>
                    {getUniqueBrands().map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Filtro por presupuesto con slider */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Presupuesto máximo: {formatPrice(maxBudget)}
                </label>
                <div className="px-2">
                  <Slider
                    value={[maxBudget]}
                    onValueChange={(value) => setMaxBudget(value[0])}
                    min={priceRange.min}
                    max={priceRange.max}
                    step={1000000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>{formatPrice(priceRange.min)}</span>
                    <span>{formatPrice(priceRange.max)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón limpiar filtros */}
            {hasActiveFilters && (
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="w-full md:w-auto"
                >
                  <X className="w-4 h-4 mr-2" />
                  Limpiar filtros
                </Button>
              </div>
            )}

            {/* Resultados */}
            <div className="mt-4 text-sm text-muted-foreground">
              {filteredVehicles.length === 0 ? (
                <p className="text-center py-4">No se encontraron vehículos con los filtros seleccionados.</p>
              ) : (
                <p className="text-center">
                  Mostrando <span className="font-semibold text-foreground">{filteredVehicles.length}</span>{" "}
                  {filteredVehicles.length === 1 ? "vehículo" : "vehículos"}
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Grid de vehículos */}
        {filteredVehicles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <div className="card-premium rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary/20">
                    <img
                      src={getVehicleImage(vehicle.image)}
                      alt={`${vehicle.brand} ${vehicle.model}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=" + encodeURIComponent(`${vehicle.brand} ${vehicle.model}`);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                    
                    {/* Year badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm font-medium">
                      {vehicle.year}
                    </div>
                    {vehicle.sold && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-green-600/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                        VENDIDO
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-1">{vehicle.brand}</h3>
                      <p className="text-muted-foreground">{vehicle.model}</p>
                    </div>

                    {/* Specs */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Gauge className="w-4 h-4 text-primary" />
                        <span>{vehicle.km}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Fuel className="w-4 h-4 text-primary" />
                        <span>{vehicle.fuel}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Settings className="w-4 h-4 text-primary" />
                        <span>{vehicle.transmission}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{vehicle.location}</span>
                      </div>
                    </div>

                    {/* Engine info */}
                    <div className="mb-4 p-3 rounded-lg bg-secondary/30 border border-border/50">
                      <p className="text-xs text-muted-foreground mb-1">Motor</p>
                      <p className="text-sm font-medium">{vehicle.engine}</p>
                    </div>

                    {/* Price and button */}
                    <div className="space-y-3">
                      <div>
                        <div className="text-2xl font-bold text-primary">
                          {formatMaybePrice(vehicle.price)}
                          {vehicle.priceNote && (
                            <span className="text-sm text-muted-foreground ml-1">{vehicle.priceNote}</span>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Pie mínimo: {formatMaybePrice(vehicle.minPayment)}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => handleViewDetail(vehicle)}
                        className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Ver detalle
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal de detalles del vehículo */}
      <VehicleDetailModal
        vehicle={selectedVehicle}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedVehicle(null);
        }}
      />
    </section>
  );
};

export default CatalogPage;
