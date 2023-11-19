import React from 'react';
import TypeIt from 'typeit-react';

export const TypeWriter = () => {
    return (
        <TypeIt
            options={{ loop: true }}
            getBeforeInit={(instance) => {
                instance.type('Spring-boot Developer!').pause(750).delete(22).pause(750).type('Machine Learning Engineer!').pause(750).delete(26).type('Java Developer!').pause(750).delete(15).type('Backend Developer!').pause(750).delete(18).type('Software Developer!');
                return instance;
            }}
        />
    );
};
