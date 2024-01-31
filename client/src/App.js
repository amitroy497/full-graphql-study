import { useQuery, gql } from '@apollo/client';

const query = gql`
	query GetTodosWithUser {
		getTodos {
			id
			title
			completed
			user {
				id
				name
			}
		}
	}
`;
function App() {
	const { data, loading } = useQuery(query);

	console.log(data);

	return (
		<div className='App'>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<table>
					<tbody>
						{data.getTodos.map((todo) => (
							<tr key={todo?.id}>
								<td>{todo?.title}</td>
								<td>{todo?.user?.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			)}
		</div>
	);
}

export default App;
