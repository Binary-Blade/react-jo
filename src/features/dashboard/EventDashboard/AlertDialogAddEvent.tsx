import { PlusIcon } from '@/components/ui/IconComponents';
import { FormAddNewEvent } from '@/components/form/FormAddNewEvent';
import { AlertDialog, AlertDialogContent, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const AlertDialogAddEvent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleSuccess = () => {
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={handleOpenChange}>
      <AlertDialogTrigger>
        <Button className="w-52">
          <PlusIcon className="mr-2 h-4 w-4" />
          Ajouter un événement
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <FormAddNewEvent onSuccess={handleSuccess} />
      </AlertDialogContent>
    </AlertDialog>
  );
};
