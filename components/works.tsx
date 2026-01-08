"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const works = [
  {
    id: 1,
    title: "Techo de chapa",
    description:
      "Soluciones prácticas y duraderas para cubiertas de chapa, con colocación precisa y ajustes profesionales.",
    details: "Máxima eficacia para su techo, requiere poco mantenimiento.",
    mainImage:
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470853/PRINCIPAL_x1rglh.webp",
    gallery: [
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470853/130157154_207367704310864_8943590924892125445_n_fzly34.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470853/601429657_18167007496376781_5883373661263126161_n_n5bmxp.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470853/491444200_18142300009376781_3279200931069652266_n_r8bjdt.webp",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470853/244661132_1793934427468140_1256092716192483257_n_nh1jmr.jpg",
    ],
  },
  {
    id: 2,
    title: "Techo de tejas y pizarra",
    description:
      "Trabajos especializados en techos tradicionales, cuidando la estética y la correcta colocación de cada pieza.",
    details:
      "Es importante realizar su mantenimiento para evitar futuros problemas.",
    mainImage:
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470902/PRINCIPAL_fw3agc.jpg",
    gallery: [
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470903/67755672_166081791106792_6514054618214399300_n_uzqlfn.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470902/69692772_466247050635926_5649263872690175019_n_ptytsm.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470901/434472330_441297308300169_243228006508231626_n_xtpb62.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470901/346046114_3420869248242318_2538028305788334266_n_r9uwi3.jpg",
    ],
  },
  {
    id: 3,
    title: "Canaletas y zinguería",
    description:
      "Diseño y colocación de sistemas de desagüe eficientes que garantizan una correcta evacuación del agua.",
    details: "Proteja los cimientos, paredes y techos de posibles deterioros.",
    mainImage:
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470948/principal_e2uw15.jpg",
    gallery: [
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470949/202599503_598684274447615_3498616692206556599_n_kenpi3.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470948/120522070_724429968414860_5396540908905729475_n_iwyo6a.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470947/601369286_18167007538376781_8327145799038609018_n_bsfx00.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470946/272685603_145125261232269_2210202406290129878_n_iaqbpe.jpg",
    ],
  },
  {
    id: 4,
    title: "Goteras y filtraciones",
    description:
      "Diagnóstico preciso de filtraciones y reparación definitiva para evitar daños estructurales.",
    details:
      "Somos especialistas, detectamos la posible gotera o filtración y actuamos con todas las medidas para que no vuelva a manifestarse.",
    mainImage:
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470978/PRINCIPAL_cc6zjo.jpg",
    gallery: [
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470979/69081181_166676381157718_178534981185420412_n_tlep30.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470981/128174361_156360669571645_1747133664970431259_n_yxha5t.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470982/128541173_3510273055694620_3874346614722915912_n_co8d9k.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767470978/336052523_162474556283531_4518264352834111196_n_clkgvd.jpg",
    ],
  },
  {
    id: 5,
    title: "Estructuras en madera y metal",
    description:
      "Construcción de estructuras resistentes y funcionales, combinando técnicas artesanales y materiales de calidad.",
    details:
      "Trabajos en madera realizados de forma artesanal. Estructuras metálicas de alta resistencia.",
    mainImage:
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767471033/PRINCIPAL_cuccfy.jpg",
    gallery: [
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767471037/303333266_848148872804620_1964036748932184221_n_jtatfp.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767471036/243960849_557833358831462_2924896684050196304_n_iw6g7w.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767471035/53729362_832257757120035_370572984389096790_n_oeu5r0.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767471032/374395583_4318182648407093_3742448825739280033_n_llxfcg.jpg",
    ],
  },
  {
    id: 6,
    title: "Impermeabilización",
    description:
      "Aplicación de sistemas impermeables que protegen el techo y prolongan su vida útil.",
    details:
      "Evite filtraciones que podrían provocar el deterioro de materiales y manchas.",
    mainImage:
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767471060/PRINCIPAL_yc7v0r.jpg",
    gallery: [
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767471063/560423771_18159376714376781_7253233970262231521_n_mmptbq.webp",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767471061/469022347_1500235707332179_4028890371805942383_n_p9kvgg.jpg",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767471059/561590423_18159376705376781_7747815156582161610_n_dividf.webp",
      "https://res.cloudinary.com/dhwsxp2c8/image/upload/v1767471058/560449393_18159376723376781_6389579435751552814_n_gjypvu.webp",
    ],
  },
];

export function Works() {
  const [selectedWork, setSelectedWork] = useState<(typeof works)[0] | null>(
    null
  );

  return (
    <section id="trabajos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Trabajos Realizados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conozca los diferentes tipos de trabajos que realizamos con
            excelencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <Card
              key={work.id}
              className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
              onClick={() => setSelectedWork(work)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={work.mainImage || "/placeholder.svg"}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Disponible
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {work.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {work.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Gallery Dialog */}
      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {selectedWork?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {selectedWork?.details}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedWork?.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-lg overflow-hidden"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${selectedWork.title} - Imagen ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
