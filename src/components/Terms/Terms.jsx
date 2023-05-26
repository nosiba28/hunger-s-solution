import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <p>Here are some common terms and conditions that may be included for registering on our website:

                Eligibility: Users must be at least 18 years old to register on the website.

                User account: Users are required to create an account with a valid email address and password. They are responsible for maintaining the confidentiality of their login information and for any activity that occurs under their account.

                User-generated content: Any recipes, photos, or other content submitted by users must be their original work and not infringe on the intellectual property rights of others.

                Prohibited content: Users are prohibited from posting content that is defamatory, obscene, discriminatory, or illegal.

                Privacy policy: The website must have a privacy policy that explains how user data is collected, stored, and used.

                Intellectual property: The website owns all intellectual property rights to the content on the website, including recipes, photos, and logos.

                Liability: The website is not liable for any damages or losses incurred by users as a result of using the website.

                Modification: The terms and conditions may be modified by the website at any time, with or without notice to users.

                Termination: The website may terminate a user's account at any time for violating the terms and conditions.

                Governing law: The terms and conditions are governed by the laws of the jurisdiction where the website is based.
                <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;