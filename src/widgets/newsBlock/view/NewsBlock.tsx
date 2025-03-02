// import {Card} from "../../../shared/ui/card/Card.tsx";
// <<<<<<< HEAD
// import {CustomButton} from "../../../shared/ui/button/CustomButton.tsx";
// =======
// import {Inputs} from "../../../shared/ui/inputs/Inputs.tsx";
//
// >>>>>>> d4948943a24a6993ff85d75ae2ec3e6cd8cd2ffd
//
//
// export const NewsBlock = () => {
//     return (
//     <>
//         <Card photo={'../../../assets/images/btn.png'}
//               title={"Кто-то должен был..."}
//               subtitle={"По оценкам SIPRI, в 2023 году глобальные оборонные расходы..."}
//               date={'01.01.2015'}>
//             <CustomButton variant={"cardButton"} actionType={"button"}>Подробнее</CustomButton>
//         </Card>
//         <Inputs placeholder={'fff'} classNameInput={'input'} type={'email'}/>
//     </>
//     );
// };
import { Card } from '../../../shared/ui/card/Card'
import { CustomButton } from '../../../shared/ui/customButton/CustomButton'
// нет этого кастомного баттона
import { Inputs } from '../../../shared/ui/inputs/Inputs'

export const NewsBlock = () => {
    return (
        <>
            <Card
                photo='../../../assets/images/btn.png'
                title='Кто-то должен был...'
                subtitle='По оценкам SIPRI, в 2023 году глобальные оборонные расходы...'
                date='01.01.2015'
            >
                <CustomButton variant='cardButton' actionType='button'>
                    Подробнее
                </CustomButton>
            </Card>

            <Inputs placeholder='fff' classNameInput='input' type='email' />
        </>
    )
}
