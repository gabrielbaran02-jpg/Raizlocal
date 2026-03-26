export default function AjudaPage() {
  return (
    <div className="grid gap-4">
      <h1 className="text-2xl font-bold">Ajuda e onboarding</h1>
      <div className="card">
        <p className="font-semibold">Primeiros passos</p>
        <ul className="mt-2 list-inside list-disc space-y-2 text-sm text-slate-600">
          <li>Cadastre pelo menos 5 produtos com fotos reais.</li>
          <li>Marque 2 itens como destaque para aparecer primeiro no catálogo.</li>
          <li>Ative promoções para produtos com giro lento.</li>
          <li>Compartilhe o link do catálogo no WhatsApp e Instagram da loja.</li>
        </ul>
      </div>
      <div className="card text-sm text-slate-600">
        Dica: quando um item chega a 5 unidades, o sistema marca como estoque baixo para você agir rápido.
      </div>
    </div>
  );
}
