import {Card} from "../../../shared/ui/card/Card.tsx";
import {CustomButton} from "../../../shared/ui/button/CustomButton.tsx";


export const NewsBlock = () => {
    return (
    <>
        <Card photo={'../../../assets/images/btn.png'}
              title={"Кто-то должен был..."}
              subtitle={"По оценкам SIPRI, в 2023 году глобальные оборонные расходы..."}
              date={'01.01.2015'}>
            <CustomButton variant={"cardButton"} actionType={"button"}>Подробнее</CustomButton>
        </Card>
    </>
    );
};
