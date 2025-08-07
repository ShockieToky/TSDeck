import React, { useState, ChangeEvent, FormEvent } from 'react';

interface RegistrationFormData {
    username: string;
    email: string;
    password: string;
}

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState<RegistrationFormData>({
        username: '',
        email: '',
        password: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // route API ici
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '0 auto' }}>
            <h2>Inscription</h2>
            <div style={{ marginBottom: 12 }}>
                <label htmlFor="username">Nom d'utilisateur</label><br />
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={{ marginBottom: 12 }}>
                <label htmlFor="email">Email</label><br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={{ marginBottom: 12 }}>
                <label htmlFor="password">Mot de passe</label><br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">S'inscrire</button>
            {submitted && (
                <div style={{ color: 'green', marginTop: 16 }}>
                    Inscription envoyée !
                </div>
            )}
        </form>
    );
};

export default RegistrationForm;
