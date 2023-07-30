import React, {ReactNode} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Food from "../types/food.type";
import { IUser} from "../types/user.type";
import userService from "../services/user.service";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  food: Food;
  user: IUser | undefined;
}

function SaveChoice(food:Food, user:IUser | undefined, toggle:() => void) {
  // ajout du choix à la bdd
  userService.saveContent(user?._id, food.id)
  toggle();
}


export default function ModalScrutin(props: ModalType){
    return (
        <>
          <Modal show= {props.isOpen} onHide={props.toggle}>
            <Modal.Header closeButton>
              <Modal.Title>Validez-vous votre choix ?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {props.food.name}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.toggle}>
                Close
              </Button>
              <Button variant="primary" href="/scrutinClass" onClick={() => SaveChoice(props.food, props.user, props.toggle)}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}






