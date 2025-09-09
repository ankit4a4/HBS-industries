"use client";
import Image from "next/image";
import img1 from "@/public/productImage/1.png"
import img2 from "@/public/productImage/2.jpg"
import img3 from "@/public/productImage/3.jpg"
import img4 from "@/public/productImage/4.jpg"
import img5 from "@/public/productImage/5.jpg"
import img6 from "@/public/productImage/6.jpg"
import img7 from "@/public/productImage/7.jpg"
import img8 from "@/public/productImage/8.jpg"
import img9 from "@/public/productImage/9.jpg"
import img10 from "@/public/productImage/10.png"
import img11 from "@/public/productImage/11.png"
export default function TraysPage() {

    const trays = [
        {
            id : 1,
            title: "Solid Cable Trays",
            image: img1.src,
            description: "For Fiber-optic cable installations where bending or hanging of cables may affect system performance, these solid-bottom ( non-ventilated) cable trays are preferred.",
            tag: "solid-cable-trays"
        },
        {
            id : 2,
            title: "Ladder Type Cable Trays",
            image: img2.src,
            description: "If you need easy accessibility to the cables, this type of tray will be effective due to its ladder rungs that give easy accessibility to the cables, from top or bottom. These rungs provide convenient anchors for tying down the cables in a horizontal OR non-horizontal cable tray runs.",
            tag: "ladder-type-cable-trays"
        },
        {
            id : 3,
            title: "Perforated Cable Tray",
            image: img3.src,
            description: "These trays have holes on bottom to provide enough ventilation and position for cable lines. It is an excellent heat dispersion with a safe and smooth edge that protects cable lines from scratch.",
            tag: "perforated-cable-tray"
        },
        {
            id : 4,
            title: "Wire Mesh Cable Trays",
            image: img4.src,
            description: "Also known as basket tray. It is a light weight cost saving tray, provides heat dispersion and flexible cable management. Due to its open design, it is easy to spot issues with cables.",
            tag: "wire-mesh-cable-trays"
        },
        {
            id : 5,
            title: "Teen Bend",
            image: img5.src,
            description: "Any type of cable trays & junction boxes can be specially engineered to withstand moist condions and harsh temperatures. Fabricated from light in weight material these powder coated raceways are equipped with field installed dividers and its unique design can easily be attached to floor, ceiling or walls.",
            tag: "teen-bend"
        },
        {
            id : 6,
            title: "Vertical Curve Bend",
            image: img6.src,
            description: "Curved trays designed for vertical transitions in cable pathways without compromising structure.",
            tag: "vertical-curve-bend"
        },
        {
            id : 7,
            title: "Cross Bend",
            image: img7.src,
            description: "Cross bend trays for intersecting cable routes, ensuring neat and safe cable management.",
            tag: "cross-bend"
        },
        {
            id : 8,
            title: "Horizontal Bend",
            image: img8.src,
            description: "Horizontal bends provide smooth directional changes for cable trays along walls and ceilings.",
            tag: "horizontal-bend"
        },
        {
             id : 9,
            title: "Reducer Bend",
            image: img9.src,
            description: "Reducer bends to transition between tray sizes, maintaining proper cable alignment.",
            tag: "reducer-bend"
        },
        {
             id : 10,
            title: "Solid Cable Tray",
            image: img10.src,
            description: "Premium solid cable tray for heavy-duty installations, supporting high volumes of cabling.",
            tag: "solid-cable-tray-two"
        },
        {
             id :11,
            title: "Specifications",
            image: img11.src,
            description: "Premium solid cable tray for heavy-duty installations, supporting high volumes of cabling.",
            tag: "Specifications"
        },
    ];

    return (
        <div className="w-full">
            {trays.map((tray, index) => (
                <section
                    key={tray.tag}
                    id={tray.tag}
                    className={`flex flex-col md:flex-row items-center py-12 px-4 md:px-24 gap-8 ${index % 2 !== 0 ? "md:flex-row-reverse bg-gray-50" : ""
                        }`}
                >
                    {/* Image */}
                    <div className="md:w-1/2 w-full">
                        <Image
                            src={tray.image}
                            alt={tray.title}
                            width={600}
                            height={400}
                            className="rounded-xl shadow-lg w-full h-auto object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 w-full flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4">{tray.title}</h2>
                        <p className="text-gray-700 mb-6">{tray.description}</p>

                    </div>
                </section>
            ))}
        </div>
    );
}
