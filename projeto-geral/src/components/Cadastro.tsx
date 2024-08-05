import React, { useState, useEffect } from 'react'
import { db } from '../firebase.connection'
import { doc, setDoc, addDoc, collection, getDoc, getDocs, updateDoc, deleteDoc, onSnapshot } from 'firebase/firestore'

const Cadastro = () => {

    interface Post {
        titulo: string
        autor: string
    }

    type Posts = {
        id: string
        titulo: string
        autor: string
    }

    const [titulo, setTitulo] = useState<string>('')
    const [autor, setAutor] = useState<string>('')
    const [posts, setPosts] = useState<Posts[]>([])
    const [idPost, setIdPost] = useState<string>('')

    useEffect(() => {
        async function loadPosts(){
            const onSub = onSnapshot(collection(db, "Posts"), (snapshot) => {
                
                let listPost: Posts[] = []

                snapshot.forEach((doc) => {
                    const data = doc.data() as Post
                    listPost.push({
                        id: doc.id,
                        titulo: data.titulo,
                        autor: data.autor
                    })
                })
                setPosts(listPost)
            })
        }
        loadPosts()
    }, [])




    const handleAdd = async () => {
        await addDoc(collection(db, "Posts"), {
            titulo: titulo,
            autor: autor
        })
            .then(() => {
                console.log('Dados registrados no banco de dados')
            })
            .catch((error) => {
                console.log(`Erro: ${error}`)
            })
    }

    const handleSearchPost = async () => {
        await getDoc(doc(db, "Posts", idPost))
            .then((snapshot) => {
                const data = snapshot.data() as Post
                setAutor(data.autor)
                setTitulo(data.titulo)
            })
            .catch(() => {
                console.log('Erro ao buscar.')
            })
    }

    const handleShowAllPosts = async () => {
        const postsRef = collection(db, "Posts")

        await getDocs(postsRef)
            .then((snapshot) => {

                let lista: Posts[] = []

                snapshot.forEach((doc) => {
                    const data = doc.data() as Post
                    lista.push({
                        id: doc.id,
                        titulo: data.titulo,
                        autor: data.autor
                    })
                })
                setPosts(lista)
            })
            .catch(() => {
                console.log('Erro ao buscar posts.')
            })
    }

    const handleEditPost = async () => {
        const docRef = doc(db, "Posts", idPost)
        await updateDoc(docRef, {
            titulo: titulo, //useState titulo
            autor: autor //useState autor
        })
            .then(() => {
                console.log('Post editado')
                setAutor('')
                setTitulo('')
                setIdPost('')
            })
            .catch(() => {
                console.log('Erro ao editar banco de dados.')
            })
    }

    const handleDelete = async (id: string) => {
        const docRef = doc(db, "Posts", id)
        await deleteDoc(docRef)
        .then(() => {
            console.log('Post deletado com sucesso')
            handleShowAllPosts()
        })
        .catch(() => {
            console.log('Erro ao deletar o post.')
        })
    }


    return (
        <div className='container mx-auto'>
            <div className='flex gap-2 items-center'>
                <label htmlFor="name" className='w-14'>Tema</label>
                <input type="text" placeholder='Título do tema' className='border-[1px] pl-2 rounded-lg text-sm h-6' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            </div>
            <div className='flex gap-2 items-center my-2'>
                <label htmlFor="author" className='w-14'>Autor</label>
                <input type="text" placeholder='Nome do autor' className='border-[1px] pl-2 rounded-lg text-sm h-6' value={autor} onChange={(e) => setAutor(e.target.value)} />
            </div>
            <div className='flex gap-2 items-center my-2'>
                <label htmlFor="author" className='w-14'>ID</label>
                <input type="text" placeholder='Nome do autor' className='border-[1px] pl-2 rounded-lg text-sm h-6' value={idPost} onChange={(e) => setIdPost(e.target.value)} />
            </div>

            <div className='flex gap-4'>
                <button className='px-4 py-[2px] border-2' onClick={handleAdd}>Cadastrar</button>
                <button className='px-4 py-[2px] border-2' onClick={handleSearchPost}>Buscar</button>
                <button className='px-4 py-[2px] border-2' onClick={handleShowAllPosts}>Mostrar Posts</button>
                <button className='px-4 py-[2px] border-2' onClick={handleEditPost}>Editar Post</button>
            </div>

            <div className='flex  flex-col w-full gap-2 mt-10'>
                {posts.map((item) => (
                    <div>
                        <div className='flex'>
                            <div className='group flex bg-gray-100 w-full justify-between px-4 py-2 rounded-xl hover:bg-green-200 items-center'>
                                <div className='flex gap-10 items-center'>
                                    <div className='w-60'>
                                        <p>{item.autor}</p>
                                        <p className='text-sm font-bold'>{item.id}</p>
                                    </div>
                                    <div>
                                        <p><span className='font-bold'>Título: </span>{item.titulo}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='ml-4 px-4 py-2 bg-red-200 text-white fond-bold rounded-lg cursor-pointer group-hover:bg-red-500' onClick={() => handleDelete(item.id)}>Deletar</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Cadastro