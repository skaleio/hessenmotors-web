import { useState, useEffect, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gauge, Fuel, Settings, MapPin, Calendar, MessageCircle, X } from "lucide-react";
import { Vehicle, formatMaybePrice, getVehicleImage, getVehicleImages } from "@/data/vehicles";
import ImageCarousel from "@/components/ImageCarousel";

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

const VehicleDetailModal = ({ vehicle, isOpen, onClose }: VehicleDetailModalProps) => {
  const [vehicleImages, setVehicleImages] = useState<string[]>([]);

  useEffect(() => {
    let isActive = true;

    const loadImages = async () => {
      if (!vehicle) return;
      try {
        const images = await getVehicleImages(vehicle);
        if (!isActive) return;
        // Si no hay imágenes en la carpeta, usar la imagen principal como fallback
        if (images.length === 0) {
          const mainImage = getVehicleImage(vehicle.image);
          setVehicleImages(mainImage ? [mainImage] : []);
        } else {
          setVehicleImages(images);
        }
      } catch (error) {
        if (!isActive) return;
        // Fallback a imagen principal si hay error
        const mainImage = getVehicleImage(vehicle.image);
        setVehicleImages(mainImage ? [mainImage] : []);
      }
    };

    loadImages();
    return () => {
      isActive = false;
    };
  }, [vehicle]);

  if (!vehicle) return null;

  const openWhatsApp = () => {
    const message = `Hola! Me gustaria una asesoría\n\nMe interesa el ${vehicle.brand} ${vehicle.model} - ${formatMaybePrice(vehicle.price)}`;
    window.open(
      `https://wa.me/+56967569483?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl">
            {vehicle.brand} {vehicle.model}
          </DialogTitle>
          <DialogDescription className="text-base">
            Año {vehicle.year} · {vehicle.location}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Carrusel de imágenes */}
          <ImageCarousel 
            images={vehicleImages} 
            vehicleName={`${vehicle.brand} ${vehicle.model}`}
            year={vehicle.year}
            sold={vehicle.sold}
          />

          {/* Grid de información */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Especificaciones */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Especificaciones</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
                  <Gauge className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Kilometraje</p>
                    <p className="font-medium">{vehicle.km}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
                  <Fuel className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Combustible</p>
                    <p className="font-medium">{vehicle.fuel}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
                  <Settings className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Transmisión</p>
                    <p className="font-medium">{vehicle.transmission}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-medium">{vehicle.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/50">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Año</p>
                    <p className="font-medium">{vehicle.year}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Motor y precio */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Motor</h3>
              <div className="p-4 rounded-lg bg-secondary/30 border border-border/50">
                <p className="text-base font-medium">{vehicle.engine}</p>
                <p className="text-sm text-muted-foreground mt-2">Tracción: {vehicle.traction}</p>
              </div>

              <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
                <h3 className="text-xl font-bold mb-4">Precio</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Precio final</p>
                    <p className="text-3xl font-bold text-primary">
                      {formatMaybePrice(vehicle.price)}
                      {vehicle.priceNote && (
                        <span className="text-lg text-muted-foreground ml-2">{vehicle.priceNote}</span>
                      )}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-primary/20">
                    <p className="text-sm text-muted-foreground">Pie mínimo</p>
                    <p className="text-xl font-semibold">{formatMaybePrice(vehicle.minPayment)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t">
            <Button
              onClick={openWhatsApp}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contactar por WhatsApp
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1 h-12"
            >
              Cerrar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleDetailModal;
