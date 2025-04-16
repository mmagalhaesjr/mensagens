import { useState } from "react";
import { StyledInserirImagens } from "./styled";

export default function InserirImagens() {
    const [imagens, setImagens] = useState({
        img1: null,
        img2: null,
        img3: null,
        img4: null,
        img5: null
    });

    const [files, setFiles] = useState({
        img1: null,
        img2: null,
        img3: null,
        img4: null,
        img5: null
    });

    const handleFileChange = (e, key) => {
        const file = e.target.files[0];
        if (file) {
            const preview = URL.createObjectURL(file);
            setImagens(prev => ({ ...prev, [key]: preview }));
            setFiles(prev => ({ ...prev, [key]: file }));
        }
    };

    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const imagensBase64 = {};

        for (const key in files) {
            if (files[key]) {
                imagensBase64[key] = await toBase64(files[key]);
            }
        }

        localStorage.setItem("imagens", JSON.stringify(imagensBase64));
        alert("Imagens salvas no localStorage!");
    };

    return (
        <StyledInserirImagens>
            <form onSubmit={handleSubmit}>
                {[1, 2, 3, 4, 5].map(num => (
                    <div className="inputBox" key={`img${num}`}>
                        <img src={imagens[`img${num}`] || ""} alt={`preview ${num}`} />
                        <input
                            className="inputCampo"
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, `img${num}`)}
                        />
                        <label className="labelInput">Imagem {num}:</label>
                    </div>
                ))}

                <div className="cxBotoes">
                    <button type="submit">Atualizar</button>
                </div>
            </form>
        </StyledInserirImagens>
    )
}
