import { Dialog, Text } from "@rneui/themed";

const ConfirmDialogComponent = ({ title, text, isVisible, toggleDialog, onConfirm, onClose }) => {
    return (
        <Dialog
            isVisible={isVisible}
            onBackdropPress={toggleDialog}
        >
            <Dialog.Title title={title} />
            <Text>{text}</Text>
            <Dialog.Actions>
                <Dialog.Button title="Подтвердить" onPress={() => onConfirm()} />
                <Dialog.Button title="Отменить" onPress={() => onClose()} />
            </Dialog.Actions>
        </Dialog>
    );
};

export default ConfirmDialogComponent;