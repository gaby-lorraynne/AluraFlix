import Form from '../Form';
import styles from './ModalEdit.module.css';
import { IoIosCloseCircleOutline } from "react-icons/io";

const ModalEdit = ({ video, aoFechar }) => {
    return (
        <>
            {video && <>
                <dialog open={!!video} onClose={aoFechar} className={styles.overlay}>
                    <div className={styles.formOverlay}>
                        <Form title={'EDITAR CARD'} style={{ color: '#2271D1' }} />
                        <form method="dialog">
                        <button formMethod="dialog" className={styles.botaoClose}>
                            <IoIosCloseCircleOutline size={40} color='#FFFFFF'/>
                        </button>
                    </form>
                    </div>
                </dialog>
            </>}
        </>
    )
}

export default ModalEdit;