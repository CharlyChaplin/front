import { AppStyles, Footer, PageWrapper } from "App.styled";
import Header from "features/Header/Header";
import { Suspense } from "react";
// import PrivateRoutes from "routes/PrivateRoutes";
import PublicRoutes from "routes/PublicRoutes";

function App() {
	return (
		<>
			<AppStyles />

			<Header />

			<Suspense fallback={'Loading...'}>
				<PageWrapper>
					{/* <PrivateRoutes /> */}
					<PublicRoutes />
				</PageWrapper>

			</Suspense>

			<Footer>
				<div>&copy; Маркетплейс MW</div>
			</Footer>
		</>
	);
}

export default App;
