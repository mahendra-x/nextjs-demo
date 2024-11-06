const Products = async ({params}: { params: {id: string }}) => {
    const {id}= await params
    return<h1>Prodicust {id}</h1>
}

export default Products