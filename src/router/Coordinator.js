export const goToHome = (navigate) => {
    navigate(`/`)
}

export const goToShowCursos = (navigate) => {
    navigate(`/cursos`)
}

export const goToCurso = (navigate, id) => {
    navigate(`/cursos/${id}`)
}

export const goToParceiros = (navigate) => {
    navigate(`/parceiros/`)
}

export const goToTransparencia = (navigate) => {
    navigate(`/transparencia/`)
}

export const goBack = (navigate) => {
    navigate(-1)
}