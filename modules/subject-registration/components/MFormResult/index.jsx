export const MFormResult = ({ result, previousStep }) => {
	return (
		<div>
			<pre>{JSON.stringify(result)}</pre>
			<button onClick={previousStep}>Previous</button>
			<button type='submit'>Submit</button>
		</div>
	)
}

MFormResult.propTypes = {}
