import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Header } from '@/features/header/Header';
import { EventHero } from '@/components/hero/EventHero';
import { useContactForm } from '@/hooks/useContactForm';

// HACK: IMPROVE IT
export default function ContactUsPage() {
  const { register, handleSubmit, onSubmit, errors } = useContactForm();

  return (
    <>
      <Header />
      <EventHero />
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Contactez les Jeux Olympiques de Paris
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Vous avez des questions ou des commentaires à partager avec l'organisation des Jeux
                Olympiques de Paris 2024 ? Remplissez le formulaire ci-dessous et nous vous
                répondrons dans les plus brefs délais.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Formulaire de contact</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Partagez vos questions, commentaires ou préoccupations.
                  </p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom</Label>
                      <Input id="name" placeholder="Entrez votre nom" {...register('name')} />
                      {errors.name && (
                        <span className="text-red-500 text-sm">{errors.name.message}</span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="Entrez votre email"
                        type="email"
                        {...register('email')}
                      />
                      {errors.email && (
                        <span className="text-red-500 text-sm">{errors.email.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input id="subject" placeholder="Entrez le sujet" {...register('subject')} />
                    {errors.subject && (
                      <span className="text-red-500 text-sm">{errors.subject.message}</span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      className="min-h-[120px]"
                      id="message"
                      placeholder="Entrez votre message"
                      {...register('message')}
                    />
                    {errors.message && (
                      <span className="text-red-500 text-sm">{errors.message.message}</span>
                    )}
                  </div>
                  <Button type="submit">Envoyer le message</Button>
                </form>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Informations de contact</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    Vous pouvez également nous joindre par téléphone ou par courrier.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Adresse</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Comité d'Organisation des Jeux Olympiques de Paris 2024
                      <br />
                      96 avenue du Président Wilson
                      <br />
                      93200 Saint-Denis, France
                    </p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Téléphone</h3>
                    <p className="text-gray-500 dark:text-gray-400">+33 1 41 83 17 00</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-500 dark:text-gray-400">contact@paris2024.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
