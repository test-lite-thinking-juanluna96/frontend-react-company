import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from '../../../common/particle.config';
import UserBox from './UserBox';

const UserLayout = (props) => {
    const { children,title } = props;
    
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <>
        <Particles id="tsparticles"
                       height="100vh"
                       width="100vw"
                       init={particlesInit}
                       options={particleConfig}
            />
                <UserBox title={title}>
                    {children}
                </UserBox>
            </>
    );
};

export default UserLayout;