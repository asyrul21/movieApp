import React from 'react';

import BaseLayout from './components/layouts/BaseLayout'
import ContentContainer from './components/layouts/ContentContainer';
import ContectMe from './components/ContactMe';

function Contact() {
    return (
        <BaseLayout>
            <ContentContainer>
                <ContectMe />
            </ContentContainer>
        </BaseLayout >
    );
}

export default Contact;