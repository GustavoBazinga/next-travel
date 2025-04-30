export default function ContactPage() {
    return (
        <main>
        <h1>Contato</h1>
        <p>Entre em contato conosco!</p>
        <form>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <button type="submit">Enviar</button>
        </form>
        </main>
    );
}