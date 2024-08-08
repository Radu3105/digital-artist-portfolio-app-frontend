import { Center, SimpleGrid } from "@mantine/core";
import React, { ReactNode, useEffect, useState } from "react";
import { IWork } from "../../interfaces/IWork";
import axios from "axios";
import styles from './Portfolio.module.css';
import { WorkCard } from "../work card/WorkCard";

export const Portfolio: React.FC = (): ReactNode => {
    const [works, setWorks] = useState<IWork[]>([]);
    
    useEffect(() => {
        const fetchWorks = async (): Promise<void> => {
            try {
                const response = await axios.get<IWork[]>("http://localhost:3000/works");
                setWorks(response.data);
                // console.log(response.data);
            } catch(error: any) {
                console.error(error.message);
            }
        }
        fetchWorks();
    }, []);

    return (
        <Center style={{width: "100vw"}}>
            <SimpleGrid className={styles["portfolio"]} cols={3}>
                {works && (
                    works.map(work => <WorkCard data={work}/>)
                )}
            </SimpleGrid>
        </Center>
    );
};  