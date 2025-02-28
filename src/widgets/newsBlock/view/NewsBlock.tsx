import {Card} from "../../../shared/ui/card/Card.tsx";
import {Inputs} from "../../../shared/ui/inputs/Inputs.tsx";



export const NewsBlock = () => {
    return (
    <>
        <Card photo={'../../../assets/images/btn.png'}
              title={"Кто-то должен был..."}
              subtitle={"По оценкам SIPRI, в 2023 году глобальные оборонные расходы..."}
              date={'01.01.2015'}>

        </Card>
        <Inputs placeholder={'fff'} classNameInput={'input'} type={'email'}/>
    </>
    );
};
