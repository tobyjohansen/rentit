import CarListItem from "./CarListItem";

export default function CarList() {
    return (
        <div>
        <CarListItem
            id = {biler[0].id}
            bilnavn = {biler[0].bilnavn}
            biltype = {biler[0].biltype}
            bilmodel = {biler[0].bilmodel}
        CarListItem/>
        <CarListItem
            id = {biler[1].id}
            bilnavn = {biler[1].bilnavn}
            biltype = {biler[1].biltype}
            bilmodel = {biler[1].bilmodel}
        CarListItem/>
        </div>
        
    )
}


const biler = [
    {
        id: "1",
        bilnavn: "Kulbilnavn1",
        biltype: "Toyota",
        bilmodel: "kulbilmodel1",
    },
    {
        id: "2",
        bilnavn: "kulbilnanv2",
        biltype: "Toyota",
        bilmodel: "kulbilmodel2",
    },
    {
        id: "3",
        bilnavn: "Kulbilnavn3",
        biltype: "Toyota",
        bilmodel: "kulbilmodel3",
    },
    {
        id: "4",
        bilnavn: "Kulbilnavn4",
        biltype: "Toyota",
        bilmodel: "kulbilmodel4",
    },
]