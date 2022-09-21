import React, { ReactNode, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { localStore } from '../redux/store';
import '@testing-library/jest-dom';

interface Props {
	children?: ReactNode;
	// any props that come into the component
}
const RootWrapper: React.FC = ({ children }: Props) => {
	return (
		<BrowserRouter>
			<Provider store={localStore}>{children}</Provider>
		</BrowserRouter>
	);
};

// const customRender = (ui: any, options: any) =>
// 	render(ui, { wrapper: RootWrapper, ...options });

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: RootWrapper, ...options });
// re-export everything
export * from '@testing-library/react';

export { customRender as render };
