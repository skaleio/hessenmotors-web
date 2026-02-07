import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, Gauge, Fuel, Settings, MapPin } from "lucide-react";
import { vehicles, getVehicleImage, formatMaybePrice, Vehicle } from "@/data/vehicles";
import VehicleDetailModal from "@/components/VehicleDetailModal";

const VehiclesSection = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetail = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  return (
    <section id="vehiculos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vehículos <span className="text-primary">Destacados</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre nuestra selección de autos premium, cada uno verificado y certificado con los más altos estándares
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {vehicles.map((vehicle, index) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
                      // Placeholder si la imagen no existe aún
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=" + encodeURIComponent(`${vehicle.brand} ${vehicle.model}`);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  
                  {/* Year badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm font-medium">
                    {vehicle.year}
                  </div>
                  
                  {/* Consignación badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                    CONSIGNACIÓN
                  </div>
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

export default VehiclesSection;
