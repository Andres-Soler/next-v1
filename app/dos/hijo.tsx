import { ReactNode } from 'react';

export default function Hijo({ children }: { children: ReactNode }) {
    return (
        <div>
            este es el hijo {children}
        </div>
    );
}