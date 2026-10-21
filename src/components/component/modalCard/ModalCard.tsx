import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import type { FC, SyntheticEvent } from 'react';
import type { Car } from '../../../types/car';
import {
  CardImg,
  Card,
  CloseBtn,
  BlueColor,
  Modal,
  ModalBackdrop,
  ConditionsList,
  DescriptionPart,
  Decoration,
  Condition,
  CarModel,
  RentalCarBtn,
} from './ModalCard.styled';
import closeBtn from '../../public/x.svg';
import auto from '../../public/error-auto.jpg';

interface ModalCardProps {
  selectedCar: Car | null;
  setIsModalOpen: (isOpen: boolean) => void;
  onClose?: () => void;
}

export const ModalCard: FC<ModalCardProps> = ({ selectedCar, setIsModalOpen, onClose }) => {
  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    } else {
      setIsModalOpen(false);
    }
  }, [onClose, setIsModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [handleClose]);

  if (!selectedCar) return null;

  const addressArray = selectedCar.address ? selectedCar.address.split(', ') : [];
  const conditionsArray = selectedCar.rentalConditions ? selectedCar.rentalConditions.split('\n') : [];
  const firstCondition = conditionsArray[0] || '';
  const hasMinAge = firstCondition.toLowerCase().includes('age') && firstCondition.length > 2;

  const modalRoot = document.querySelector('#modal-card') || document.body;

  const handleImgError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = auto;
    e.preventDefault();
  };

  return ReactDOM.createPortal(
    <>
      <ModalBackdrop onClick={handleClose} />
      <Modal>
        <Card key={selectedCar.id}>
          <div style={{ display: 'block' }}>
            <CardImg
              src={selectedCar.img || auto}
              alt={`${selectedCar.make} ${selectedCar.model}`}
              onError={handleImgError}
            />
            <Decoration>
              <p>
                {selectedCar.make} <CarModel>{selectedCar.model}</CarModel>,{' '}
                {selectedCar.year}
              </p>
            </Decoration>
            <DescriptionPart>
              {addressArray[1] || ''} | {addressArray[2] || ''} | Id: {selectedCar.id} |{' '}
              Year: {selectedCar.year} | Type: {selectedCar.type} | Fuel
              Consumption: {selectedCar.fuelConsumption} | Engine Size:{' '}
              {selectedCar.engineSize}
            </DescriptionPart>
            <p style={{ paddingTop: '14px', fontSize: '14px', lineHeight: '1.5', color: '#121417' }}>
              {selectedCar.description}
            </p>
            <p style={{ paddingTop: '20px', fontSize: '14px', fontWeight: 600, color: '#121417' }}>
              Accessories and functionalities:
            </p>
            <DescriptionPart>
              {(selectedCar.accessories || []).map(accessor => (
                <span key={accessor}>{accessor} | </span>
              ))}
              <br />
              {(selectedCar.functionalities || []).map(func => (
                <span key={func}>{func} | </span>
              ))}
            </DescriptionPart>
            <p style={{ paddingTop: '20px', fontSize: '14px', fontWeight: 600, color: '#121417' }}>
              Rental Conditions:
            </p>
            <ConditionsList>
              {hasMinAge ? (
                <Condition>
                  {firstCondition.slice(0, firstCondition.length - 2)}
                  <BlueColor>
                    {firstCondition.slice(firstCondition.length - 2)}
                  </BlueColor>
                </Condition>
              ) : firstCondition ? (
                <Condition>{firstCondition}</Condition>
              ) : null}
              {conditionsArray.slice(1).map(condition => (
                <Condition key={condition}>{condition}</Condition>
              ))}

              {selectedCar.mileage !== undefined && (
                <Condition>
                  Mileage:{' '}
                  <BlueColor>
                    {typeof selectedCar.mileage === 'number'
                      ? selectedCar.mileage.toLocaleString('en-US')
                      : selectedCar.mileage}
                  </BlueColor>
                </Condition>
              )}
              {selectedCar.rentalPrice && (
                <Condition>
                  Price: <BlueColor>{selectedCar.rentalPrice}</BlueColor>
                </Condition>
              )}
            </ConditionsList>

            <RentalCarBtn href="tel:+380730000000">Rental car</RentalCarBtn>
          </div>
        </Card>
        <CloseBtn
          onClick={handleClose}
          width="18"
          height="18"
          src={closeBtn}
          alt="close modal"
        />
      </Modal>
    </>,
    modalRoot
  );
};

export default ModalCard;
