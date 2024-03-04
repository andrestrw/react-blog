import LiCol from '../componentes-blog/LiCol';

export const Explanation = () => {
	return (
		<div className=' w-full  '>
			<div className=' my-3 tituloCodigo text-[40px] font-bold sm:text-[58px]'>
				Explicación
			</div>
			<ul className='text-[18px]'>
				<LiCol className='pb-3'>
					El siguiente proyecto práctico de lista de tareas, usa ganchos nativos
					de React como useReducer y useRef para almacenar y manipular la
					información de forma interactiva.
				</LiCol>

				<LiCol>
					Adentrándonos un poco más en el lado técnico 📄 con respecto al uso
					del Reducer, su aplicación implica recibir tanto el estado actual como
					las acciones que enviamos. Basándonos en este estado y estas acciones,
					tenemos la capacidad de generar un nuevo estado. Esto nos permite
					construir, modificar o generar completamente un nuevo estado basado en
					nuestras operaciones dentro del propio componente.
				</LiCol>
				<LiCol>
					Como nota interesante, si utilizáramos useReducer en conjunto con
					useContext, podríamos lograr una funcionalidad muy similar para
					gestionar el estado global de nuestra aplicación a través de
					bibliotecas 📚 como Redux.
				</LiCol>
				<LiCol>
					Para concluir, como un bono adicional, este proyecto es completamente
					responsive. Se puede ver en una variedad de dispositivos, incluyendo
					computadoras de 21 pulgadas, tamaños intermedios como un iPad mini, o
					incluso un iPhone SE. 📲 Puedes encontrarlo en el proyecto como uno de
					los posts del blog -{' '}
					<a href='https://lnkd.in/dDByQE_R'>https://lnkd.in/dDByQE_R</a>
				</LiCol>
			</ul>
		</div>
	);
};
