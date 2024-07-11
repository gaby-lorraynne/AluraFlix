import Form from '../Form';
import styles from './ModalEdit.module.css';

const ModalEdit = ({ video }) => {
    return (
        <>
            {video && <>
                <dialog open={!!video} className={styles.overlay}>
                    <div className={styles.formOverlay}>
                        <Form title={'EDITAR CARD'} style={{ color: '#2271D1' }} />
                    </div>
                </dialog>
            </>}
        </>
    )
}

export default ModalEdit;